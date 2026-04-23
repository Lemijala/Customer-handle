import nodemailer from 'nodemailer';

interface ContactEmailOptions {
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  inquiryType?: string;
  message: string;
}

const createTransporter = () => nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: Number(process.env.EMAIL_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendContactEmail = async (data: ContactEmailOptions): Promise<void> => {
  const transporter = createTransporter();

  // Internal notification to admin
  await transporter.sendMail({
    from: `LemiTech <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    subject: `New Inquiry from ${data.name} — LemiTech`,
    html: `
      <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 24px; border-radius: 12px;">
        <div style="background: linear-gradient(135deg, #3b82f6, #06b6d4); padding: 24px; border-radius: 10px; margin-bottom: 24px;">
          <h1 style="color: white; margin: 0; font-size: 22px;">New Contact Form Submission</h1>
          <p style="color: rgba(255,255,255,0.8); margin: 6px 0 0; font-size: 14px;">LemiTech — Software Studio</p>
        </div>
        <div style="background: white; border-radius: 10px; padding: 20px; border: 1px solid #e2e8f0;">
          ${[
            ['Name', data.name],
            ['Email', data.email],
            ['Phone', data.phone || '—'],
            ['Organization', data.organization || '—'],
            ['Service Needed', data.inquiryType || '—'],
          ].map(([label, value]) => `
            <div style="display: flex; padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
              <span style="font-weight: 600; color: #64748b; width: 140px; font-size: 13px;">${label}</span>
              <span style="color: #1e293b; font-size: 14px;">${value}</span>
            </div>
          `).join('')}
          <div style="padding: 12px 0 0;">
            <span style="font-weight: 600; color: #64748b; font-size: 13px; display: block; margin-bottom: 8px;">Message</span>
            <p style="color: #1e293b; font-size: 14px; line-height: 1.6; background: #f8fafc; padding: 12px; border-radius: 8px; margin: 0;">${data.message}</p>
          </div>
        </div>
      </div>
    `,
  });

  // Auto-reply to the client
  await transporter.sendMail({
    from: `LemiTech <${process.env.EMAIL_USER}>`,
    to: data.email,
    subject: `We received your message — LemiTech`,
    html: `
      <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 24px; border-radius: 12px;">

        <!-- Header -->
        <div style="background: linear-gradient(135deg, #3b82f6, #06b6d4); padding: 32px 24px; border-radius: 10px; text-align: center; margin-bottom: 24px;">
          <p style="color: rgba(255,255,255,0.7); margin: 0 0 4px; font-size: 13px; letter-spacing: 2px; text-transform: uppercase;">Welcome to</p>
          <h1 style="color: white; margin: 0 0 6px; font-size: 26px; font-weight: 800;">LemiTech</h1>
          <p style="color: rgba(255,255,255,0.85); margin: 0; font-size: 14px;">Software Studio — Building Digital Products</p>
        </div>

        <!-- Greeting -->
        <div style="background: white; border-radius: 10px; padding: 28px; border: 1px solid #e2e8f0; margin-bottom: 16px;">
          <h2 style="color: #1e293b; margin: 0 0 12px; font-size: 20px;">Hi ${data.name}, we've received your message!</h2>
          <p style="color: #475569; line-height: 1.7; margin: 0 0 16px;">
            Thank you for reaching out to LemiTech. We've received your message and our team will review it shortly. You can expect a response from us within <strong>24 hours</strong>.
          </p>
          <div style="background: #f0f9ff; border-left: 4px solid #3b82f6; padding: 12px 16px; border-radius: 0 8px 8px 0; margin-bottom: 16px;">
            <p style="margin: 0; color: #1e40af; font-size: 14px; font-style: italic;">"${data.message.slice(0, 120)}${data.message.length > 120 ? '...' : ''}"</p>
          </div>
        </div>

        <!-- Services -->
        <div style="background: white; border-radius: 10px; padding: 24px; border: 1px solid #e2e8f0; margin-bottom: 16px;">
          <h3 style="color: #1e293b; margin: 0 0 16px; font-size: 16px;">What we can build for you</h3>
          <div style="display: grid; gap: 10px;">
            ${[
              ['🌐', 'Web Platforms', 'Scalable, fast, and modern web applications'],
              ['📱', 'Mobile Apps', 'Flutter & React Native for iOS and Android'],
              ['⚙️', 'Backend & APIs', 'Robust server-side systems and integrations'],
              ['🎨', 'UI/UX Design', 'Clean, user-centered interfaces that convert'],
            ].map(([icon, title, desc]) => `
              <div style="display: flex; align-items: flex-start; gap: 12px; padding: 10px; background: #f8fafc; border-radius: 8px;">
                <span style="font-size: 20px;">${icon}</span>
                <div>
                  <p style="margin: 0; font-weight: 600; color: #1e293b; font-size: 14px;">${title}</p>
                  <p style="margin: 0; color: #64748b; font-size: 13px;">${desc}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Footer -->
        <div style="text-align: center; padding: 16px;">
          <p style="color: #94a3b8; font-size: 13px; margin: 0 0 8px;">LemiTech Software Studio · Addis Ababa, Ethiopia</p>
          <p style="color: #94a3b8; font-size: 12px; margin: 0;">
            <a href="mailto:tlemesagirma@gmail.com" style="color: #3b82f6; text-decoration: none;">tlemesagirma@gmail.com</a>
          </p>
        </div>
      </div>
    `,
  });
};
