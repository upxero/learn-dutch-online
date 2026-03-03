import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

async function verifyTurnstile(token: string) {
  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.TURNSTILE_SECRET_KEY}&response=${token}`,
    }
  );

  const data = await res.json();
  return data.success;
}

export async function POST(req: Request) {
  const {
    name,
    email,
    currentLevel,
    course,
    motivation,
    motherTongue,
    otherLanguages,
    referral,
    token,
  } = await req.json();

  // 🔐 1️⃣ Check token aanwezig
  if (!token) {
    return NextResponse.json(
      { error: "Missing Turnstile token" },
      { status: 400 }
    );
  }

  // 🔐 2️⃣ Verify token bij Cloudflare
  const isHuman = await verifyTurnstile(token);

  if (!isHuman) {
    return NextResponse.json(
      { error: "Bot verification failed" },
      { status: 400 }
    );
  }

  // 📧 3️⃣ Brevo mail
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
      from: `"Information request" <info@learn-dutch-online.com>`,
      to: "info@learn-dutch-online.com",
      subject: `New request from ${name}`,
      html: `
        <h3>New request for a course:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Level:</strong> ${currentLevel}</p>
        <p><strong>Course:</strong> ${course}</p>
        <p><strong>Motivation:</strong> ${motivation}</p>
        <p><strong>Mother Tongue:</strong> ${motherTongue}</p>
        <p><strong>Other Languages:</strong> ${otherLanguages}</p>
        <p><strong>Referral:</strong> ${referral}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error sending email:", err);
    return NextResponse.json(
      { error: "Email sending failed" },
      { status: 500 }
    );
  }
}