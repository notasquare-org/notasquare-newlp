// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Astro 全体の設定をここに書きます。
export default defineConfig({
  // 本番サイトのURL。sitemap や canonical の生成に使われます。
  site: 'https://notasquare.co.jp',
  integrations: [sitemap()],
});
