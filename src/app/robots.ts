import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/private/", "/admin/", "/.well-known/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/private/"],
        crawlDelay: 1,
      },
    ],
    sitemap: "https://northpeaktechnologies.com/sitemap.xml",
    host: "https://northpeaktechnologies.com",
  };
}
