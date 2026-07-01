import { cn } from '@/lib/utils';
import { Reveal } from '@/components/motion/reveal';

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        'flex max-w-2xl flex-col gap-4',
        align === 'center' && 'mx-auto items-center text-center',
        className,
      )}
    >
      <span className="eyebrow flex items-center gap-3">
        {eyebrow}
        <span className="h-px w-10 bg-accent/50" />
      </span>
      <h2 className="text-balance text-4xl font-semibold leading-[1.05] md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="text-pretty text-lg text-muted-foreground">{description}</p>
      )}
    </Reveal>
  );
}
