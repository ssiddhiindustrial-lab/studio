
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
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"Siddhi Website" <${process.env.SMTP_USER}>`,
    to: "ssiddhiindustrial@gmail.com",
    replyTo: formData.email,
    subject: `New Inquiry: ${formData.projectType || 'General'} from ${formData.name}`,
    html: `
      <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px; max-width: 600px;">
        <h2 style="color: #243B55; border-bottom: 2px solid #FF8C00; padding-bottom: 10px;">New Website Inquiry</h2>
        <p><strong>Source Page:</strong> ${formData.sourcePage}</p>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        ${formData.company ? `<p><strong>Company:</strong> ${formData.company}</p>` : ''}
        <p><strong>Project Type:</strong> ${formData.projectType || 'Not Specified'}</p>
        <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;">
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${formData.message}</p>
        </div>
        <p style="font-size: 12px; color: #888; margin-top: 30px; border-top: 1px solid #eee; pt-10px;">
          Sent from Siddhi Industrial Services Website
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Email send error:", error);
    return { success: false, error: "Failed to send email" };
  }
}
