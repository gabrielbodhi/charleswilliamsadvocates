import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function asText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const firstName = asText(data.firstName);
    const lastName = asText(data.lastName);
    const email = asText(data.email);
    const phone = asText(data.phone);
    const purchaseType = asText(data.purchaseType);
    const timeline = asText(data.timeline);
    const budget = asText(data.budget);
    const referral = asText(data.referral);
    const message = asText(data.message);

    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required contact fields" },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      );
    }

    const safeFirstName = escapeHtml(firstName);
    const safeLastName = escapeHtml(lastName);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safePurchaseType = escapeHtml(purchaseType);
    const safeTimeline = escapeHtml(timeline);
    const safeBudget = escapeHtml(budget);
    const safeReferral = escapeHtml(referral);
    const safeMessage = escapeHtml(message);

    await resend.emails.send({
      from: "Williams Advocates <onboarding@resend.dev>",
      to: "charlie@williamsadvocates.com.au",
      replyTo: email,
      subject: `New enquiry from ${firstName} ${lastName}`,
      html: `
        <h2>New Website Enquiry</h2>
        <p><strong>Name:</strong> ${safeFirstName} ${safeLastName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Purchase Type:</strong> ${safePurchaseType || "Not provided"}</p>
        <p><strong>Timeline:</strong> ${safeTimeline || "Not provided"}</p>
        <p><strong>Budget:</strong> ${safeBudget || "Not provided"}</p>
        <p><strong>Referral:</strong> ${safeReferral || "Not provided"}</p>
        <p><strong>Message:</strong><br/>${safeMessage || "Not provided"}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process enquiry" },
      { status: 500 }
    );
  }
}
