import React from 'react';
import SectionHeading from '../common/SectionHeading';

// SVGs / Logos for Marquee Pills
const ZoomIcon = () => (
  <div className="w-8 h-8 rounded-xl bg-blue-500 flex items-center justify-center text-white shrink-0 shadow-xs">
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M4.5 7.5A2.5 2.5 0 0 1 7 5h7a2.5 2.5 0 0 1 2.5 2.5v4.618l3.18-2.12A1 1 0 0 1 21 10.832v6.336a1 1 0 0 1-1.558.834L16.26 15.88V16.5a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 16.5v-9z" />
    </svg>
  </div>
);

const SalesforceIcon = () => (
  <div className="w-8 h-8 rounded-xl bg-sky-400 flex items-center justify-center text-white shrink-0 shadow-xs">
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
    </svg>
  </div>
);

const SlackIcon = () => (
  <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-xs p-1.5">
    <svg className="w-full h-full" viewBox="0 0 127 127">
      <path d="M27.3 77.8c0 7.3-5.9 13.2-13.2 13.2C6.8 91 1 85.1 1 77.8c0-7.3 5.9-13.2 13.2-13.2h13.1v13.2zm6.7 0c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2v33c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2v-33z" fill="#E01E5A" />
      <path d="M49.2 27.3c-7.3 0-13.2-5.9-13.2-13.2C36 6.8 41.9 1 49.2 1c7.3 0 13.2 5.9 13.2 13.2v13.1H49.2zm0 6.7c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2h-33C8.9 60.4 3 54.5 3 47.2c0-7.3 5.9-13.2 13.2-13.2h33z" fill="#36C5F0" />
      <path d="M99.7 49.2c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H99.7V49.2zm-6.7 0c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2v-33c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2v33z" fill="#2EB67D" />
      <path d="M77.8 99.7c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V99.7h13.2zm0-6.7c-7.3 0-13.2-5.9-13.2-13.2 0-7.3 5.9-13.2 13.2-13.2h33c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2h-33z" fill="#ECB22E" />
    </svg>
  </div>
);

const VanguardIcon = () => (
  <div className="w-8 h-8 rounded-xl bg-red-800 flex items-center justify-center text-white font-extrabold text-sm shrink-0 shadow-xs">
    V
  </div>
);

const OktaIcon = () => (
  <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-xs">
    <div className="w-4 h-4 rounded-full border-2 border-white" />
  </div>
);

const AtlassianIcon = () => (
  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-700 to-blue-500 flex items-center justify-center text-white shrink-0 shadow-xs">
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M11.53 2c-.44 0-.82.27-.96.68L6.09 15.54a.996.996 0 0 0 .94 1.34h4.48c.39 0 .74-.23.89-.59l3.1-7.46L11.53 2z" />
    </svg>
  </div>
);

const MacBookPill = () => (
  <div className="w-10 h-7 rounded-lg bg-slate-900 border border-slate-700 p-0.5 flex items-center justify-center shrink-0">
    <img
      src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=100&auto=format&fit=crop&q=80"
      alt="MacBook"
      className="w-full h-full object-cover rounded"
    />
  </div>
);

const IPhonePill = () => (
  <div className="w-6 h-8 rounded-lg bg-slate-900 border border-slate-700 p-0.5 flex items-center justify-center shrink-0">
    <img
      src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=100&auto=format&fit=crop&q=80"
      alt="iPhone"
      className="w-full h-full object-cover rounded"
    />
  </div>
);

const MonitorPill = () => (
  <div className="w-10 h-7 rounded-lg bg-slate-900 border border-slate-700 p-0.5 flex items-center justify-center shrink-0">
    <img
      src="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=100&auto=format&fit=crop&q=80"
      alt="Monitor"
      className="w-full h-full object-cover rounded"
    />
  </div>
);

const AvatarPill = ({ src, alt }) => (
  <div className="w-8 h-8 rounded-full border-2 border-white shadow-xs overflow-hidden shrink-0">
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  </div>
);

// Marquee Row Data Definitions matching uploaded design
const row1Items = [
  { id: 'r1-1', type: 'text', label: 'Department' },
  { id: 'r1-2', type: 'text', label: 'Location' },
  { id: 'r1-3', type: 'icon', icon: ZoomIcon },
  { id: 'r1-4', type: 'text', label: 'Compliance certifications' },
  { id: 'r1-5', type: 'device', component: MacBookPill },
  { id: 'r1-6', type: 'text', label: 'Employment status' },
  { id: 'r1-7', type: 'avatar', src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80', alt: 'Zoe' },
  { id: 'r1-8', type: 'text', label: 'Background check' },
  { id: 'r1-9', type: 'icon', icon: OktaIcon },
  { id: 'r1-10', type: 'text', label: 'Department' },
  { id: 'r1-11', type: 'text', label: 'Salary' },
  { id: 'r1-12', type: 'text', label: 'Performance rating' },
];

const row2Items = [
  { id: 'r2-1', type: 'text', label: 'Dental insurance' },
  { id: 'r2-2', type: 'text', label: 'Home address' },
  { id: 'r2-3', type: 'avatar', src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80', alt: 'Yui' },
  { id: 'r2-4', type: 'text', label: 'Job codes' },
  { id: 'r2-5', type: 'text', label: 'Manager' },
  { id: 'r2-6', type: 'icon', icon: SalesforceIcon },
  { id: 'r2-7', type: 'text', label: 'Device Order' },
  { id: 'r2-8', type: 'text', label: 'Expenses' },
  { id: 'r2-9', type: 'icon', icon: SlackIcon },
  { id: 'r2-10', type: 'text', label: 'Health insurance' },
  { id: 'r2-11', type: 'device', component: MonitorPill },
  { id: 'r2-12', type: 'text', label: 'Time off balance' },
];

const row3Items = [
  { id: 'r3-1', type: 'text', label: 'Business Partner' },
  { id: 'r3-2', type: 'icon', icon: VanguardIcon },
  { id: 'r3-3', type: 'text', label: 'Direct reports' },
  { id: 'r3-4', type: 'text', label: 'Name' },
  { id: 'r3-5', type: 'device', component: IPhonePill },
  { id: 'r3-6', type: 'avatar', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80', alt: 'Nathan' },
  { id: 'r3-7', type: 'text', label: 'Social Security Number' },
  { id: 'r3-8', type: 'text', label: 'Equity grant' },
  { id: 'r3-9', type: 'text', label: 'Level' },
  { id: 'r3-10', type: 'icon', icon: AtlassianIcon },
  { id: 'r3-11', type: 'text', label: 'Direct reports' },
  { id: 'r3-12', type: 'device', component: MacBookPill },
];

function MarqueePill({ item }) {
  return (
    <div className="bg-white text-slate-900 h-full rounded-md border border-slate-200 font-sans font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2 flex items-center justify-center gap-2.5 whitespace-nowrap transition-all duration-300 hover:scale-105  hover:z-20 cursor-pointer select-none shrink-0">
      {item.type === 'text' && <span>{item.label}</span>}

      {item.type === 'icon' && (
        <div className="flex items-center gap-2">
          <item.icon />
          {item.label && <span>{item.label}</span>}
        </div>
      )}

      {item.type === 'avatar' && (
        <div className="flex items-center gap-2">
          <AvatarPill src={item.src} alt={item.alt} />
          {item.label && <span>{item.label}</span>}
        </div>
      )}

      {item.type === 'device' && (
        <div className="flex items-center gap-2">
          <item.component />
          {item.label && <span>{item.label}</span>}
        </div>
      )}
    </div>
  );
}

export default function UnifiedDataMarquee({
  eyebrow = "Unified Datapoints",
  title = "Every workforce attribute connected in real time.",
  description = "Eimpora connects roles, credentials, hardware, permissions, and benefits into one continuous graph across your entire enterprise stack."
}) {
  return (
    <section className="relative bg-slate-50 text-white overflow-hidden border-y border-white/10">
      {/* Background Glow Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-300/5  blur-3xl pointer-events-none rounded-full" />


      {/* Marquee Track Container with Left & Right Gradient Fade Masks */}
      <div className="relative w-full space-y-2 py-4">
        {/* Left Side Gradient Fade Mask */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-white to-transparent z-20" />

        {/* Right Side Gradient Fade Mask */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-white to-transparent  z-20" />

        {/* ROW 1: Scrolling Left */}
        <div className="overflow-hidden flex">
          <div className="animate-marquee-left flex items-center gap-4 py-1">
            {[...row1Items, ...row1Items].map((item, idx) => (
              <MarqueePill key={`r1-${idx}`} item={item} />
            ))}
          </div>
        </div>

        {/* ROW 2: Scrolling Right (Opposite Direction) */}
        <div className="overflow-hidden flex">
          <div className="animate-marquee-right flex items-center gap-4 py-1">
            {[...row2Items, ...row2Items].map((item, idx) => (
              <MarqueePill key={`r2-${idx}`} item={item} />
            ))}
          </div>
        </div>

        {/* ROW 3: Scrolling Left */}
        <div className="overflow-hidden flex">
          <div className="animate-marquee-left flex items-center gap-4 py-1">
            {[...row3Items, ...row3Items].map((item, idx) => (
              <MarqueePill key={`r3-${idx}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
