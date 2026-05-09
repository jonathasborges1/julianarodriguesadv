"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import type { FaqItem } from "./faqList";

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-10 w-full max-w-3xl space-y-4">
      {items.map(({ question, answer }, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;
        return (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
          >
            <button
              id={buttonId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="w-full flex justify-between items-center text-left px-6 py-4 bg-white hover:bg-gray-50 transition-colors"
              onClick={() =>
                setOpenIndex((prev) => (prev === index ? null : index))
              }
            >
              <span className="text-base sm:text-lg font-medium text-[#000]">
                {question}
              </span>
              <ChevronDown
                className={`h-5 w-5 transition-transform duration-300 text-[#00274B] ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
                aria-hidden="true"
              />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`transition-max-height duration-500 ease-in-out overflow-hidden px-6 pb-2 text-[#00274B] text-sm sm:text-base ${
                isOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              <p className="pt-2 leading-relaxed">{answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
