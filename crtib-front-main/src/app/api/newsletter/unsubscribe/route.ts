import { NextRequest, NextResponse } from "next/server";
import { redirect } from "next/navigation";

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");

  if (!token) {
    redirect("/newsletter/unsubscribed?error=invalid");
  }

  const payloadApiUrl = process.env.PAYLOAD_API_URL;
  if (!payloadApiUrl) {
    redirect("/newsletter/unsubscribed?error=server");
  }

  try {
    const response = await fetch(
      `${payloadApiUrl}/api/newsletter-subscribers/unsubscribe/${encodeURIComponent(token)}`,
      { method: "PATCH" },
    );

    if (response.ok) {
      redirect("/newsletter/unsubscribed");
    }

    if (response.status === 404) {
      redirect("/newsletter/unsubscribed?error=invalid");
    }

    redirect("/newsletter/unsubscribed?error=server");
  } catch {
    redirect("/newsletter/unsubscribed?error=server");
  }
}
