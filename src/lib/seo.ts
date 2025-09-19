import { Metadata } from "next";

export const siteConfig = {
  name: "Sharemind",
  shortName: "Sharemind",
  description: "An app that tells you what's happening around.",
  url: "https://sharemind.app",
  ogImage: "/opengraph-image.png",
  creator: "@sharemindapp",
  keywords: [
    "Sharemind",
    "local updates",
    "what's happening around",
    "community",
    "social app",
    "events near me",
  ],
};

// Simple structured data for single-page site
export function createWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };
}

export function createSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "SocialNetworkingApplication",
    operatingSystem: "iOS, Android, Web",
    description: siteConfig.description,
    url: siteConfig.url,
    isAccessibleForFree: true,
    author: {
      "@type": "Organization",
      name: "The Sharemind Team",
      url: "https://sharemind.app",
    },
    featureList: [
      "Real-time local updates",
      "Discover what's happening around you",
      "Community-driven posts",
      "Privacy-first by default",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      ratingCount: "1",
    },
  };
}
