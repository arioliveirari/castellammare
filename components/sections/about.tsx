import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Fish, Waves, Sun, Clock, Route } from 'lucide-react';

import { Reveal } from '@/components/motion/reveal';

const TAGS = [
  { key: 'fishing', Icon: Fish },
  { key: 'cave', Icon: Waves },
  { key: 'beach', Icon: Sun },
] as const;

export function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container-editorial grid items-center gap-14 lg:grid-cols-2">
        {/* Text */}
        <div className="flex max-w-xl flex-col gap-6">
          <Reveal className="flex flex-col gap-4">
            <span className="eyebrow flex items-center gap-3">
              {t('eyebrow')}
              <span className="h-px w-10 bg-accent/50" />
            </span>
            <h2 className="text-balance text-4xl font-semibold leading-[1.05] md:text-5xl">
              {t('title')}
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              {t('description')}
            </p>
          </Reveal>

          <Reveal delay={0.18} className="mt-2 flex flex-wrap gap-3">
            {TAGS.map(({ key, Icon }) => (
              <span
                key={key}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium shadow-sm"
              >
                <Icon className="size-4 text-accent" />
                {t(`tags.${key}`)}
              </span>
            ))}
          </Reveal>
        </div>

        {/* Image collage */}
        <Reveal delay={0.12} y={32} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/barco_1_02.jpeg"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 hidden w-44 flex-col gap-3 rounded-xl border border-border bg-card p-5 shadow-lg sm:flex">
            <div className="flex items-center gap-3">
              <Clock className="size-5 text-accent" />
              <div>
                <p className="font-serif text-xl leading-none">4h 30′</p>
                <p className="text-xs text-muted-foreground">tour</p>
              </div>
            </div>
            <div className="h-px bg-border" />
            <div className="flex items-center gap-3">
              <Route className="size-5 text-accent" />
              <div>
                <p className="font-serif text-xl leading-none">25 km</p>
                <p className="text-xs text-muted-foreground">costa</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
