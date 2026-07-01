'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslations } from 'next-intl';
import { toast } from 'sonner';
import { Send } from 'lucide-react';

import { site } from '@/lib/site';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const LANGS = ['es', 'en', 'it'] as const;

export function ContactForm() {
  const t = useTranslations('contact');
  const tf = useTranslations('contact.form');

  const schema = z.object({
    name: z.string().min(1, tf('errors.name')),
    people: z.string().optional(),
    date: z.string().optional(),
    email: z.string().email(tf('errors.email')),
    phone: z.string().min(6, tf('errors.phone')),
    message: z.string().optional(),
    languages: z.array(z.string()).optional(),
  });

  type FormValues = z.infer<typeof schema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      people: '',
      date: '',
      email: '',
      phone: '',
      message: '',
      languages: [],
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      const res = await fetch(site.formcarryEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          Nome: values.name,
          Email: values.email,
          Telefono: values.phone,
          Quantita: values.people,
          Data: values.date,
          Messaggio: values.message,
          Lingua: (values.languages ?? []).join(', ').toUpperCase(),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && (data.code === 200 || data.status === 'success' || res.status === 200)) {
        toast.success(t('success'));
        form.reset();
      } else {
        toast.error(t('error'));
      }
    } catch {
      toast.error(t('error'));
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{tf('name')}</FormLabel>
                <FormControl>
                  <Input autoComplete="name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{tf('phone')}</FormLabel>
                <FormControl>
                  <Input type="tel" autoComplete="tel" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{tf('email')}</FormLabel>
              <FormControl>
                <Input type="email" autoComplete="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="people"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{tf('people')}</FormLabel>
                <FormControl>
                  <Input type="number" min={1} max={12} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{tf('date')}</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{tf('message')}</FormLabel>
              <FormControl>
                <Textarea rows={4} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="languages"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{tf('langLabel')}</FormLabel>
              <div className="flex flex-wrap gap-4 pt-1">
                {LANGS.map((lang) => {
                  const checked = field.value?.includes(lang) ?? false;
                  return (
                    <label
                      key={lang}
                      className="flex cursor-pointer items-center gap-2 text-sm font-medium"
                    >
                      <Checkbox
                        checked={checked}
                        onCheckedChange={(v) => {
                          const set = new Set(field.value ?? []);
                          if (v) set.add(lang);
                          else set.delete(lang);
                          field.onChange(Array.from(set));
                        }}
                      />
                      {lang.toUpperCase()}
                    </label>
                  );
                })}
              </div>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          variant="accent"
          size="lg"
          className="mt-2 rounded-full"
          disabled={form.formState.isSubmitting}
        >
          <Send className="size-4" />
          {form.formState.isSubmitting ? tf('sending') : tf('submit')}
        </Button>
      </form>
    </Form>
  );
}
