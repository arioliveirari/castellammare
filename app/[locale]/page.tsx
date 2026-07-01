import { getTranslations, setRequestLocale } from 'next-intl/server';

import { site } from '@/lib/site';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Gallery } from '@/components/sections/gallery';
import { Tour } from '@/components/sections/tour';
import { Reviews } from '@/components/sections/reviews';
import { Faq } from '@/components/sections/faq';
import { Contact } from '@/components/sections/contact';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'meta' });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: site.name,
    description: t('description'),
    url: site.url,
    image: `${site.url}/bruno/backgroundOver.jpg`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Castellammare del Golfo',
      addressRegion: 'Sicilia',
      addressCountry: 'IT',
    },
    telephone: `+${site.whatsapp}`,
    sameAs: [site.instagram.url],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <About />
      <Gallery />
      <Tour />
      <Reviews />
      <Faq />
      <Contact />
    </>
  );
}
