import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Clock, Map, Users, type LucideIcon } from 'lucide-react';

import { Card } from '@/components/ui/card';
import { SectionHeading } from '@/components/sections/section-heading';
import { Reveal } from '@/components/motion/reveal';

const ITEMS: { key: 'schedule' | 'itinerary' | 'group'; Icon: LucideIcon; img: string }[] = [
  { key: 'schedule', Icon: Clock, img: '/images/gallery/4.jpg' },
  { key: 'itinerary', Icon: Map, img: '/images/gallery/8.jpg' },
  { key: 'group', Icon: Users, img: '/bruno/amigos.jpg' },
];

export function Tour() {
  const t = useTranslations('tour');

  return (
    <section id="tour" className="py-24 md:py-32">
      <div className="container-editorial">
        <SectionHeading eyebrow={t('eyebrow')} title={t('title')} />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {ITEMS.map(({ key, Icon, img }, i) => (
            <Reveal key={key} delay={i * 0.08} className="h-full">
              <Card className="h-full overflow-hidden pt-0">
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={img}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute left-4 top-4 flex size-11 items-center justify-center rounded-full bg-cream/90 text-accent shadow-sm">
                    <Icon className="size-5" />
                  </div>
                </div>
                <div className="flex flex-col gap-3 px-6 pb-2">
                  <h3 className="font-serif text-2xl leading-tight">{t(`items.${key}.title`)}</h3>
                  <p className="text-pretty leading-relaxed text-muted-foreground">
                    {t(`items.${key}.description`)}
                  </p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
