import assert from "node:assert/strict";
import test from "node:test";
import { readLimitedJson } from "@/lib/http";

test("bounded JSON reader accepts a valid JSON request body", async () => {
  const request = new Request("http://localhost/api/contact", { method: "POST", body: JSON.stringify({ message: "hello" }) });
  assert.deepEqual(await readLimitedJson(request), { success: true, payload: { message: "hello" } });
});

test("bounded JSON reader rejects malformed and oversized bodies", async () => {
  const malformed = new Request("http://localhost/api/contact", { method: "POST", body: "{" });
  const oversizedStream = new Request("http://localhost/api/contact", { method: "POST", body: "x".repeat(16_385) });
  const oversizedHeader = new Request("http://localhost/api/contact", { method: "POST", headers: { "content-length": "16385" }, body: "x" });
  const malformedResult = await readLimitedJson(malformed);
  const oversizedStreamResult = await readLimitedJson(oversizedStream);
  const oversizedHeaderResult = await readLimitedJson(oversizedHeader);
  assert.deepEqual(malformedResult, { success: false, status: 400 });
  assert.deepEqual(oversizedStreamResult, { success: false, status: 413 });
  assert.deepEqual(oversizedHeaderResult, { success: false, status: 413 });
});
