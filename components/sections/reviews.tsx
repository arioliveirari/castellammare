'use client';

import { useTranslations } from 'next-intl';
import { Quote, Star } from 'lucide-react';

import { Card } from '@/components/ui/card';
import { SectionHeading } from '@/components/sections/section-heading';
import { Reveal } from '@/components/motion/reveal';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

type Review = { name: string; origin: string; text: string };

export function Reviews() {
  const t = useTranslations('reviews');
  const items = t.raw('items') as Review[];

  return (
    <section id="reviews" className="bg-primary py-24 text-primary-foreground md:py-32">
      <div className="container-editorial">
        <SectionHeading
          eyebrow={t('eyebrow')}
          title={t('title')}
          className="[&_h2]:text-cream [&_p]:text-cream/70"
        />

        <Reveal delay={0.1} className="mt-12">
          <Carousel opts={{ align: 'start', loop: true }}>
            <CarouselContent className="-ml-4">
              {items.map((review, i) => (
                <CarouselItem key={i} className="pl-4 sm:basis-1/2 lg:basis-1/3">
                  <Card className="h-full border-cream/10 bg-cream/5 text-cream backdrop-blur-sm">
                    <div className="flex flex-col gap-4 px-6">
                      <Quote className="size-8 text-terracotta-soft" />
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <Star key={s} className="size-4 fill-terracotta-soft text-terracotta-soft" />
                        ))}
                      </div>
                      <p className="text-pretty leading-relaxed text-cream/90">
                        “{review.text}”
                      </p>
                      <div className="mt-2 border-t border-cream/10 pt-4">
                        <p className="font-serif text-lg">{review.name}</p>
                        <p className="text-sm text-cream/60">{review.origin}</p>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex justify-center gap-3">
              <CarouselPrevious className="static translate-y-0 border-cream/30 bg-transparent text-cream hover:bg-cream/10 hover:text-cream" />
              <CarouselNext className="static translate-y-0 border-cream/30 bg-transparent text-cream hover:bg-cream/10 hover:text-cream" />
            </div>
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
