"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";

type CalculatorResult = {
  label: string;
  value: string;
};

type CalculatorSectionProps = {
  title?: string;
  options?: string[];
  results?: CalculatorResult[];
};

const defaultOptions = ["Génie civil", "Gros-oeuvre", "Second-oeuvre"];

const defaultResults: CalculatorResult[] = [
  {
    label: "de chiffre d'affaires annuel minimum",
    value: "24.00 M€",
  },
  {
    label: "d'effectif minimum",
    value: "261 PERSONNES",
  },
];

export function CalculatorSection({
  title = "Calculateur",
  options = defaultOptions,
  results = defaultResults,
}: CalculatorSectionProps) {
  const [trade, setTrade] = useState(options[0] || "");
  const [marketValue, setMarketValue] = useState("");
  const [duration, setDuration] = useState("");
  const [showResults, setShowResults] = useState(false);

  const canSubmit = useMemo(
    () => trade.trim() && marketValue.trim() && duration.trim(),
    [trade, marketValue, duration],
  );

  return (
    <section className="w-full bg-[#F5F5F5]">
      <div className="mx-auto w-full max-w-5xl px-6 py-12">
        <h2 className="text-center text-[18px] font-semibold uppercase tracking-[0.25em] text-crtib-gray-dark">
          {title}
        </h2>

        <div className="mt-8">
          <div className="grid gap-6">
            <label className="grid gap-2 text-[16px] text-crtib-gray-dark">
              Corps de métier *
              <div className="flex items-center gap-3">
                <select
                  value={trade}
                  onChange={(event) => setTrade(event.target.value)}
                  className="w-full border border-[#E4E4E4] bg-white px-3 py-2 text-[15px] outline-none focus:border-[#37C2A2]"
                >
                  {options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <span className="group relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#EFEFEF] text-[12px] text-[#7A7A7A]">
                  ?
                  <span className="pointer-events-none absolute right-full top-1/2 z-10 mr-3 w-56 -translate-y-1/2 rounded-md bg-[#F0F0F0] px-3 py-2 text-[12px] text-[#3B3B3B] opacity-0 shadow-md transition-opacity duration-200 ease-out group-hover:opacity-100">
                    Tous les corps de métiers ne sont pas repris dans cette
                    liste.
                  </span>
                </span>
              </div>
            </label>

            <div className="grid gap-6 md:grid-cols-2">
              <label className="grid gap-2 text-[16px] text-crtib-gray-dark">
                Valeur du marché *
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    inputMode="decimal"
                    value={marketValue}
                    onChange={(event) => setMarketValue(event.target.value)}
                    className="w-full border border-[#E4E4E4] bg-white px-3 py-2 text-[15px] outline-none focus:border-[#37C2A2]"
                    placeholder="0"
                  />
                  <span className="whitespace-nowrap text-[15px] text-[#6B6B6B]">
                    en mio. d'€
                  </span>
                  <span className="group relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#EFEFEF] text-[12px] text-[#7A7A7A]">
                    ?
                    <span className="pointer-events-none absolute right-full top-1/2 z-10 mr-3 w-60 -translate-y-1/2 rounded-md bg-[#F0F0F0] px-3 py-2 text-[12px] text-[#3B3B3B] opacity-0 shadow-md transition-opacity duration-200 ease-out group-hover:opacity-100">
                      La valeur du marché doit être estimée aussi précisément que
                      possible.
                    </span>
                  </span>
                </div>
              </label>

              <label className="grid gap-2 text-[16px] text-crtib-gray-dark">
                Durée du marché *
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    inputMode="numeric"
                    value={duration}
                    onChange={(event) => setDuration(event.target.value)}
                    className="w-full border border-[#E4E4E4] bg-white px-3 py-2 text-[15px] outline-none focus:border-[#37C2A2]"
                    placeholder="0"
                  />
                  <span className="whitespace-nowrap text-[15px] text-[#6B6B6B]">
                    mois
                  </span>
                  <span className="group relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#EFEFEF] text-[12px] text-[#7A7A7A]">
                    ?
                    <span className="pointer-events-none absolute right-full top-1/2 z-10 mr-3 w-60 -translate-y-1/2 rounded-md bg-[#F0F0F0] px-3 py-2 text-[12px] text-[#3B3B3B] opacity-0 shadow-md transition-opacity duration-200 ease-out group-hover:opacity-100">
                      La durée du marché doit être estimée aussi précisément que
                      possible.
                    </span>
                  </span>
                </div>
              </label>
            </div>

            <div>
              <Button
                label="VALIDER"
                onClick={() => setShowResults(true)}
                size="md"
                variant="dark"
                className={!canSubmit ? "opacity-60 cursor-not-allowed" : ""}
              />
            </div>
          </div>
        </div>
      </div>

      {showResults ? (
        <div className="bg-[#37C2A2] py-12">
          <div className="mx-auto grid w-full max-w-5xl gap-6 px-6 md:grid-cols-2">
            {results.map((item) => (
              <div
                key={item.label}
                className="flex min-h-[180px] flex-col items-center justify-center rounded-md bg-white/15 px-6 text-center text-white"
              >
                <div className="text-lg font-semibold">=</div>
                <div className="mt-2 text-3xl font-semibold">
                  {item.value}
                </div>
                <div className="mt-2 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
