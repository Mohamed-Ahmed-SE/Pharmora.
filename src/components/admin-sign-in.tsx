"use client";

import { useState, type FormEvent } from "react";
import { authClient } from "@/lib/auth/client";

export function AdminSignIn() {
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);

  async function signIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setPending(true);
    setMessage("");
    const fields = new FormData(form);
    const response = await authClient.signIn.email({ email: String(fields.get("email")), password: String(fields.get("password")) });
    setMessage(response.error?.message ?? "Signed in. Refresh the dashboard to continue.");
    setPending(false);
  }

  return <form onSubmit={signIn} className="form-grid"><label className="form-field full">Email<input name="email" type="email" autoComplete="username" required /></label><label className="form-field full">Password<input name="password" type="password" autoComplete="current-password" required /></label><button className="button" type="submit" disabled={pending}>{pending ? "Signing in…" : "Sign in"}</button>{message && <p className="form-status" role="status">{message}</p>}</form>;
}
