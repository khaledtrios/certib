"use client";

import { useState } from "react";

interface AccordionItem {
  title: string;
  content: string;
  id: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = openItems.has(item.id);

        return (
          <div
            key={item.id}
            className={`accordion-item ${index > 0 ? "border-t border-gray-200" : ""}`}
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="accordion-header w-full flex items-center justify-between text-left py-4"
              aria-expanded={isOpen}
            >
              <span>{item.title}</span>
              <div
                className={`w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>
            <div
              className={`accordion-content overflow-hidden transition-all duration-200 ${
                isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div
                className="prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
