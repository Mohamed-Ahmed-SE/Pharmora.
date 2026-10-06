import { toNextJsHandler } from "better-auth/next-js";
import { auth, isAuthConfigured } from "@/lib/auth/auth";
import { NextResponse } from "next/server";

const unavailable = () => NextResponse.json({ message: "Authentication is not configured." }, { status: 503 });

export const GET = isAuthConfigured && auth ? toNextJsHandler(auth).GET : unavailable;
export const POST = isAuthConfigured && auth ? toNextJsHandler(auth).POST : unavailable;
