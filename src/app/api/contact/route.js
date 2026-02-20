import { NextResponse } from "next/server"; // Se usi Next.js App Router è meglio usare NextResponse
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json(); // Parsing sicuro
    const { name, email, message, extra } = body;

    // 1. Controllo Honeypot
    if (extra && extra.trim() !== "") {
      console.warn("⚠️ BOT RILEVATO:", { name, email, extra });
      // Restituiamo success: true per ingannare il bot
      return NextResponse.json({ success: true, bot: true });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailToOwner = {
      from: process.env.SMTP_USER,
      to: process.env.USER_EMAIL || process.env.SMTP_USER, // Fallback se USER_EMAIL manca
      replyTo: email,
      subject: `Nuovo messaggio dal sito GSM Sistemi`,
      text: `Nome: ${name}\nEmail: ${email}\nMessaggio:\n${message}`,
    };

    const mailToClient = {
      from: process.env.SMTP_USER,
      to: email,
      subject: `Riepilogo del tuo messaggio inviato a GSM Sistemi`,
      text: `Ciao ${name},\nabbiamo ricevuto il tuo messaggio.\nTi risponderemo il prima possibile.\n\nGSM Sistemi`,
    };

    await transporter.sendMail(mailToOwner);
    await transporter.sendMail(mailToClient);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ Errore invio email:", error);
    return NextResponse.json(
      { success: false, error: "Errore interno" },
      { status: 500 },
    );
  }
}
