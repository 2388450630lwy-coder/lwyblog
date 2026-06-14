export interface FAQItem {
  question: string;
  answer: string;
}

export interface SiteSettings {
  // Site info
  blogTitle: string;
  avatarEmoji: string;
  authorName: string;
  authorBio: string;
  skillTags: string[];
  logoEmoji: string;

  // Home page text
  heroTypewriter: string;
  heroSubtitle: string;
  welcomeModalTitle: string;
  welcomeModalBodyTitle: string;
  welcomeModalDescription: string;
  subscribeTitle: string;
  subscribeDescription: string;
  subscribeSuccessMessage: string;
  subscribeSwitchOffLabel: string;
  subscribeSwitchOnLabel: string;

  // FAQ
  faqItems: FAQItem[];

  // SEO
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;

  // Footer
  footerType: string;
  footerCopyright: string;

  // Social links
  social: {
    github: string;
    email: string;
    weibo: string;
    bilibili: string;
  };

  // Categories
  categories?: { id: string; name: string }[];
}

import siteConfig from "../data/site-config.json";

export const DEFAULT_SITE_SETTINGS: SiteSettings = siteConfig as SiteSettings;

const KEY = "lwyblog-site";

export function loadSiteSettings(): SiteSettings {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { ...DEFAULT_SITE_SETTINGS };
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_SITE_SETTINGS, ...parsed };
  } catch {
    return { ...DEFAULT_SITE_SETTINGS };
  }
}

export function saveSiteSettings(settings: SiteSettings): void {
  localStorage.setItem(KEY, JSON.stringify(settings));
}
