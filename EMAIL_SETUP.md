# Email Configuration Guide for Helix BioWorks

This guide explains how to set up email functionality for order confirmations.

## Overview

The Helix BioWorks website now includes automatic order confirmation emails. When a customer completes their checkout, an email is automatically sent to their email address with:

- Order confirmation details
- Order ID and date
- List of purchased items
- Order summary (subtotal, tax, total)
- Payment method information
- Shipping address
- Next steps for payment completion

## Quick Start

### Option 1: Gmail (Recommended for Testing)

1. **Enable 2-Factor Authentication**
   - Go to https://myaccount.google.com/security
   - Enable 2-Step Verification

2. **Generate App Password**
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Windows Computer"
   - Google will generate a 16-character password

3. **Create .env file**
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-16-character-app-password
   FROM_EMAIL=your-email@gmail.com
   ```

4. **Test the connection**
   ```bash
   npm run build
   npm start
   ```

### Option 2: SendGrid (Recommended for Production)

1. **Create SendGrid Account**
   - Sign up at https://sendgrid.com
   - Verify your sender identity

2. **Get API Key**
   - Go to Settings > API Keys
   - Create a new API key with Mail Send permissions

3. **Install SendGrid package**
   ```bash
   npm install @sendgrid/mail
   ```

4. **Update emailHandler.ts**
   - Uncomment the SendGrid section
   - Replace with your API key

5. **Create .env file**
   ```
   SENDGRID_API_KEY=your-sendgrid-api-key
   FROM_EMAIL=orders@helixbioworks.com
   ```

### Option 3: Mailgun

1. **Create Mailgun Account**
   - Sign up at https://www.mailgun.com
   - Verify your domain

2. **Get API Key**
   - Go to API > Keys
   - Copy your API key and domain

3. **Install Mailgun package**
   ```bash
   npm install mailgun.js
   ```

4. **Update emailHandler.ts**
   - Uncomment the Mailgun section
   - Replace with your credentials

5. **Create .env file**
   ```
   MAILGUN_API_KEY=your-mailgun-api-key
   MAILGUN_DOMAIN=your-domain.mailgun.org
   FROM_EMAIL=orders@helixbioworks.com
   ```

### Option 4: AWS SES

1. **Create AWS Account**
   - Sign up at https://aws.amazon.com
   - Request production access for SES

2. **Get SMTP Credentials**
   - Go to SES > SMTP Settings
   - Create SMTP credentials

3. **Install AWS SDK**
   ```bash
   npm install @aws-sdk/client-ses
   ```

4. **Create .env file**
   ```
   AWS_REGION=us-east-1
   AWS_ACCESS_KEY_ID=your-access-key
   AWS_SECRET_ACCESS_KEY=your-secret-key
   FROM_EMAIL=orders@helixbioworks.com
   ```

## File Structure

```
server/
├── index.ts              # Main server file with /api/send-email endpoint
└── emailHandler.ts       # Email sending logic with multiple provider options

client/src/
├── lib/
│   └── emailService.ts   # Frontend email service that calls the API
└── pages/
    └── Checkout.tsx      # Checkout page that triggers email sending
```

## How It Works

1. **Customer completes checkout**
   - Fills out shipping and payment information
   - Clicks "Complete Order & Send Email"

2. **Frontend calls email service**
   - `sendOrderConfirmationEmail()` in `client/src/lib/emailService.ts`
   - Sends POST request to `/api/send-email`

3. **Backend processes email**
   - `/api/send-email` endpoint in `server/index.ts`
   - Calls `sendOrderEmail()` from `emailHandler.ts`
   - Uses configured SMTP provider to send email

4. **Customer receives email**
   - Professional HTML email with order details
   - Includes next steps for payment
   - Contains support contact information

## Customizing the Email

### Change Email Content

Edit `client/src/lib/emailService.ts`:

```typescript
// Change the email subject
subject: `Order Confirmation - ${data.orderId}`,

// Modify the HTML template in generateEmailHTML() function
// Update colors, text, layout, etc.
```

### Change Sender Email

Edit `.env`:
```
FROM_EMAIL=your-custom-email@yourdomain.com
```

### Change Sender Name

Edit `server/emailHandler.ts`:
```typescript
from: `"Your Company Name" <${fromEmail}>`,
```

### Add Company Logo

Edit the email template in `client/src/lib/emailService.ts`:
```html
<img src="https://your-domain.com/logo.png" alt="Logo" />
```

### Add Custom Footer

Edit the footer section in `generateEmailHTML()`:
```html
<div class="footer">
  <p>Your custom footer text here</p>
</div>
```

## Testing

### Test Email Sending

1. **Local Testing with Gmail**
   ```bash
   # Set up .env with Gmail credentials
   npm run build
   npm start
   # Go to http://localhost:3000
   # Add items to cart
   # Complete checkout with test email
   ```

2. **Check Email Logs**
   - Gmail: Check "Sent" folder
   - SendGrid: Go to Activity > Mail Send
   - Mailgun: Go to Logs > Sending
   - AWS SES: Check CloudWatch logs

### Test Email Addresses

- Gmail: Use your own Gmail account
- SendGrid: Any email address works in sandbox mode
- Mailgun: Only verified addresses work
- AWS SES: Only verified addresses work (unless in production)

## Troubleshooting

### Email Not Sending

1. **Check .env file**
   - Make sure all required variables are set
   - No spaces around `=` sign
   - Restart server after changing .env

2. **Check credentials**
   - Gmail: Verify app password is correct
   - SendGrid: Check API key is valid
   - Mailgun: Verify domain is active
   - AWS SES: Check IAM permissions

3. **Check logs**
   ```bash
   # Server logs will show email sending status
   npm start
   # Look for "✓ Email sent" or "✗ Email sending failed"
   ```

### SMTP Connection Error

- Gmail: Make sure 2FA is enabled and app password is used
- Other providers: Check SMTP host and port are correct

### Authentication Failed

- Verify username and password are correct
- Check for extra spaces in .env
- Try generating new credentials

### Email Goes to Spam

- Add SPF record: `v=spf1 include:sendgrid.net ~all`
- Add DKIM record: Get from email provider
- Add DMARC record: `v=DMARC1; p=none`
- Use consistent sender email address

## Production Deployment

### Before Going Live

1. **Set up proper email service**
   - Don't use personal Gmail account
   - Use business email address
   - Set up domain authentication (SPF, DKIM, DMARC)

2. **Configure environment variables**
   - Set in your hosting platform (Heroku, AWS, etc.)
   - Never commit .env to git

3. **Test thoroughly**
   - Send test emails to multiple addresses
   - Check email formatting on different clients
   - Verify all order details are correct

4. **Monitor email delivery**
   - Set up email provider monitoring
   - Track bounce rates
   - Monitor spam complaints

## Email Provider Comparison

| Provider | Cost | Setup Time | Reliability | Best For |
|----------|------|-----------|------------|----------|
| Gmail | Free | 10 min | Good | Testing |
| SendGrid | Free tier available | 15 min | Excellent | Production |
| Mailgun | Free tier available | 15 min | Excellent | Production |
| AWS SES | Very cheap | 20 min | Excellent | High volume |

## Support

For issues or questions:

1. Check the troubleshooting section above
2. Review email provider documentation
3. Check server logs for error messages
4. Contact your email provider support

## Additional Resources

- [Nodemailer Documentation](https://nodemailer.com/)
- [SendGrid Documentation](https://docs.sendgrid.com/)
- [Mailgun Documentation](https://documentation.mailgun.com/)
- [AWS SES Documentation](https://docs.aws.amazon.com/ses/)
- [Email Authentication Guide](https://www.dmarcian.com/dmarc-101/)
