import { NextRequest, NextResponse } from "next/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Corps de requête invalide." },
      { status: 400 },
    );
  }

  const email =
    body && typeof body === "object" && "email" in body
      ? String((body as Record<string, unknown>).email)
          .trim()
          .toLowerCase()
      : "";

  if (!email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { error: "Adresse e-mail invalide." },
      { status: 400 },
    );
  }

  const payloadApiUrl = process.env.PAYLOAD_API_URL;
  if (!payloadApiUrl) {
    return NextResponse.json(
      { error: "Configuration serveur manquante." },
      { status: 500 },
    );
  }

  try {
    const response = await fetch(
      `${payloadApiUrl}/api/newsletter-subscribers`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      },
    );

    if (response.status === 201 || response.ok) {
      return NextResponse.json({ success: true }, { status: 201 });
    }

    const data = await response.json().catch(() => ({}));

    // Payload returns 400 with duplicate-key error message
    const errorMsg: string =
      typeof data?.errors?.[0]?.message === "string"
        ? data.errors[0].message
        : typeof data?.message === "string"
          ? data.message
          : "";

    if (
      response.status === 400 &&
      (errorMsg.toLowerCase().includes("unique") ||
        errorMsg.toLowerCase().includes("duplicate") ||
        errorMsg.toLowerCase().includes("already"))
    ) {
      return NextResponse.json(
        { error: "Cette adresse e-mail est déjà abonnée." },
        { status: 409 },
      );
    }

    return NextResponse.json(
      { error: "Une erreur est survenue. Veuillez réessayer." },
      { status: 500 },
    );
  } catch {
    return NextResponse.json(
      { error: "Impossible de contacter le serveur." },
      { status: 500 },
    );
  }
}
