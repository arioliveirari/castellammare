import type { MetadataRoute } from 'next';

import { site } from '@/lib/site';
import { routing } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.map((locale) => ({
    url: locale === routing.defaultLocale ? site.url : `${site.url}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: locale === routing.defaultLocale ? 1 : 0.8,
    alternates: {
      languages: {
        es: site.url,
        en: `${site.url}/en`,
        it: `${site.url}/it`,
      },
    },
  }));
}
