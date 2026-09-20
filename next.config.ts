import type {
  NextConfig
} from "next";

const isDevelopment =
  process.env.NODE_ENV !==
  "production";

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "font-src 'self' data:",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "img-src 'self' data: blob:",
  "object-src 'none'",

  isDevelopment
    ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'"
    : "script-src 'self' 'unsafe-inline'",

  "style-src 'self' 'unsafe-inline'",

  isDevelopment
    ? "connect-src 'self' ws: wss:"
    : "connect-src 'self'"
].join("; ");

const nextConfig:
  NextConfig = {
    poweredByHeader:
      false,

    reactStrictMode:
      true,

    async rewrites() {
      return [
        {
          source:
            "/.well-known/security.txt",

          destination:
            "/security.txt"
        }
      ];
    },

    async headers() {
      return [
        {
          source:
            "/(.*)",

          headers: [
            {
              key:
                "Content-Security-Policy",

              value:
                contentSecurityPolicy
            },
            {
              key:
                "Strict-Transport-Security",

              value:
                "max-age=63072000; includeSubDomains; preload"
            },
            {
              key:
                "X-Content-Type-Options",

              value:
                "nosniff"
            },
            {
              key:
                "X-Frame-Options",

              value:
                "DENY"
            },
            {
              key:
                "Referrer-Policy",

              value:
                "strict-origin-when-cross-origin"
            },
            {
              key:
                "Permissions-Policy",

              value:
                "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()"
            },
            {
              key:
                "Cross-Origin-Opener-Policy",

              value:
                "same-origin"
            },
            {
              key:
                "Cross-Origin-Resource-Policy",

              value:
                "same-origin"
            },
            {
              key:
                "Origin-Agent-Cluster",

              value:
                "?1"
            },
            {
              key:
                "X-DNS-Prefetch-Control",

              value:
                "off"
            },
            {
              key:
                "X-Permitted-Cross-Domain-Policies",

              value:
                "none"
            }
          ]
        }
      ];
    }
  };

export default nextConfig;
