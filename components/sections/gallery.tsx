'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { X } from 'lucide-react';

import { cn } from '@/lib/utils';
import { SectionHeading } from '@/components/sections/section-heading';
import { Reveal } from '@/components/motion/reveal';
import { Dialog, DialogClose, DialogContent, DialogTitle } from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

// Each "tall" tile costs 2 grid cells, each normal tile costs 1.
// The total must be divisible by the column count at every breakpoint
// (2 cols mobile, 4 cols desktop) or the dense grid is forced to open a
// trailing partial row. With 2 tall + 8 normal = 12 cells, 12/2 and 12/4
// both land on whole rows, so the mosaic always fills a clean rectangle.
const IMAGES = [
  { src: '/images/gallery/1.jpg', tall: true },
  { src: '/images/gallery/2.jpg' },
  { src: '/images/gallery/3.jpg' },
  { src: '/images/gallery/4.jpg' },
  { src: '/images/gallery/5.jpg' },
  { src: '/images/gallery/6.jpg', tall: true },
  { src: '/images/gallery/7.jpg' },
  { src: '/images/gallery/8.jpg' },
  { src: '/images/gallery/9.jpg' },
  { src: '/images/gallery/10.jpg' },
];

export function Gallery() {
  const t = useTranslations('gallery');
  const [open, setOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const openAt = (i: number) => {
    setStartIndex(i);
    setOpen(true);
  };

  return (
    <section id="gallery" className="bg-secondary/40 py-24 md:py-32">
      <div className="container-editorial">
        <SectionHeading
          eyebrow={t('eyebrow')}
          title={t('title')}
          description={t('description')}
        />

        <Reveal
          delay={0.1}
          className="mt-12 grid grid-flow-dense grid-cols-2 auto-rows-[160px] gap-3 md:grid-cols-4 md:auto-rows-[220px] md:gap-4"
        >
          {IMAGES.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => openAt(i)}
              className={cn(
                'group relative overflow-hidden rounded-xl focus:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/40',
                img.tall && 'row-span-2',
              )}
            >
              <Image
                src={img.src}
                alt=""
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-deep/0 transition-colors group-hover:bg-deep/20" />
            </button>
          ))}
        </Reveal>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          showClose={false}
          className="max-w-5xl border-none bg-transparent p-0 shadow-none"
        >
          <DialogTitle className="sr-only">{t('title')}</DialogTitle>

          {/* Close: above the image on mobile, top-right corner on desktop */}
          <DialogClose className="absolute -top-14 right-4 z-10 flex size-11 items-center justify-center rounded-full bg-cream text-foreground shadow-lg transition hover:bg-cream/90 md:-right-14 md:top-0">
            <X className="size-5" />
            <span className="sr-only">Close</span>
          </DialogClose>

          {open && (
            <Carousel opts={{ startIndex, loop: true }} className="w-full">
              <CarouselContent>
                {IMAGES.map((img) => (
                  <CarouselItem key={img.src} className="flex items-center justify-center">
                    <div className="relative aspect-[3/2] w-full">
                      <Image
                        src={img.src}
                        alt=""
                        fill
                        sizes="90vw"
                        className="rounded-lg object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Arrows: centered row below the image on mobile, on the sides
                  on desktop (md:contents drops this wrapper so the buttons
                  position absolutely against the carousel). */}
              <div className="absolute inset-x-0 -bottom-16 flex justify-center gap-6 md:contents">
                <CarouselPrevious className="static size-12 translate-y-0 border-none bg-cream text-foreground shadow-lg hover:bg-cream/90 md:absolute md:left-2 md:top-1/2 md:size-11 md:-translate-y-1/2 lg:-left-14" />
                <CarouselNext className="static size-12 translate-y-0 border-none bg-cream text-foreground shadow-lg hover:bg-cream/90 md:absolute md:right-2 md:top-1/2 md:size-11 md:-translate-y-1/2 lg:-right-14" />
              </div>
            </Carousel>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
