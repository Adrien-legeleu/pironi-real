import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, budget, serviceType, message } = body;

    const { data, error } = await resend.emails.send({
      from: 'Contact Form <contact@ikovaline.com>',
      to: ['stanislashenry0@gmail.com'], // Sending to Pironi's email
      replyTo: email,
      subject: `Nouvelle demande de contact : ${serviceType}`,
      html: `
        <div>
          <h1>Nouvelle demande de contact</h1>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service:</strong> ${serviceType}</p>
          <p><strong>Budget:</strong> ${budget || 'Non spécifié'}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
