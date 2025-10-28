import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { companyName, contactPerson, email, phone, employeesCount, trainingInterest, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    auth: {
      user: process.env.BREVO_USER,
      pass: process.env.BREVO_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Corporate Inquiry" <info@learn-dutch-online.com>`,
      to: "info@learn-dutch-online.com",
      subject: `New corporate request from ${companyName}`,
      html: `
        <h3>New corporate training request:</h3>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Contact Person:</strong> ${contactPerson}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "-"}</p>
        <p><strong>Number of Employees:</strong> ${employeesCount}</p>
        <p><strong>Training Interest:</strong> ${trainingInterest}</p>
        <p><strong>Message:</strong> ${message || "-"}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error sending email:", err);
    return NextResponse.json({ error: "Email sending failed" }, { status: 500 });
  }
}
