import { Icons } from "@/components/icons";

interface SocialItem {
  id: number;
  label: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const PRESENTATION = {
  hero: {
    title: "Sharemind",
    description: "An app that tells you what's happening around.",
  },
  urls: {
    github: "https://github.com/the-ora/browser",
    x: "https://x.com/orabrowser",
    discord: "https://discord.gg/aYFUFyxx",
    buymecoffee: "https://buymeacoffee.com/orabrowser",
    website: "https://sharemind.app",
  },
  footer: {
    description:
      "Sharemind is an app that tells you what's happening around you.",
  },
} as const;

export const SOCIALITEMS: SocialItem[] = [
  {
    id: 1,
    label: "GitHub",
    href: PRESENTATION.urls.github,
    icon: Icons.github,
  },
  {
    id: 2,
    label: "X (Twitter)",
    href: PRESENTATION.urls.x,
    icon: Icons.x,
  },
  {
    id: 3,
    label: "Discord",
    href: PRESENTATION.urls.discord,
    icon: Icons.discord,
  },
];
