import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV === "production";

const parseAllowedOrigins = () => {
  const configured = process.env.ALLOWED_ORIGINS || process.env.FRONTEND_URL;

  if (configured) {
    return configured
      .split(",")
      .map((origin) => origin.trim())
      .filter(Boolean);
  }

  return ["http://localhost:5173", "http://localhost:3000"];
};

const allowedOrigins = parseAllowedOrigins();

// Security middleware
app.disable("x-powered-by");
app.use(
  helmet({
    contentSecurityPolicy: isProduction
      ? {
          useDefaults: true,
          directives: {
            "default-src": ["'self'"],
            "base-uri": ["'self'"],
            "object-src": ["'none'"],
            "frame-ancestors": ["'none'"],
          },
        }
      : false,
    hsts: isProduction,
  })
);

// CORS configuration: explicit allowlist, no wildcard credentials.
const corsOptions = {
  origin(origin, callback) {
    // Allow non-browser clients such as curl and health probes.
    if (!origin) {
      callback(null, true);
      return;
    }

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
      return;
    }

    callback(new Error("Origin is not allowed by CORS"));
  },
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Too many requests from this IP, please try again later." },
});
app.use(limiter);

// Body parsing middleware
const requestBodyLimit = process.env.REQUEST_BODY_LIMIT || "1mb";
app.use(express.json({ limit: requestBodyLimit, strict: true }));
app.use(express.urlencoded({ extended: true, limit: requestBodyLimit }));

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    timestamp: new Date().toISOString(),
  });
});

// Basic API endpoint for testing
app.get("/api/test", (req, res) => {
  res.json({
    message: "Backend is running successfully!",
    timestamp: new Date().toISOString(),
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Error handling middleware
app.use((error, req, res, next) => {
  if (!isProduction) {
    console.error("Server error:", error);
  }

  if (error.message === "Origin is not allowed by CORS") {
    res.status(403).json({ message: "CORS origin denied" });
    return;
  }

  res.status(500).json({
    message: "Internal server error",
    error: isProduction ? undefined : error.message,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("SIGTERM received, shutting down gracefully");
  process.exit(0);
});

process.on("SIGINT", () => {
  console.log("SIGINT received, shutting down gracefully");
  process.exit(0);
});
