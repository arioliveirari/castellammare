import { useTranslations } from 'next-intl';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { SectionHeading } from '@/components/sections/section-heading';
import { Reveal } from '@/components/motion/reveal';

type Item = { question: string; answer: string };

export function Faq() {
  const t = useTranslations('faq');
  const items = t.raw('items') as Item[];

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container-editorial grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading eyebrow={t('eyebrow')} title={t('title')} />

        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="w-full">
            {items.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
