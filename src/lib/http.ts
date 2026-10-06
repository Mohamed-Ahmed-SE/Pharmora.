const maximumJsonBodyBytes = 16_384;

type LimitedJsonResult = { success: true; payload: unknown } | { success: false; status: 400 | 413 };
type CollectedBody = { success: true; chunks: Uint8Array[]; byteLength: number } | { success: false; status: 413 };

export async function readLimitedJson(request: Request): Promise<LimitedJsonResult> {
  const contentLength = Number(request.headers.get("content-length"));
  if (contentLength > maximumJsonBodyBytes) return { success: false, status: 413 };
  if (!request.body) return { success: false, status: 400 };

  const collected = await collectBody(request.body.getReader());
  if (!collected.success) return collected;
  const bytes = mergeChunks(collected.chunks, collected.byteLength);
  return parseJson(bytes);
}

async function collectBody(reader: ReadableStreamDefaultReader<Uint8Array>): Promise<CollectedBody> {
  const chunks: Uint8Array[] = [];
  let byteLength = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) return { success: true, chunks, byteLength };
      byteLength += value.byteLength;
      if (byteLength > maximumJsonBodyBytes) {
        await reader.cancel();
        return { success: false, status: 413 };
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }
}

function mergeChunks(chunks: Uint8Array[], byteLength: number) {
  const bytes = new Uint8Array(byteLength);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return bytes;
}

function parseJson(bytes: Uint8Array): LimitedJsonResult {
  try {
    return { success: true, payload: JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(bytes)) as unknown };
  } catch (error) {
    if (error instanceof SyntaxError || error instanceof TypeError) return { success: false, status: 400 };
    throw error;
  }
}
