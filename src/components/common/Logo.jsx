import React from 'react';

/**
 * Eimpora Brand Logo Mark.
 * Sleek 3D isometric hexagon 'E' identity mark matching brand image.
 */
export function LogoMark({ className = "h-8 w-8" }) {
  return (
    <svg
      viewBox="0 0 93 93"
      fill="none"
      className={className}
      aria-hidden="true"
      role="img"
      aria-label="Eimpora logo"
    >
      <defs>
        {/* Top & Left Spine Facet - Bright Cyan */}
        <linearGradient id="eimporaTopLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00F5FF" />
          <stop offset="60%" stopColor="#00D2FF" />
          <stop offset="100%" stopColor="#00A5E0" />
        </linearGradient>

        {/* Top Right Facet */}
        <linearGradient id="eimporaTopRight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00E5FF" />
          <stop offset="100%" stopColor="#008EA8" />
        </linearGradient>

        {/* Middle Bar Top Facet */}
        <linearGradient id="eimporaMidTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00F0FF" />
          <stop offset="100%" stopColor="#00A8E8" />
        </linearGradient>

        {/* Middle Bar Inner Shadow */}
        <linearGradient id="eimporaMidShadow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#008EA8" />
          <stop offset="100%" stopColor="#004D63" />
        </linearGradient>

        {/* Bottom Arm Outer Facet */}
        <linearGradient id="eimporaBottomOuter" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D2FF" />
          <stop offset="50%" stopColor="#0096C7" />
          <stop offset="100%" stopColor="#004356" />
        </linearGradient>

        {/* Bottom Arm Inner Shadow Facet */}
        <linearGradient id="eimporaBottomInner" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0077B6" />
          <stop offset="100%" stopColor="#002D3A" />
        </linearGradient>
      </defs>

      {/* 1. Left Spine & Top-Left Facet */}
      <path
        d="M10 28L50 5V25L26 39L10 72V28Z"
        fill="url(#eimporaTopLeft)"
      />

      {/* 2. Top-Right Arm Facet */}
      <path
        d="M50 5L90 28L73 38L50 25V5Z"
        fill="url(#eimporaTopRight)"
      />

      {/* 3. Middle Arm Top Face */}
      <path
        d="M26 47L50 33L73 47L50 40Z"
        fill="url(#eimporaMidTop)"
      />

      {/* 4. Middle Arm Under/Shadow Face */}
      <path
        d="M26 47L50 40L73 47L50 61Z"
        fill="url(#eimporaMidShadow)"
      />

      {/* 5. Bottom Arm Inner Shadow Facet */}
      <path
        d="M26 61L50 75L73 61L50 67Z"
        fill="url(#eimporaBottomInner)"
      />

      {/* 6. Bottom Arm Outer Facet */}
      <path
        d="M10 72L26 61L50 75L73 61L90 72L50 95L10 72Z"
        fill="url(#eimporaBottomOuter)"
      />
    </svg>
  );
}

export function Logo({ className = "", variant = "light", showWordmark = true, size = "md" }) {
  const textPrimary = variant === "dark" ? "text-navy-950" : "text-white";
  const textSecondary = variant === "dark" ? "text-slate-500" : "text-orange-400/80";

  const isLg = size === "lg";
  const isXl = size === "xl";

  const iconClass = isXl ? "h-14 w-14 shrink-0" : isLg ? "h-11 w-11 shrink-0" : "h-9 w-9 shrink-0";
  const titleClass = isXl ? "text-[28px]" : isLg ? "text-[24px]" : "text-[19px]";
  const subClass = isXl ? "text-[13px]" : isLg ? "text-[11px]" : "text-[10px]";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark className={iconClass} />
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className="flex items-center gap-0.5">
            <span className={`font-display font-medium tracking-tight ${titleClass} ${textPrimary}`}>
              EIMPORA
            </span>
          </span>
          <span className={`font-semibold tracking-[0.2em] uppercase mt-1 ${subClass} ${textSecondary}`}>
            Enterprise AI System
          </span>
        </span>
      )}
    </span>
  );
}

export default Logo;
