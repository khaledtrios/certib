export type DownloadFileExtension = "pdf" | "rtf" | "doc" | "docx" | "xls" | "xlsx" | "zip" | string;

export interface DownloadFileLinks {
  pdf?: string;
  rtf?: string;
  [key: string]: string | undefined;
}

export interface DownloadDocument {
  numero: string;
  titulo: string;
  /**
   * Data original do documento.
   * Pode ser string ISO ou Date; a grid formata para dd/MM/yyyy.
   */
  data: string | Date;
  versao: string | number;
  /**
   * Links para download por extensão (pdf, rtf, etc.).
   */
  links: DownloadFileLinks;
}

