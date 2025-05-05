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
      from: `"Dutch Course Sign-up" <info@upxero.com>`,
      to: 'info@upxero.com', // Vervang dit met je eigen e-mailadres
      subject: `Nieuwe inschrijving van ${name}`,
      html: `
        <h3>Nieuwe aanmelding voor een cursus:</h3>
        <p><strong>Naam:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Niveau:</strong> ${currentLevel}</p>
        <p><strong>Cursus:</strong> ${course}</p>
        <p><strong>Motivatie:</strong> ${motivation}</p>
        <p><strong>Moedertaal:</strong> ${motherTongue}</p>
        <p><strong>Andere talen:</strong> ${otherLanguages}</p>
        <p><strong>Verwijzing via:</strong> ${referral}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Error sending email:', err);
    return NextResponse.json({ error: 'Email sending failed' }, { status: 500 });
  }
}
