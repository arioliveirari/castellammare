import { useTranslations } from 'next-intl';
import { MapPin, ChevronDown } from 'lucide-react';

import { site, whatsappLink } from '@/lib/site';
import { Button } from '@/components/ui/button';
import { WhatsappIcon } from '@/components/icons/whatsapp';
import { Reveal } from '@/components/motion/reveal';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <video
        className="absolute inset-0 size-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/bruno/backgroundOver.jpg"
        preload="metadata"
      >
        <source src="/video/bg.mp4" type="video/mp4" />
      </video>

      {/* Legibility overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep/55 via-deep/35 to-deep/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-deep/60 to-transparent" />

      <div className="container-editorial relative z-10 pt-24 text-cream">
        <div className="max-w-3xl">
          <Reveal className="eyebrow flex items-center gap-2 text-terracotta-soft">
            <MapPin className="size-4" />
            {t('location')}
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-5 font-serif text-6xl font-semibold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
              {t('title')}
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-3 font-serif text-2xl italic text-cream/90 md:text-3xl">
              {t('subtitle')}
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="mt-6 max-w-xl text-pretty text-lg text-cream/85 md:text-xl">
              {t('description')}
            </p>
          </Reveal>

          <Reveal delay={0.32} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="accent" size="lg" className="rounded-full">
              <a href={whatsappLink(site.whatsapp)} target="_blank" rel="noopener noreferrer">
                <WhatsappIcon className="size-5" />
                {t('ctaBook')}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-cream/40 bg-white/5 text-cream backdrop-blur-sm hover:bg-white/15 hover:text-cream"
            >
              <a href="#tour">{t('ctaTour')}</a>
            </Button>
          </Reveal>
        </div>
      </div>

      <a
        href="#about"
        aria-label={t('scroll')}
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-cream/70 transition-colors hover:text-cream"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">{t('scroll')}</span>
        <ChevronDown className="size-5 animate-bounce" />
      </a>
    </section>
  );
}
