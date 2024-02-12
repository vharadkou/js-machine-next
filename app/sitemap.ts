import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://js-machine-next-637lt6qxcq-lz.a.run.app/',
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 1,
    },
    {
      url: 'https://js-machine-next-637lt6qxcq-lz.a.run.app/about/',
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 1,
    },
    {
      url: 'https://js-machine-next-637lt6qxcq-lz.a.run.app/digest/',
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 1,
    },
    {
      url: 'https://js-machine-next-637lt6qxcq-lz.a.run.app/events/',
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 1,
    },
  ];
}
