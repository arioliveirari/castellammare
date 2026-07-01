import { useTranslations } from 'next-intl';
import { Instagram, MapPin } from 'lucide-react';

import { site, whatsappLink } from '@/lib/site';
import { Card } from '@/components/ui/card';
import { WhatsappIcon } from '@/components/icons/whatsapp';
import { SectionHeading } from '@/components/sections/section-heading';
import { Reveal } from '@/components/motion/reveal';
import { ContactForm } from '@/components/sections/contact-form';

export function Contact() {
  const t = useTranslations('contact');

  return (
    <section id="contact" className="bg-secondary/40 py-24 md:py-32">
      <div className="container-editorial grid gap-12 lg:grid-cols-2">
        {/* Info + map */}
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow={t('eyebrow')}
            title={t('title')}
            description={t('description')}
          />

          <Reveal delay={0.1} className="flex flex-col gap-5">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                {t('info.phonesTitle')}
              </p>
              <div className="mt-2 flex flex-col gap-2">
                {site.phones.map((p) => (
                  <a
                    key={p.number}
                    href={whatsappLink(p.number)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-medium transition-colors hover:text-accent"
                  >
                    <WhatsappIcon className="size-4 text-accent" />
                    {p.display} · {p.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-medium transition-colors hover:text-accent"
              >
                <Instagram className="size-4 text-accent" />
                {site.instagram.handle}
              </a>
              <a
                href={site.maps.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 font-medium transition-colors hover:text-accent"
              >
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                {t('info.location')}
              </a>
            </div>

            <div className="overflow-hidden rounded-xl border border-border shadow-sm">
              <iframe
                title={t('info.locationTitle')}
                src={site.maps.embed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full border-0"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>

        {/* Form */}
        <Reveal delay={0.15} y={32} className="h-full">
          <Card className="h-full justify-center p-6 md:p-8">
            <ContactForm />
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
