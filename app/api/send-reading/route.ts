import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { trainer, answer } = await req.json();

  // Mapping trainer → emailadres
  const trainerEmails: Record<string, string> = {
    jur: "jur@learn-dutch-online.com",
    michael: "michael@learn-dutch-online.com",
    christel: "christel@learn-dutch-online.com",
    winoka: "winoka@learn-dutch-online.com",
    angelas: "angelas@learn-dutch-online.com",
    femke: "femke@learn-dutch-online.com",
    birgit: "birgit@learn-dutch-online.com",
    lise: "lise@learn-dutch-online.com",
    reserve: "reserve@learn-dutch-online.com",
  };

  // fallback naar info als trainer niet bestaat
  const toEmail = trainerEmails[trainer.toLowerCase()] || "info@learn-dutch-online.com";

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
      from: `"Dutch Writing Test" <info@learn-dutch-online.com>`,
      to: toEmail,
      subject: `Nieuwe writing test inzending voor ${trainer}`,
      html: `
        <h3>Nieuwe writing test ingestuurd:</h3>
        <p><strong>Trainer:</strong> ${trainer}</p>
        <hr />
        <h4>Antwoord:</h4>
        <p>${answer.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error sending writing test:", err);
    return NextResponse.json(
      { error: "Email sending failed" },
      { status: 500 }
    );
  }
}
