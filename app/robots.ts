import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://js-machine-next-637lt6qxcq-lz.a.run.app/sitemap.xml',
  };
}
