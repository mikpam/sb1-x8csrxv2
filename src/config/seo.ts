interface SeoConfig {
  siteName: string;
  siteUrl: string;
  defaultTitle: string;
  defaultDescription: string;
  defaultImage: string;
  twitter: {
    creator: string;
    site: string;
  };
  themeColor: string;
}

const siteUrl = import.meta.env.SITE ?? 'https://adaptiveparse.com';

export const seoConfig: SeoConfig = {
  siteName: "AdaptiveParse",
  siteUrl,
  defaultTitle: "AdaptiveParse - End To Business Automation",
  defaultDescription: "Transform your workflow with intelligent automation powered by AI. AdaptiveParse provides cutting-edge business automation solutions.",
  defaultImage: `${siteUrl}/og-image.jpg`,
  twitter: {
    creator: "@adaptiveparse",
    site: "@adaptiveparse",
  },
  themeColor: "#0052CC",
};