"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FAQ } from "@/lib/contentful/interface";

export default function FAQ({ title, questionsCollection }: FAQ) {
  return (
    <section className="pt-0 max-w-[960px] w-full mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
          {title}
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {questionsCollection.items.map((faq, i) => (
              <AccordionItem
                style={{ boxShadow: "0 4px 20px 0 rgba(0, 0, 0, 0.25)" }}
                className="p-2 rounded-[1.5rem] mb-4"
                key={i}
                value={`item-${i}`}
              >
                <AccordionTrigger className="text-left p-2 text-xl font-black">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg pl-3">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
