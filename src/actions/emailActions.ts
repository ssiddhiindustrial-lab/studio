
'use server';

import nodemailer from 'nodemailer';

export async function sendInquiryEmail(formData: {
  name: string;
  email: string;
  phone: string;
  company?: string;
  projectType?: string;
  message: string;
  sourcePage: string;
}) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false, // false for port 587 (STARTTLS)
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      // Do not fail on invalid certs
      rejectUnauthorized: false
    }
  });

  const mailOptions = {
    from: `"Siddhi Industrial Services" <${process.env.SMTP_USER}>`,
    to: "ssiddhiindustrial@gmail.com",
    replyTo: formData.email,
    subject: `New Inquiry: ${formData.projectType || 'General'} from ${formData.name}`,
    html: `
      <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px; max-width: 600px; color: #333;">
        <h2 style="color: #243B55; border-bottom: 2px solid #FF8C00; padding-bottom: 10px; margin-top: 0;">New Website Inquiry</h2>
        
        <div style="margin-bottom: 20px;">
          <p style="margin: 5px 0;"><strong>Source Page:</strong> ${formData.sourcePage}</p>
          <p style="margin: 5px 0;"><strong>Customer Name:</strong> ${formData.name}</p>
          <p style="margin: 5px 0;"><strong>Email:</strong> ${formData.email}</p>
          <p style="margin: 5px 0;"><strong>Phone:</strong> ${formData.phone}</p>
          ${formData.company ? `<p style="margin: 5px 0;"><strong>Company:</strong> ${formData.company}</p>` : ''}
          <p style="margin: 5px 0;"><strong>Interested In:</strong> ${formData.projectType || 'Not Specified'}</p>
        </div>

        <div style="background: #f4f7f9; padding: 20px; border-radius: 8px; border-left: 4px solid #FF8C00;">
          <p style="margin: 0 0 10px 0; font-weight: bold; color: #243B55;">Message Content:</p>
          <p style="white-space: pre-wrap; margin: 0; line-height: 1.6;">${formData.message}</p>
        </div>

        <div style="font-size: 12px; color: #888; margin-top: 30px; border-top: 1px solid #eee; padding-top: 15px; text-align: center;">
          This inquiry was sent automatically from the <strong>Siddhi Industrial Services</strong> website contact form.
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Email send error detail:", error);
    return { success: false, error: "SMTP Error: Could not send email" };
  }
}
