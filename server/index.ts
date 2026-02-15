import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { sendOrderEmail } from "./emailHandler.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Email API endpoint for sending order confirmations
  app.post("/api/send-email", async (req, res) => {
    try {
      const { to, subject, htmlContent, orderId, customerName } = req.body;

      // Validate required fields
      if (!to || !subject || !htmlContent) {
        return res.status(400).json({
          success: false,
          error: "Missing required fields: to, subject, htmlContent",
        });
      }

      // Send email
      await sendOrderEmail({
        to,
        subject,
        htmlContent,
        orderId: orderId || "UNKNOWN",
        customerName: customerName || "Customer",
      });

      res.json({
        success: true,
        message: `Order confirmation email sent to ${to}`,
      });
    } catch (error) {
      console.error("Email API error:", error);
      res.status(500).json({
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Failed to send email. Check server logs.",
      });
    }
  });

  // Health check endpoint
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
