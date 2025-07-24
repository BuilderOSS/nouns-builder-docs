import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  image: {
    service: {
      config: {
        limitInputPixels: false,
      },
    },
  },
  integrations: [
    starlight({
      title: "Nouns Builder",
      social: [
        { icon: 'farcaster', label: 'Farcaster', href: 'https://farcaster.xyz/~/channel/builder' },
				{ icon: 'x.com', label: 'X.COM', href: 'https://x.com/nounsbuilder' },
        { icon: 'github', label: 'GitHub', href: 'https://github.com/BuilderOSS' },
        { icon: 'discord', label: 'Discord', href: 'https://discord.gg/f845eBCyyb' },
        { icon: 'laptop', label: 'App', href: 'https://nouns.build/' },
      ],
      sidebar: [
        {
          label: "Getting Started",
          autogenerate: { directory: "onboarding" },
        },
        {
          label: "User Guide",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Contributor Guide",
          autogenerate: { directory: "contributors" },
        },
        {
          label: "Developer Libraries",
          autogenerate: { directory: "developers" },
        },
        {
          label: "Legal FAQ",
          autogenerate: { directory: "legal" },
        },
      ],
    }),
  ],
});
