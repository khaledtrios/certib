export const buttonBase =
  "inline-flex items-center justify-center select-none " +
  "rounded-[2px] border font-sans font-semibold uppercase tracking-[0.08em] " +
  "transition-colors duration-150 focus-visible:outline-none " +
  "focus-visible:ring-2 focus-visible:ring-offset-2";

export const buttonSizes = {
  sm: "h-10 px-6 text-[12px]",
  md: "h-11 px-7 text-[13px]",
};

export const buttonVariants = {
  primary:
    "bg-[#37C2A2] border-[#37C2A2] text-white " +
    "hover:bg-white hover:text-[#37C2A2] hover:border-[#E6E6E6] " +
    "focus-visible:ring-[#37C2A2]",
  dark:
    "bg-[#303E48] border-[#303E48] text-white " +
    "hover:bg-white hover:text-[#303E48] hover:border-[#E6E6E6] " +
    "focus-visible:ring-[#303E48]",
  ghost:
    "bg-transparent text-white border-white/40 " +
    "hover:bg-white/10 focus-visible:ring-white/70",
  gray:
    "bg-crtib-gray-dark border-crtib-gray-dark text-white " +
    "hover:bg-[#555555] hover:border-[#555555] " +
    "focus-visible:ring-crtib-gray-dark",
};
