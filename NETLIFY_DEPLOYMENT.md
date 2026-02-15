# Helix BioWorks - Netlify Deployment Guide

This document provides complete instructions for deploying Helix BioWorks to Netlify with serverless functions for email handling.

## Architecture Overview

The project has been converted to a Netlify-compatible architecture:

- **Frontend**: React + Vite SPA deployed as static files to Netlify
- **Backend**: Netlify Functions (serverless) replacing Express server
- **Email**: Serverless email function using nodemailer
- **Routing**: Client-side routing with SPA fallback

## Project Structure

```
helixbioworks-web/
├── client/                    # Frontend React application
│   ├── src/
│   │   ├── pages/            # Page components
│   │   ├── components/       # Reusable components
│   │   ├── contexts/         # React contexts (CartContext)
│   │   ├── lib/
│   │   │   └── emailService.ts  # Email service (calls Netlify Functions)
│   │   └── App.tsx           # Main app with routing
│   ├── public/               # Static assets
│   └── index.html            # HTML entry point
├── netlify/
│   └── functions/            # Netlify Functions (serverless)
│       ├── send-email.ts     # Email sending function
│       └── health.ts         # Health check function
├── netlify.toml              # Netlify configuration
├── package.json              # Dependencies
└── vite.config.ts            # Vite build configuration
```

## Local Development

### Prerequisites

- Node.js 22.13.0 or later
- pnpm package manager

### Setup

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Run frontend-only dev server**:
   ```bash
   pnpm dev
   ```
   Frontend will be available at `http://localhost:5173`

3. **Run with Netlify Functions locally** (requires Netlify CLI):
   ```bash
   # Install Netlify CLI globally
   npm install -g netlify-cli

   # Run dev server with functions
   pnpm dev:netlify
   ```
   Both frontend and functions will be available at `http://localhost:8888`

## Deployment to Netlify

### Step 1: Connect GitHub Repository

1. Push your code to GitHub
2. Go to [Netlify](https://app.netlify.com)
3. Click "New site from Git"
4. Select GitHub and authorize
5. Choose your repository

### Step 2: Configure Build Settings

Netlify will auto-detect the configuration from `netlify.toml`. Verify:

- **Build command**: `pnpm install --frozen-lockfile && pnpm build`
- **Publish directory**: `dist/public`
- **Functions directory**: `netlify/functions`

### Step 3: Set Environment Variables

Go to **Site settings → Build & deploy → Environment** and add:

```
SMTP_HOST=your-smtp-host.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASSWORD=your-app-password
FROM_EMAIL=noreply@helixbioworks.com
```

#### Email Service Configuration

Choose one of the following options:

**Option A: Gmail (Recommended for testing)**
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password  # Generate at https://myaccount.google.com/apppasswords
FROM_EMAIL=your-email@gmail.com
```

**Option B: SendGrid**
```
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=SG.your-sendgrid-api-key
FROM_EMAIL=noreply@yourdomain.com
```

**Option C: Mailgun**
```
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=postmaster@yourdomain.mailgun.org
SMTP_PASSWORD=your-mailgun-password
FROM_EMAIL=noreply@yourdomain.mailgun.org
```

**Option D: AWS SES**
```
SMTP_HOST=email-smtp.region.amazonaws.com
SMTP_PORT=587
SMTP_USER=your-ses-username
SMTP_PASSWORD=your-ses-password
FROM_EMAIL=verified-email@yourdomain.com
```

### Step 4: Deploy

1. Click "Deploy site"
2. Netlify will build and deploy automatically
3. Your site will be available at `https://your-site-name.netlify.app`

## API Endpoints

### Health Check

**Endpoint**: `GET /.netlify/functions/health` (or `/api/health`)

**Response**:
```json
{
  "status": "ok",
  "timestamp": "2026-02-15T12:00:00.000Z",
  "service": "Helix BioWorks API"
}
```

### Send Email

**Endpoint**: `POST /.netlify/functions/send-email` (or `/api/send-email`)

**Request Body**:
```json
{
  "to": "customer@example.com",
  "subject": "Order Confirmation",
  "htmlContent": "<html>...</html>",
  "customerName": "John Doe",
  "orderId": "ORD-2026-001"
}
```

**Response (Success)**:
```json
{
  "success": true,
  "message": "Email sent successfully",
  "messageId": "message-id-from-smtp"
}
```

**Response (Error)**:
```json
{
  "error": "Failed to send email",
  "details": "SMTP connection failed"
}
```

## Frontend API Calls

The frontend automatically calls Netlify Functions at `/.netlify/functions/*`:

```typescript
// In client/src/lib/emailService.ts
const response = await fetch("/.netlify/functions/send-email", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    to: customerEmail,
    subject: "Order Confirmation",
    htmlContent: htmlContent,
  }),
});
```

This works both locally (with `netlify dev`) and in production.

## Routing Configuration

The `netlify.toml` file includes:

1. **SPA Fallback**: All non-matching routes redirect to `/index.html` for client-side routing
2. **API Redirects**: `/api/*` paths redirect to `/.netlify/functions/*`
3. **Security Headers**: CORS, XSS protection, content-type headers
4. **Cache Policy**: Long-term caching for assets, short-term for HTML

## Troubleshooting

### Email Not Sending

1. **Check environment variables**: Verify SMTP credentials in Netlify settings
2. **Check logs**: Go to **Deployments → Latest → Functions** to see function logs
3. **Test SMTP**: Use a tool like `telnet` to verify SMTP connectivity
4. **Check sender**: Ensure `FROM_EMAIL` is authorized in your email service

### Frontend Not Loading

1. **Check build logs**: Go to **Deployments → Latest → Deploy log**
2. **Verify publish directory**: Should be `dist/public`
3. **Check 404 page**: Netlify should serve `/index.html` for SPA routes

### Functions Not Working

1. **Check function logs**: Go to **Functions** in Netlify dashboard
2. **Verify environment variables**: Ensure all required vars are set
3. **Check Node version**: Set `NODE_VERSION=22.13.0` in `netlify.toml`

## Monitoring & Analytics

- **Deployment logs**: Site → Deployments → View deploy log
- **Function logs**: Site → Functions → View logs
- **Performance**: Site → Analytics
- **Error tracking**: Set up Sentry or similar service

## Custom Domain

1. Go to **Site settings → Domain management**
2. Click "Add custom domain"
3. Enter your domain and follow DNS instructions
4. SSL certificate is automatically provisioned

## Continuous Deployment

Every push to your GitHub repository will trigger a new deployment:

1. Push code to GitHub
2. Netlify automatically detects changes
3. Runs build command
4. Deploys new version
5. Site updates automatically

## Performance Optimization

- **Frontend assets**: Cached for 1 year with content hash
- **HTML files**: Cached for 1 hour
- **Functions**: Automatically scaled by Netlify
- **CDN**: Global CDN for fast content delivery

## Security

- **HTTPS**: Automatic SSL/TLS
- **Security headers**: Configured in `netlify.toml`
- **Environment variables**: Securely stored in Netlify
- **No server code exposed**: Functions run serverless

## Support & Resources

- **Netlify Docs**: https://docs.netlify.com
- **Netlify Functions**: https://docs.netlify.com/functions/overview
- **Nodemailer Docs**: https://nodemailer.com
- **GitHub Issues**: Report bugs in your repository

## Next Steps

1. Deploy to Netlify following the steps above
2. Configure email environment variables
3. Test order checkout and email sending
4. Monitor function logs for any errors
5. Set up custom domain
6. Enable analytics and monitoring

---

**Last Updated**: February 2026
**Version**: 1.0.0
