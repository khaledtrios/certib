export type ColumnType = "date" | "number" | "percentage" | "text";

export interface GridColumnConfig {
  precision?: number;
  currency?: string;
}

export interface GridColumn {
  id: string;
  label: string;
  type: ColumnType;
  config?: GridColumnConfig;
}

export interface GridRow {
  id: string;
  values: {
    [columnId: string]: unknown;
  };
}

export interface DynamicGridProps {
  columns: GridColumn[];
  rows: GridRow[];
  title?: string;
}
