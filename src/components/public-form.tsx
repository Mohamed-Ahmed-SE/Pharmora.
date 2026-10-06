"use client";

import { useState, type FormEvent } from "react";

type PublicFormProps = { endpoint: "/api/contact" | "/api/applications"; submitLabel: string; children: React.ReactNode };

export function PublicForm({ endpoint, submitLabel, children }: PublicFormProps) {
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSending(true);
    setStatus("");
    const form = event.currentTarget;
    const fields = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch(endpoint, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(fields) });
      const payload = await response.json() as { message?: string };
      setStatus(payload.message ?? "We could not submit this form.");
      if (response.ok) form.reset();
    } catch {
      setStatus("The service could not be reached. Please try again later.");
    } finally {
      setIsSending(false);
    }
  }

  return <form onSubmit={submitForm} noValidate>{children}<button className="button" type="submit" disabled={isSending}>{isSending ? "Sending…" : submitLabel}</button>{status && <p className="form-status" role="status">{status}</p>}</form>;
}
