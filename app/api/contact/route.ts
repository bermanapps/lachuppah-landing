import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { firstName, lastName, email, phone, subject, message } = await req.json();

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: "LaChupah Contact Form <noreply@lachuppah.app>",
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
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
