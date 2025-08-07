import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body = await req.json()
  const { name, email, phone, message } = body

  console.log("Name:", name)
  console.log("Email:", email)
  console.log("Phone:", phone)
  console.log("Message:", message)

  try {
    const data = await resend.emails.send({
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
