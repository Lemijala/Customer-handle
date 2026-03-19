import nodemailer from 'nodemailer';

interface ContactEmailOptions {
  name: string;
  email: string;
  organization?: string;
  inquiryType?: string;
  message: string;
}

export const sendContactEmail = async (data: ContactEmailOptions): Promise<void> => {

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: Number(process.env.EMAIL_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: `[LemiTech] New inquiry from ${data.name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">New Contact Form Submission</h2>
        <table style="width:100%; border-collapse: collapse;">
          <tr><td style="padding:8px; font-weight:bold;">Name</td><td style="padding:8px;">${data.name}</td></tr>
          <tr><td style="padding:8px; font-weight:bold;">Email</td><td style="padding:8px;">${data.email}</td></tr>
          <tr><td style="padding:8px; font-weight:bold;">Organization</td><td style="padding:8px;">${data.organization || '—'}</td></tr>
          <tr><td style="padding:8px; font-weight:bold;">Inquiry Type</td><td style="padding:8px;">${data.inquiryType || '—'}</td></tr>
          <tr><td style="padding:8px; font-weight:bold; vertical-align:top;">Message</td><td style="padding:8px;">${data.message}</td></tr>
        </table>
      </div>
    `,
  });

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: data.email,
    subject: `Thanks for reaching out, ${data.name}!`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">Got your message!</h2>
        <p>Hi ${data.name},</p>
        <p>Thanks for reaching out. I've received your message and will get back to you within 24 hours.</p>
        <p style="color: #64748b; font-size: 14px;">— Lemesa Girma</p>
      </div>
    `,
  });
};
