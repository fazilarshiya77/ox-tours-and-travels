import React from 'react';
import { Plus } from 'lucide-react';
import { FAQS } from '../../data/contactContent';
import { SectionHeader } from '../ui/SectionHeader';
import { Reveal } from '../ui/Reveal';

/** Frequently asked questions as an accordion; the first answer starts open. */
export const FaqList: React.FC = () => (
  <section className="mt-16">
    <SectionHeader kicker="Passenger Guidance" title="Frequently Asked Questions" />
    <div className="border-t border-ink-black">
      {FAQS.map((faq, i) => (
        <Reveal key={faq.question} delay={i * 110}>
          <details open={i === 0} className="group border-b border-paper-rule">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-4 font-serif text-xl font-bold [&::-webkit-details-marker]:hidden">
              <span>{faq.question}</span>
              <Plus className="mt-1 h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-45" aria-hidden="true" />
            </summary>
            <p className="max-w-3xl pb-5 text-lg leading-relaxed text-ink-charcoal">{faq.answer}</p>
          </details>
        </Reveal>
      ))}
    </div>
  </section>
);
