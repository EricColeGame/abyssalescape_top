export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Abyssal Escape Wiki",
  shortName: "Abyssal Escape",
  logoText: "A",
  tagline: "Survivor Guides, Killer Abilities & Escape Tips",
  description: "Explore Abyssal Escape, the Roblox asymmetrical horror game. Learn survivor strategies, killer abilities, red mist objectives, and escape tactics.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://abyssalescape.top",
  supportEmail: "support@abyssalescape.top",
  gameUrl: "https://www.roblox.com/games/133239297020492/Abyssal-Escape",
  heroVideoId: "3ewHB-Z6UBA", // Abyssal Escape official gameplay showcase
  social: {
    discord: "https://discord.gg/abyssalescape",
    youtube: "https://www.youtube.com/@AbyssalEscape",
  },
  locales: ["en", "es", "pt-BR", "de"],
  defaultLocale: "en",
};
