import { NextResponse } from "next/server";
import { z } from "zod";
import { readLimitedJson } from "@/lib/http";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().max(40).optional(),
  subject: z.string().trim().min(3).max(160),
  department: z.string().trim().max(100).optional(),
  message: z.string().trim().min(10).max(5000),
});

export async function POST(request: Request) {
  const body = await readLimitedJson(request);
  if (!body.success) return NextResponse.json({ message: body.status === 413 ? "The request is too large." : "The request must contain valid JSON." }, { status: body.status });
  const parsed = contactSchema.safeParse(body.payload);
  if (!parsed.success) return NextResponse.json({ message: "Check the required fields and try again." }, { status: 400 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ message: "Contact submissions are not configured yet. No message was stored." }, { status: 503 });
  return NextResponse.json({ message: "Message storage is not yet enabled. No message was stored." }, { status: 503 });
}
