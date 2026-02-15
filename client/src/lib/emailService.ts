/**
 * Email Service for Helix BioWorks
 * Handles sending order confirmation emails
 * 
 * CONFIGURATION:
 * Replace the email addresses and SMTP settings below with your actual email service credentials.
 * You can use services like:
 * - Gmail (with app password)
 * - SendGrid
 * - Mailgun
 * - AWS SES
 * - Your own SMTP server
 */

export interface OrderEmailData {
  customerName: string;
  customerEmail: string;
  orderId: string;
  orderDate: string;
  items: Array<{
    name: string;
    quantity: number;
    price: string;
  }>;
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  paymentMethod: string;
  shippingAddress: {
    address: string;
    city: string;
    state: string;
    zip: string;
    country?: string;
  };
}

/**
 * CONFIGURATION - UPDATE THESE SETTINGS
 * These are placeholder values. Replace with your actual email service configuration.
 */
const EMAIL_CONFIG = {
  // Change this to your business email address
  fromEmail: "orders@helixbioworks.com",
  fromName: "Helix BioWorks",
  
  // Change this to your SMTP server details
  smtpHost: "smtp.gmail.com",
  smtpPort: 587,
  smtpUser: "your-email@gmail.com",
  smtpPassword: "your-app-password", // Use app-specific password for Gmail
  
  // Optional: Use a third-party email service API instead
  // apiProvider: "sendgrid" | "mailgun" | "custom"
  // apiKey: "your-api-key"
};

/**
 * Generate HTML email template for order confirmation
 */
function generateEmailHTML(data: OrderEmailData): string {
  const itemsHTML = data.items
    .map(
      (item) => `
    <tr>
      <td style="padding: 12px; border-bottom: 1px solid #e0e0e0;">
        ${item.name}
      </td>
      <td style="padding: 12px; border-bottom: 1px solid #e0e0e0; text-align: center;">
        ${item.quantity}
      </td>
      <td style="padding: 12px; border-bottom: 1px solid #e0e0e0; text-align: right;">
        ${item.price}
      </td>
    </tr>
  `
    )
    .join("");

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          line-height: 1.6;
          color: #2c3e50;
          background-color: #f8f9fa;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: white;
          padding: 40px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .header {
          border-bottom: 3px solid #1a3a52;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        .header h1 {
          color: #1a3a52;
          margin: 0;
          font-size: 28px;
        }
        .logo {
          display: inline-block;
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #1a3a52 0%, #00b4d8 100%);
          border-radius: 6px;
          margin-right: 10px;
          vertical-align: middle;
          color: white;
          text-align: center;
          line-height: 32px;
          font-weight: bold;
          font-size: 16px;
        }
        .section {
          margin-bottom: 30px;
        }
        .section h2 {
          color: #1a3a52;
          font-size: 18px;
          margin-bottom: 15px;
          border-bottom: 2px solid #e8eaed;
          padding-bottom: 10px;
        }
        .order-number {
          background-color: #f0f7ff;
          padding: 15px;
          border-left: 4px solid #00b4d8;
          margin-bottom: 20px;
          border-radius: 4px;
        }
        .order-number p {
          margin: 5px 0;
        }
        .order-number strong {
          color: #1a3a52;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }
        th {
          background-color: #f8f9fa;
          color: #1a3a52;
          padding: 12px;
          text-align: left;
          font-weight: 600;
          border-bottom: 2px solid #e8eaed;
        }
        .summary {
          background-color: #f8f9fa;
          padding: 20px;
          border-radius: 4px;
          margin-bottom: 20px;
        }
        .summary-row {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px solid #e8eaed;
        }
        .summary-row:last-child {
          border-bottom: none;
        }
        .summary-row.total {
          font-size: 18px;
          font-weight: bold;
          color: #1a3a52;
          padding-top: 12px;
          border-top: 2px solid #e8eaed;
          margin-top: 12px;
        }
        .summary-row.total .amount {
          color: #00b4d8;
        }
        .address-block {
          background-color: #f8f9fa;
          padding: 15px;
          border-radius: 4px;
          margin-bottom: 10px;
        }
        .address-block h3 {
          color: #1a3a52;
          margin: 0 0 10px 0;
          font-size: 14px;
        }
        .address-block p {
          margin: 5px 0;
          font-size: 14px;
        }
        .payment-method {
          background-color: #f0fff4;
          padding: 15px;
          border-left: 4px solid #7cb342;
          border-radius: 4px;
          margin-bottom: 20px;
        }
        .payment-method strong {
          color: #1a3a52;
        }
        .footer {
          border-top: 1px solid #e8eaed;
          padding-top: 20px;
          margin-top: 30px;
          text-align: center;
          color: #7a8a99;
          font-size: 12px;
        }
        .cta-button {
          display: inline-block;
          background-color: #00b4d8;
          color: white;
          padding: 12px 30px;
          border-radius: 4px;
          text-decoration: none;
          font-weight: 600;
          margin-top: 20px;
        }
        .disclaimer {
          background-color: #fff8e1;
          padding: 15px;
          border-left: 4px solid #ffc107;
          border-radius: 4px;
          margin-top: 20px;
          font-size: 12px;
          color: #7a8a99;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1><span class="logo">HB</span> Helix BioWorks</h1>
        </div>

        <div class="section">
          <h2>Order Confirmation</h2>
          <p>Thank you for your order, <strong>${data.customerName}</strong>!</p>
          <p>We've received your order and will process it shortly. Below are your order details.</p>
          
          <div class="order-number">
            <p><strong>Order ID:</strong> ${data.orderId}</p>
            <p><strong>Order Date:</strong> ${data.orderDate}</p>
            <p><strong>Status:</strong> <span style="color: #7cb342; font-weight: 600;">Pending Payment Confirmation</span></p>
          </div>
        </div>

        <div class="section">
          <h2>Order Items</h2>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th style="text-align: center;">Quantity</th>
                <th style="text-align: right;">Price</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHTML}
            </tbody>
          </table>
        </div>

        <div class="section">
          <h2>Order Summary</h2>
          <div class="summary">
            <div class="summary-row">
              <span>Subtotal</span>
              <span>$${data.subtotal.toFixed(2)}</span>
            </div>
            <div class="summary-row">
              <span>Shipping</span>
              <span>FREE</span>
            </div>
            <div class="summary-row">
              <span>Tax</span>
              <span>$${data.tax.toFixed(2)}</span>
            </div>
            <div class="summary-row total">
              <span>Total Amount</span>
              <span class="amount">$${data.total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div class="section">
          <h2>Payment Information</h2>
          <div class="payment-method">
            <strong>Payment Method:</strong> ${data.paymentMethod}
          </div>
          <p>Please complete your payment using the selected payment method. Once we receive your payment confirmation, we will process your order immediately.</p>
        </div>

        <div class="section">
          <h2>Shipping Address</h2>
          <div class="address-block">
            <h3>Delivery Address</h3>
            <p>${data.shippingAddress.address}</p>
            <p>${data.shippingAddress.city}, ${data.shippingAddress.state} ${data.shippingAddress.zip}</p>
          </div>
        </div>

        <div class="section">
          <h2>Next Steps</h2>
          <ol>
            <li>Complete your payment using the selected payment method</li>
            <li>You'll receive a payment confirmation email</li>
            <li>Once payment is verified, your order will be shipped within 1-2 business days</li>
            <li>You'll receive a tracking number via email</li>
          </ol>
        </div>

        <div class="disclaimer">
          <strong>Important:</strong> This is a manual order confirmation. Please complete your payment as instructed. If you have any questions about your order or payment, please contact us at support@helixbioworks.com
        </div>

        <div class="footer">
          <p>&copy; 2026 Helix BioWorks. All rights reserved.</p>
          <p>For research use only. Lab-certified premium peptides and SARMs.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

/**
 * Send order confirmation email
 * 
 * USAGE:
 * await sendOrderConfirmationEmail({
 *   customerName: "John Doe",
 *   customerEmail: "john@example.com",
 *   orderId: "ORD-2026-001",
 *   orderDate: new Date().toLocaleDateString(),
 *   items: [...],
 *   subtotal: 100,
 *   tax: 8,
 *   shipping: 0,
 *   total: 108,
 *   paymentMethod: "Credit Card",
 *   shippingAddress: {...}
 * });
 */
export async function sendOrderConfirmationEmail(
  data: OrderEmailData
): Promise<{ success: boolean; message: string }> {
  try {
    // Using Netlify Functions for serverless email delivery
    const response = await fetch("/.netlify/functions/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: data.customerEmail,
        subject: `Order Confirmation - ${data.orderId}`,
        htmlContent: generateEmailHTML(data),
        orderId: data.orderId,
        customerName: data.customerName,
      }),
    });

    if (!response.ok) {
      throw new Error(`Email service error: ${response.statusText}`);
    }

    const result = await response.json();
    return {
      success: true,
      message: `Order confirmation email sent to ${data.customerEmail}`,
    };
  } catch (error) {
    console.error("Email sending error:", error);
    
    // FALLBACK: Log to console for development
    console.log("=== ORDER CONFIRMATION EMAIL ===");
    console.log("To:", data.customerEmail);
    console.log("Subject:", `Order Confirmation - ${data.orderId}`);
    console.log("HTML Content:", generateEmailHTML(data));
    console.log("================================");

    return {
      success: false,
      message: `Failed to send email: ${error instanceof Error ? error.message : "Unknown error"}. Check console for details.`,
    };
  }
}

/**
 * IMPLEMENTATION GUIDE:
 * 
 * To set up email sending in your application:
 * 
 * 1. BACKEND SETUP (Node.js/Express):
 *    Install: npm install nodemailer
 *    
 *    Create a route in your server:
 *    
 *    app.post('/api/send-email', async (req, res) => {
 *      const { to, subject, htmlContent } = req.body;
 *      
 *      const transporter = nodemailer.createTransport({
 *        host: process.env.SMTP_HOST,
 *        port: process.env.SMTP_PORT,
 *        secure: true,
 *        auth: {
 *          user: process.env.SMTP_USER,
 *          pass: process.env.SMTP_PASSWORD,
 *        },
 *      });
 *      
 *      try {
 *        await transporter.sendMail({
 *          from: 'orders@helixbioworks.com',
 *          to,
 *          subject,
 *          html: htmlContent,
 *        });
 *        res.json({ success: true });
 *      } catch (error) {
 *        res.status(500).json({ error: error.message });
 *      }
 *    });
 * 
 * 2. ENVIRONMENT VARIABLES (.env):
 *    SMTP_HOST=smtp.gmail.com
 *    SMTP_PORT=587
 *    SMTP_USER=your-email@gmail.com
 *    SMTP_PASSWORD=your-app-password
 * 
 * 3. ALTERNATIVE: Use SendGrid API
 *    Install: npm install @sendgrid/mail
 *    
 *    const sgMail = require('@sendgrid/mail');
 *    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
 *    
 *    await sgMail.send({
 *      to: data.customerEmail,
 *      from: 'orders@helixbioworks.com',
 *      subject: `Order Confirmation - ${data.orderId}`,
 *      html: generateEmailHTML(data),
 *    });
 * 
 * 4. ALTERNATIVE: Use Mailgun API
 *    Install: npm install mailgun.js
 *    
 *    Similar implementation with Mailgun client
 */
