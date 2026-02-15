import { Handler } from "@netlify/functions";
import nodemailer from "nodemailer";

interface EmailRequest {
  to: string;
  subject: string;
  htmlContent: string;
  customerName?: string;
  orderDetails?: string;
}

const handler: Handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    // Parse request body
    const body: EmailRequest = JSON.parse(event.body || "{}");

    // Validate required fields
    if (!body.to || !body.subject || !body.htmlContent) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "Missing required fields: to, subject, htmlContent",
        }),
      };
    }

    // Get environment variables
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const fromEmail = process.env.FROM_EMAIL;

    // Validate environment variables
    if (!smtpHost || !smtpPort || !smtpUser || !smtpPassword || !fromEmail) {
      console.error("Missing SMTP configuration in environment variables");
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "Email service not configured properly",
        }),
      };
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort),
      secure: parseInt(smtpPort) === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    // Send email
    const info = await transporter.sendMail({
      from: fromEmail,
      to: body.to,
      subject: body.subject,
      html: body.htmlContent,
    });

    console.log("Email sent successfully:", info.messageId);

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Email sent successfully",
        messageId: info.messageId,
      }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed to send email",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
    };
  }
};

export { handler };
