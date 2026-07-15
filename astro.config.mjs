import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
  site: 'https://growthtodo.com',
  markdown: {
    rehypePlugins: [
      [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
    ],
  },
  redirects: {
    '/blog/the-system-was-lying-to-me': '/blog/an-audit-of-my-follow-up-pipeline-found-55-was-overdue',
  },
  integrations: [mdx(), sitemap(), tailwind()]
});