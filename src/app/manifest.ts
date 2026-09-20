import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "No Breach",
    short_name: "No Breach",
    description:
      "Offensive security, cybersecurity education and community.",
    start_url: "/",
    display: "standalone",
    background_color: "#050506",
    theme_color: "#050506"
  };
}
