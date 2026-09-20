import {
  siteConfig
} from "@/content/site";

export const dynamic =
  "force-static";

export function GET() {
  const policy =
    new URL(
      "/security",
      siteConfig.url
    ).toString();

  const canonical =
    new URL(
      "/.well-known/security.txt",
      siteConfig.url
    ).toString();

  const lines = [
    `Contact: ${siteConfig.linkedin}`,
    `Policy: ${policy}`,
    `Canonical: ${canonical}`,
    "Preferred-Languages: en, fr",
    "Expires: 2027-09-20T23:59:59Z",
    "",
    "# This file does not grant authorization to test No Breach systems.",
    "# Use the published contact channel for responsible initial contact."
  ];

  return new Response(
    lines.join("\n"),
    {
      status: 200,

      headers: {
        "Content-Type":
          "text/plain; charset=utf-8",

        "Cache-Control":
          "public, max-age=3600, s-maxage=3600"
      }
    }
  );
}
