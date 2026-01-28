export const siteConfig = {
  name: "My App",
  description: "A modern web application built with Next.js",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://example.com",
  author: "Your Name",
  keywords: ["Next.js", "React", "Tailwind CSS"] as string[],
  links: {
    github: "https://github.com/yourusername",
    twitter: "https://twitter.com/yourusername",
  },
};

export type SiteConfig = typeof siteConfig;
