import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, currentLevel, course, motivation, motherTongue, otherLanguages, referral } = await req.json();

  const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    auth: {
      user: process.env.BREVO_USER,
      pass: process.env.BREVO_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Information request" <info@learn-dutch-online.com>`,
      to: 'info@learn-dutch-online.com', // Vervang dit met je eigen e-mailadres
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
    console.error('Error sending email:', err);
    return NextResponse.json({ error: 'Email sending failed' }, { status: 500 });
  }
}
