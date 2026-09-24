import React from 'react';

/**
 * Eimpora brand logo matching the supplied orange + navy identity.
 */
export function LogoMark({ className = "h-8 w-8" }) {
  return (
    <svg
      viewBox="0 0 220 220"
      fill="none"
      className={className}
      aria-hidden="true"
      role="img"
      aria-label="Eimpora logo"
    >
      <defs>
        <linearGradient id="ringOrange" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFB347" />
          <stop offset="30%" stopColor="#FF8A1F" />
          <stop offset="70%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#D9480F" />
        </linearGradient>

        <radialGradient id="innerBlue" cx="38%" cy="25%" r="70%">
          <stop offset="0%" stopColor="#173A6F" />
          <stop offset="100%" stopColor="#091F42" />
        </radialGradient>
      </defs>

      <circle cx="110" cy="110" r="105" fill="none" stroke="url(#ringOrange)" strokeWidth="26" strokeLinecap="round" strokeDasharray="455 120" />
      <circle cx="110" cy="110" r="74" fill="url(#innerBlue)" />
      <circle cx="110" cy="110" r="60" fill="none" stroke="#0B1C33" strokeWidth="2" opacity="0.9" />

      <path
        d="M72 58V162M72 58H146M72 110H132M72 162H146"
        stroke="#F6F8FF"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle cx="162" cy="66" r="11" fill="#0B1C33" />
    </svg>
  );
}

export function Logo({ className = "", variant = "light", showWordmark = true, size = "md" }) {
  const textPrimary = variant === "dark" ? "text-[#0a2340]" : "text-[#0a2340]";
  const textSecondary = variant === "dark" ? "text-[#f97316]" : "text-[#f97316]";

  const isLg = size === "lg";
  const isXl = size === "xl";

  const iconClass = isXl ? "h-14 w-14 shrink-0" : isLg ? "h-11 w-11 shrink-0" : "h-9 w-9 shrink-0";
  const titleClass = isXl ? "text-[28px] sm:text-[42px]" : isLg ? "text-[24px] sm:text-[34px]" : "text-[19px] sm:text-[26px]";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark className={iconClass} />
      {showWordmark && (
        <span className="flex items-center leading-none">
          <span className={`font-display font-semibold tracking-[-0.08em] ${titleClass} text-white`}>
            EIMPORA
          </span>
        </span>
      )}
      {showWordmark && (
        <span className={`ml-[-4px] mt-2 hidden text-[10px] font-semibold uppercase  text-[#f97316] sm:inline-block ${isXl ? "text-[12px]" : isLg ? "text-[11px]" : ""}`}>
          AI
        </span>
      )}
    </span>
  );
}

export default Logo;
