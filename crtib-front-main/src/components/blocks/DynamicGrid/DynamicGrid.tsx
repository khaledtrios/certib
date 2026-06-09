"use client";

import { format as formatDate, parseISO, isValid } from "date-fns";
import type { GridColumn, GridRow } from "./DynamicGrid.types";
import type { DynamicGridProps } from "./DynamicGrid.types";

function formatCellValue(value: unknown, column: GridColumn): string {
  if (value == null || value === "") return "";

  const precision = column.config?.precision ?? 2;

  switch (column.type) {
    case "text":
      return String(value);
    case "number": {
      const num = Number(value);
      if (Number.isNaN(num)) return String(value);
      const formatted = num.toFixed(precision);
      if (column.config?.currency) {
        return `${formatted} ${column.config.currency}`;
      }
      return formatted.replace(".", ",");
    }
    case "percentage": {
      const num = Number(value);
      if (Number.isNaN(num)) return String(value);
      return `${num.toFixed(precision).replace(".", ",")}%`;
    }
    case "date": {
      if (typeof value === "string") {
        const parsed = parseISO(value);
        if (isValid(parsed)) {
          return formatDate(parsed, "dd.MM.yyyy");
        }
        return value;
      }
      if (value instanceof Date && isValid(value)) {
        return formatDate(value, "dd.MM.yyyy");
      }
      return String(value);
    }
    default:
      return String(value);
  }
}

function getAlignmentClass(column: GridColumn): string {
  switch (column.type) {
    case "number":
    case "percentage":
      return "text-right";
    case "date":
      return "text-center";
    case "text":
    default:
      return "text-left";
  }
}

export function DynamicGrid({
  columns,
  rows,
  title,
}: DynamicGridProps) {
  const tableContent = (
    <div className="font-grid overflow-x-auto rounded-lg">
      <table
        className="w-full border-collapse border border-crtib-gray-dark/15"
        role="grid"
      >
        <thead>
          <tr className="bg-[#37c2a2]">
            {columns.map((col) => {
              const isInteretsMoratoires =
                col.id === "interetsMoratoires" ||
                col.label.toLowerCase().includes("intérêts moratoires");
              const widthClass = isInteretsMoratoires ? "w-24" : "";

              return (
                <th
                  key={col.id}
                  className={`border border-[#37c2a2] px-5 py-4 text-base font-bold text-crtib-white text-center ${widthClass}`}
                  scope="col"
                >
                  {col.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={row.id}
              className={
                rowIndex % 2 === 0
                  ? "bg-crtib-white"
                  : "bg-crtib-gray-light"
              }
            >
              {columns.map((col) => {
                const isInteretsMoratoires =
                  col.id === "interetsMoratoires" ||
                  col.label.toLowerCase().includes("intérêts moratoires");
                const widthClass = isInteretsMoratoires ? "w-24" : "";

                return (
                  <td
                    key={col.id}
                    className={`border border-crtib-gray-dark/15 px-5 py-4 text-base font-bold text-[#828282] text-left ${widthClass}`}
                  >
                    {formatCellValue(row.values[col.id], col)}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  if (title) {
    return (
      <div className="font-grid w-full rounded-lg bg-crtib-gray-light p-6">
        <h2 className="mb-4 text-xl font-bold text-crtib-gray-dark">{title}</h2>
        {tableContent}
      </div>
    );
  }

  return <div className="font-grid w-full">{tableContent}</div>;
}
