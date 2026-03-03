import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const {
      companyName,
      contactPerson,
      email,
      phone,
      employeesCount,
      trainingInterest,
      message,
      token,
    } = await req.json();

    // 1️⃣ Verify Turnstile
    const turnstileRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${process.env.TURNSTILE_SECRET_KEY}&response=${token}`,
      }
    );

    const turnstileData = await turnstileRes.json();

    if (!turnstileData.success) {
      return NextResponse.json(
        { error: "Turnstile verification failed" },
        { status: 400 }
      );
    }

    // 2️⃣ Basic validation
    if (!companyName || !contactPerson || !email || !employeesCount || !trainingInterest) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      auth: {
        user: process.env.BREVO_USER,
        pass: process.env.BREVO_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Corporate Inquiry" <info@learn-dutch-online.com>`,
      to: "info@learn-dutch-online.com",
      replyTo: email,
      subject: `New corporate request from ${companyName}`,
      html: `
        <h3>New corporate training request:</h3>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Contact Person:</strong> ${contactPerson}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "-"}</p>
        <p><strong>Employees:</strong> ${employeesCount}</p>
        <p><strong>Training:</strong> ${trainingInterest}</p>
        <p><strong>Message:</strong> ${message || "-"}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Corporate form error:", err);
    return NextResponse.json(
      { error: "Email sending failed" },
      { status: 500 }
    );
  }
}