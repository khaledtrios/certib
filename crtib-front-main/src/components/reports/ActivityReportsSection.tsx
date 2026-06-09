"use client";

import {
  buttonBase,
  buttonSizes,
  buttonVariants,
} from "@/components/ui/buttonStyles";

type ReportItem = {
  id: string;
  year: string;
  pdfUrl: string;
};

type ActivityReportsSectionProps = {
  title?: string;
  reports: ReportItem[];
};

export function ActivityReportsSection({
  title = "Rapport d'activité",
  reports,
}: ActivityReportsSectionProps) {
  return (
    <section className="w-full bg-[#F5F5F5]">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <h2 className="text-[14px] font-semibold uppercase tracking-[0.2em] text-crtib-gray-dark">
          {title}
        </h2>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {reports.map((report) => (
            <a
              key={report.id}
              href={report.pdfUrl}
              download
              className={`${buttonBase} ${buttonSizes.md} ${buttonVariants.primary}`}
            >
              {report.year}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
