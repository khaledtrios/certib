export interface ClausesGridItem {
  number: string;
  title: string;
  date: string;
  version?: string;
  pdfUrl?: string;
  rtfUrl?: string;
  docUrl?: string;
}

export interface ClausesGridProps {
  title?: string;
  rows: ClausesGridItem[];
  redirectLabel?: string;
  redirectHref?: string;
}
