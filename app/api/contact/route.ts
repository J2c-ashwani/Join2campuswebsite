import { NextResponse } from "next/server"
import { Resend } from "resend"

// Lazy initialization to avoid build-time errors when API key is not set
let resend: Resend | null = null;

function getResend() {
  if (!resend && process.env.RESEND_API_KEY) {
    resend = new Resend(process.env.RESEND_API_KEY);
  }
  return resend;
}

export async function POST(req: Request) {
  const body = await req.json()
  const { name, email, phone, message } = body

  console.log("Name:", name)
  console.log("Email:", email)
  console.log("Phone:", phone)
  console.log("Message:", message)

  const resendClient = getResend();

  if (!resendClient) {
    console.warn("⚠️ RESEND_API_KEY not configured. Email not sent.");
    return NextResponse.json({ success: true, message: "Form received (email disabled)" });
  }

  try {
    const data = await resendClient.emails.send({
      from: "Join2Campus <contact@join2campus.com>",
      to: ["support@join2campus.com"],
      subject: "New Contact Form Submission",
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("❌ Error sending email:", error)
    return NextResponse.json({ success: false, error })
  }
}
