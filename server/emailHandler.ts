/**
 * Email Handler for Helix BioWorks
 * Handles sending order confirmation emails via backend
 * 
 * SETUP INSTRUCTIONS:
 * 
 * 1. Install nodemailer:
 *    npm install nodemailer
 * 
 * 2. Set up environment variables in .env:
 *    SMTP_HOST=smtp.gmail.com
 *    SMTP_PORT=587
 *    SMTP_USER=your-email@gmail.com
 *    SMTP_PASSWORD=your-app-password
 *    FROM_EMAIL=orders@helixbioworks.com
 * 
 * 3. For Gmail:
 *    - Enable 2-factor authentication
 *    - Generate app-specific password at: https://myaccount.google.com/apppasswords
 *    - Use the generated password as SMTP_PASSWORD
 * 
 * 4. Alternative email services:
 *    - SendGrid: https://sendgrid.com
 *    - Mailgun: https://www.mailgun.com
 *    - AWS SES: https://aws.amazon.com/ses/
 */

import nodemailer from "nodemailer";

interface EmailData {
  to: string;
  subject: string;
  htmlContent: string;
  orderId: string;
  customerName: string;
}

/**
 * Create email transporter with your SMTP settings
 * IMPORTANT: Replace with your actual SMTP credentials
 */
function createTransporter() {
  // Using environment variables for security
  const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
  const smtpPort = parseInt(process.env.SMTP_PORT || "587");
  const smtpUser = process.env.SMTP_USER || "your-email@gmail.com";
  const smtpPassword = process.env.SMTP_PASSWORD || "your-app-password";

  return nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465, // true for 465, false for other ports
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
  });
}

/**
 * Send order confirmation email
 */
export async function sendOrderEmail(emailData: EmailData): Promise<boolean> {
  try {
    const transporter = createTransporter();
    const fromEmail = process.env.FROM_EMAIL || "orders@helixbioworks.com";

    // Verify connection
    await transporter.verify();
    console.log("✓ Email service connected");

    // Send email
    const info = await transporter.sendMail({
      from: `"Helix BioWorks" <${fromEmail}>`,
      to: emailData.to,
      subject: emailData.subject,
      html: emailData.htmlContent,
      replyTo: "support@helixbioworks.com",
    });

    console.log(`✓ Email sent to ${emailData.to}`);
    console.log(`  Message ID: ${info.messageId}`);
    console.log(`  Order ID: ${emailData.orderId}`);
    console.log(`  Customer: ${emailData.customerName}`);

    return true;
  } catch (error) {
    console.error("✗ Email sending failed:");
    console.error(error);
    throw error;
  }
}

/**
 * Alternative: Send email using SendGrid API
 * Install: npm install @sendgrid/mail
 */
export async function sendOrderEmailViaSendGrid(
  emailData: EmailData
): Promise<boolean> {
  try {
    // Uncomment when using SendGrid
    // const sgMail = require('@sendgrid/mail');
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // await sgMail.send({
    //   to: emailData.to,
    //   from: process.env.FROM_EMAIL || 'orders@helixbioworks.com',
    //   subject: emailData.subject,
    //   html: emailData.htmlContent,
    //   replyTo: 'support@helixbioworks.com',
    // });

    // console.log(`✓ Email sent via SendGrid to ${emailData.to}`);
    // return true;

    throw new Error("SendGrid not configured. Use sendOrderEmail instead.");
  } catch (error) {
    console.error("SendGrid email failed:", error);
    throw error;
  }
}

/**
 * Alternative: Send email using Mailgun API
 * Install: npm install mailgun.js
 */
export async function sendOrderEmailViaMailgun(
  emailData: EmailData
): Promise<boolean> {
  try {
    // Uncomment when using Mailgun
    // const mailgun = require('mailgun.js');
    // const mg = mailgun.client({
    //   username: 'api',
    //   key: process.env.MAILGUN_API_KEY,
    // });

    // await mg.messages.create(process.env.MAILGUN_DOMAIN, {
    //   from: `Helix BioWorks <${process.env.FROM_EMAIL}>`,
    //   to: emailData.to,
    //   subject: emailData.subject,
    //   html: emailData.htmlContent,
    //   'h:Reply-To': 'support@helixbioworks.com',
    // });

    // console.log(`✓ Email sent via Mailgun to ${emailData.to}`);
    // return true;

    throw new Error("Mailgun not configured. Use sendOrderEmail instead.");
  } catch (error) {
    console.error("Mailgun email failed:", error);
    throw error;
  }
}
