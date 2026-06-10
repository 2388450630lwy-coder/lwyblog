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
}

export const DEFAULT_SITE_SETTINGS: SiteSettings = {
  blogTitle: "LWY's Island",
  avatarEmoji: "🦊",
  authorName: "你好，我是 LWY",
  authorBio: "一名热爱前端开发的程序员。喜欢探索新技术，用代码创造有趣的东西。\n工作之余喜欢读书、喝咖啡，偶尔钓鱼。",
  skillTags: ["React / TS", "Node.js", "Vue.js", "Python", "读书", "咖啡"],
  logoEmoji: "🌿",
  heroTypewriter: "欢迎来到我的小岛！",
  heroSubtitle: "在这里记录技术学习与生活点滴 🌿",
  welcomeModalTitle: "🌿 欢迎来到无人岛",
  welcomeModalBodyTitle: "欢迎来到我的小岛！",
  welcomeModalDescription: "这里记录着我的技术探索和日常思考。\n随意逛逛，希望能有所收获～",
  subscribeTitle: "📬 订阅更新",
  subscribeDescription: "不想错过新文章？留下邮箱吧",
  subscribeSuccessMessage: "订阅成功！有新文章时会通知你。",
  subscribeSwitchOffLabel: "仅新文章",
  subscribeSwitchOnLabel: "周刊",
  faqItems: [
    {
      question: "这个博客是用什么搭建的？",
      answer:
        "使用 React 19 + TypeScript + Vite 构建，UI 组件库是 animal-island-ui，设计风格灵感来自动物森友会。",
    },
    {
      question: "博客多久更新一次？",
      answer:
        "我会在有新想法或学到新东西时更新博客，大概每月 1-2 篇文章。质量比频率更重要。",
    },
    {
      question: "可以转载文章吗？",
      answer:
        "欢迎转载，但请注明出处并附上原文链接。如果有任何疑问，可以通过邮件联系我。",
    },
    {
      question: "为什么叫「无人岛」？",
      answer:
        "这个博客就像一座小岛，记录着我的思考和成长。希望来访的你能在这里找到一些有用的东西。",
    },
  ],
  seoTitle: "",
  seoDescription: "",
  seoKeywords: "",
  footerType: "sea",
  footerCopyright: "",
};

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
