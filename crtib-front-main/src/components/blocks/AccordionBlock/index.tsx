"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import RichText from "@/components/RichText";

interface AccordionItem {
  title: string;
  content: any;
}

interface AccordionBlockProps {
  title?: string | null;
  items: AccordionItem[];
}

function AccordionItem({ item }: { item: AccordionItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-0 py-4 text-left transition-colors hover:text-[#08AA86] group"
        aria-expanded={open}
      >
        <span className="text-[14px] font-semibold uppercase tracking-wide text-[#2F2F2F] group-hover:text-[#08AA86] transition-colors pr-6">
          {item.title}
        </span>
        <span className="flex-shrink-0 w-7 h-7 rounded-full border-2 border-[#08AA86] flex items-center justify-center text-[#08AA86] transition-transform duration-200">
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </span>
      </button>

      {open && (
        <div className="pb-5 text-sm text-gray-600 leading-relaxed">
          <RichText content={item.content} />
        </div>
      )}
    </div>
  );
}

export function AccordionBlock({ title, items }: AccordionBlockProps) {
  if (!items?.length) return null;

  return (
    <section className="w-full bg-white py-10">
      <div className="mx-auto max-w-3xl px-6">
        {title && (
          <h2 className="mb-6 text-lg font-semibold uppercase tracking-[0.18em] text-[#2F2F2F]">
            {title}
          </h2>
        )}
        <div className="divide-y divide-gray-200 border-t border-gray-200">
          {items.map((item, i) => (
            <AccordionItem key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
