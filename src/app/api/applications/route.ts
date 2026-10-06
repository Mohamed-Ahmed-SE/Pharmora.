import { NextResponse } from "next/server";
import { z } from "zod";
import { readLimitedJson } from "@/lib/http";

const applicationSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().min(5).max(40),
  role: z.string().trim().min(2).max(160),
  coverNote: z.string().trim().max(5000).optional(),
});

export async function POST(request: Request) {
  const body = await readLimitedJson(request);
  if (!body.success) return NextResponse.json({ message: body.status === 413 ? "The request is too large." : "The request must contain valid JSON." }, { status: body.status });
  const parsed = applicationSchema.safeParse(body.payload);
  if (!parsed.success) return NextResponse.json({ message: "Check the required fields and try again." }, { status: 400 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ message: "Applications are not configured yet. No application was stored." }, { status: 503 });
  return NextResponse.json({ message: "Application storage is not yet enabled. No application was stored." }, { status: 503 });
}
