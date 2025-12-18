// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://pelikan.io',
  integrations: [sitemap()],
  redirects: {
    '/2016/caching-in-datacenters.html': '/blog/caching-in-datacenters/',
    '/2016/server-first.html': '/blog/server-first/',
    '/2016/separation-concerns.html': '/blog/separation-concerns/',
    '/2018/memory-matters.html': '/blog/memory-matters/',
    '/2019/why-pelikan.html': '/blog/why-pelikan/',
    '/2020/benchmark-adq.html': '/blog/benchmark-adq/',
    '/2021/segcache.html': '/blog/segcache/',
  },
});
