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
          <img src="https://lemitec.vercel.app/profile.png" alt="Lemesa Girma" style="width: 64px; height: 64px; border-radius: 50%; border: 3px solid rgba(255,255,255,0.5); object-fit: cover; margin-bottom: 12px; display: block; margin-left: auto; margin-right: auto;" />
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
          <p style="color: #94a3b8; font-size: 13px; margin: 0 0 12px;">LemiTech Software Studio · Addis Ababa, Ethiopia</p>
          <!-- Social Links -->
          <div style="display: flex; justify-content: center; gap: 10px; margin-bottom: 12px;">
            <!-- GitHub -->
            <a href="https://github.com/Lemijala" style="display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: #24292e; border-radius: 10px; text-decoration: none;" title="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <!-- LinkedIn -->
            <a href="https://linkedin.com/in/lemesa" style="display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: #0077b5; border-radius: 10px; text-decoration: none;" title="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <!-- TikTok -->
            <a href="https://tiktok.com/@lemesa" style="display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: #000; border-radius: 10px; text-decoration: none;" title="TikTok">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/></svg>
            </a>
            <!-- Telegram -->
            <a href="https://t.me/lemesa" style="display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: #229ed9; border-radius: 10px; text-decoration: none;" title="Telegram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            </a>
            <!-- Email -->
            <a href="mailto:tlemesagirma@gmail.com" style="display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: #3b82f6; border-radius: 10px; text-decoration: none;" title="Email">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </a>
          </div>
          <p style="color: #94a3b8; font-size: 12px; margin: 0;">
            <a href="mailto:tlemesagirma@gmail.com" style="color: #3b82f6; text-decoration: none;">tlemesagirma@gmail.com</a>
          </p>
        </div>
      </div>
    `,
  });
};
