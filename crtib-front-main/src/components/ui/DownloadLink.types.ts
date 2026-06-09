export type DownloadLinkCustom = {
  variant: "custom";
  title: string;
  href: string;
};

export type DownloadLinkDetailed = {
  variant: "detailed";
  href: string;
  name: string;
  version?: string;
  fileSize: string;
  extension: string;
};

export type DownloadLinkProps = (DownloadLinkCustom | DownloadLinkDetailed) & {
  download?: boolean;
  target?: "_blank";
  rel?: string;
  className?: string;
};
