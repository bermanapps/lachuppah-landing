import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { firstName, lastName, email, phone, subject, message } = await req.json();

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Server misconfiguration", detail: "RESEND_API_KEY missing" }, { status: 500 });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: "LaChuppah Contact Form <noreply@lachuppah.app>",
      to: "support@lachuppah.app",
      replyTo: email,
      subject: `[Contact] ${subject || "General Inquiry"} — ${firstName} ${lastName}`,
      text: [
        `Name:    ${firstName} ${lastName}`,
        `Email:   ${email}`,
        `Phone:   ${phone || "Not provided"}`,
        `Subject: ${subject || "Not specified"}`,
        ``,
        `Message:`,
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", JSON.stringify(error));
      return NextResponse.json({ error: "Failed to send email", detail: error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Unexpected error in contact route:", err);
    return NextResponse.json({ error: "Unexpected server error", detail: String(err) }, { status: 500 });
  }
}
