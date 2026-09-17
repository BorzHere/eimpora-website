import React from 'react';

export default function WorkforceChart({ timeframe = 'Monthly' }) {
  const points = timeframe === 'Monthly' 
    ? [20, 35, 45, 40, 60, 75, 85]
    : timeframe === 'Quarterly'
    ? [15, 30, 50, 65, 80, 90, 95]
    : [10, 25, 40, 55, 70, 85, 100];

  return (
    <div className="relative h-44 w-full flex items-end">
      <svg className="w-full h-full overflow-visible" viewBox="0 0 400 120" preserveAspectRatio="none">
        <defs>
          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        <line x1="0" y1="20" x2="400" y2="20" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
        <line x1="0" y1="60" x2="400" y2="60" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
        <line x1="0" y1="100" x2="400" y2="100" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />

        {/* Filled Path */}
        <path
          d={`M 0 120 L 0 ${120 - points[0]} Q 60 ${120 - points[1]}, 120 ${120 - points[2]} T 240 ${120 - points[4]} T 400 ${120 - points[6]} L 400 120 Z`}
          fill="url(#chartGradient)"
        />

        {/* Stroke Line */}
        <path
          d={`M 0 ${120 - points[0]} Q 60 ${120 - points[1]}, 120 ${120 - points[2]} T 240 ${120 - points[4]} T 400 ${120 - points[6]}`}
          fill="none"
          stroke="#22d3ee"
          strokeWidth="3"
        />

        {/* Animated Active Data Dots */}
        <circle cx="240" cy={120 - points[4]} r="4" fill="#00f2fe" className="animate-ping" />
        <circle cx="240" cy={120 - points[4]} r="4" fill="#00f2fe" />
      </svg>

      <div className="absolute inset-x-0 bottom-0 flex justify-between text-[10px] text-slate-400 pt-2 border-t border-white/5">
        <span>Jan</span>
        <span>Feb</span>
        <span>Mar</span>
        <span>Apr</span>
        <span>May</span>
        <span>Jun</span>
        <span>Jul</span>
      </div>
    </div>
  );
}
