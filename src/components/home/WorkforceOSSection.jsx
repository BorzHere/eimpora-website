import React from 'react';
import {
  Activity,
  ArrowUpRight,
  Banknote,
  Globe,
  Laptop,
  Layers,
  Sparkles,
  Target,
  Users,
} from 'lucide-react';

import SectionHeading from '../common/SectionHeading';
import { WORKFORCE_OS_DATA } from '../../data/workforceOSData';

const iconMap = {
  Users,
  Banknote,
  Globe,
  Laptop,
  Layers,
  Target,
  Activity,
  Sparkles,
};

export default function WorkforceOSSection({ data = WORKFORCE_OS_DATA }) {
  const { section, rows } = data;

  return (
    <section className="relative py-24 bg-white text-navy-950 border-y border-slate-200 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
         
          title={section?.title}
          description={section?.description}
          dark={false}
        />

        <div className="mt-16 space-y-20 lg:space-y-24">
          {rows.map((row, index) => {
            const isPermissionsRow = row.id === 'permissions';

            return (
              <div
                key={row.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
              >
                {isPermissionsRow ? (
                  <>
                    <div className="lg:col-span-7 order-2 lg:order-1">
                      <div className="bg-[#EFEAE2] rounded-3xl p-6 sm:p-10 relative overflow-hidden min-h-[480px] flex flex-col justify-center items-center group shadow-inner border border-stone-200/50">
                        <div className="w-full max-w-md space-y-4">
                          <div className="bg-white/95 backdrop-blur-sm text-slate-800 px-4 py-2.5 rounded-2xl rounded-tr-xs text-xs sm:text-sm font-medium shadow-md border border-stone-200/80 max-w-xs ml-auto flex items-center gap-2 transition-transform duration-300 group-hover:-translate-y-0.5">
                            <span>
                              {row.prompt.prefix}{' '}
                              <span className="underline decoration-brand-400 underline-offset-2 font-semibold text-brand-600 bg-brand-100/70 px-1 py-0.5 rounded">
                                {row.prompt.target}
                              </span>{' '}
                              {row.prompt.suffix}
                            </span>
                          </div>

                          <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-6 w-full space-y-4 relative z-10 transition-all duration-300 hover:shadow-2xl">
                            <div className="flex gap-3.5 items-start">
                              <div className="w-6 h-6  text-white flex items-center justify-center flex-shrink-0 mt-0.5 ">
                                <Sparkles className="w-4 h-4 text-brand-600" />
                              </div>
                              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                                {row.aiMessage}
                              </p>
                            </div>

                            <div className="mt-4 pt-4 border-t border-slate-100 space-y-2.5 font-sans">
                              <div className="grid grid-cols-12 text-xs font-semibold text-slate-400 uppercase tracking-wider pb-1 px-1">
                                <div className="col-span-5">Employee</div>
                                <div className="col-span-4">Title</div>
                                <div className="col-span-3 text-right">Base pay</div>
                              </div>

                              {row.table.map((item) => (
                                <div
                                  key={item.employee}
                                  className="grid grid-cols-12 text-xs sm:text-sm items-center py-2 border-b border-slate-100/70 hover:bg-slate-50/80 rounded px-1.5 transition-colors"
                                >
                                  <div className="col-span-5 flex items-center gap-2.5">
                                    <img
                                      src={item.image}
                                      alt={item.employee}
                                      className="w-6 h-6 rounded-full object-cover"
                                    />
                                    <span className="font-medium text-slate-800">{item.employee}</span>
                                  </div>
                                  <div className="col-span-4 text-slate-500 text-xs truncate">{item.title}</div>
                                  <div className="col-span-3 text-right font-semibold text-slate-900">{item.amount}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-5 order-1 lg:order-2 space-y-8">
                      <div className="space-y-4">
                        <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                          {row.title}
                        </h3>
                        <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans font-normal">
                          {row.description}
                        </p>
                      </div>

                      <div className="bg-[#F5F2EB]/40 p-7 sm:p-8 rounded-2xl border border-stone-200/70 shadow-xs hover:shadow-md transition-all duration-300 max-w-md">
                        <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-900 font-sans">
                          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                            <path d="M4 16C4 10.4772 8.47715 6 14 6C16.5 6 18.5 7 20 8.5" stroke="url(#clay-grad-1)" strokeWidth="3.5" strokeLinecap="round" />
                            <path d="M7 16C7 12.134 10.134 9 14 9C15.8 9 17.2 9.7 18.5 10.8" stroke="url(#clay-grad-2)" strokeWidth="3.5" strokeLinecap="round" />
                            <defs>
                              <linearGradient id="clay-grad-1" x1="4" y1="6" x2="20" y2="16" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#38BDF8" />
                                <stop offset="0.5" stopColor="#F59E0B" />
                                <stop offset="1" stopColor="#EF4444" />
                              </linearGradient>
                              <linearGradient id="clay-grad-2" x1="7" y1="9" x2="18.5" y2="16" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#60A5FA" />
                                <stop offset="1" stopColor="#F97316" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <span>{row.caseStudy.name}</span>
                        </div>

                        <div className="text-4xl sm:text-5xl font-extrabold text-slate-900 my-4 tracking-tight font-display">
                          {row.caseStudy.metric}
                        </div>

                        <p className="text-sm text-slate-600 font-medium leading-snug mb-6">
                          {row.caseStudy.outcome}
                        </p>

                        <a
                          href={row.caseStudy.href}
                          className="inline-flex items-center gap-1 font-semibold text-slate-900 border-b-2 border-amber-600 pb-0.5 hover:border-brand-600 hover:text-brand-600 transition-colors text-sm group"
                        >
                          {row.caseStudy.cta}
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="lg:col-span-5 space-y-8">
                      <div className="space-y-4">
                        <h3 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-[1.15]">
                          {row.title}
                        </h3>
                        <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans font-normal">
                          {row.description}{' '}
                          <span className="hover:underline decoration-slate-900 underline-offset-4 font-semibold  cursor-pointer text-brand-500 transition-colors">
                            {row.highlight}
                          </span>{' '}
                          no other system can touch.
                        </p>
                      </div>

                      <div className="bg-[#F5F2EB]/40 p-7 sm:p-8 rounded-2xl border border-stone-200/70 shadow-xs hover:shadow-md transition-all duration-300 max-w-md">
                        <div className="flex items-center gap-1.5 font-black text-xl tracking-[0.2em] text-slate-900 uppercase font-sans">
                          {row.caseStudy.brand.split('').map((char, idx) => (
                            <React.Fragment key={char + idx}>
                              {char === 'R' ? (
                                <span className="text-slate-900">R</span>
                              ) : null}
                              {char !== 'R' ? char : null}
                            </React.Fragment>
                          ))}
                        </div>

                        <div className="text-4xl sm:text-5xl font-extrabold text-slate-900 my-4 tracking-tight font-display">
                          {row.caseStudy.metric}
                        </div>

                        <p className="text-sm text-slate-600 font-medium leading-snug mb-6">
                          {row.caseStudy.outcome}
                        </p>

                        <a
                          href={row.caseStudy.href}
                          className="inline-flex items-center gap-1 font-semibold text-slate-900 border-b-2 border-amber-600 pb-0.5 hover:border-brand-600 hover:text-brand-600 transition-colors text-sm group"
                        >
                          {row.caseStudy.cta}
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      </div>
                    </div>

                    <div className="lg:col-span-7">
                      <div className="bg-[#EFEAE2] rounded-3xl p-6 sm:p-10 relative overflow-hidden min-h-[480px] flex items-center justify-center group shadow-inner border border-stone-200/50">
                        <div className="absolute -right-4 sm:right-4 top-8 bottom-8 w-72 bg-white/70 backdrop-blur-xs rounded-2xl border border-stone-200/80 shadow-md p-6 transform translate-x-14 translate-y-3 scale-95 opacity-40 group-hover:translate-x-16 transition-transform duration-500 pointer-events-none select-none">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-slate-200" />
                            <div className="space-y-1">
                              <div className="w-24 h-3 bg-slate-300 rounded" />
                              <div className="w-16 h-2 bg-slate-200 rounded" />
                            </div>
                          </div>
                          <div className="space-y-3 text-xs text-slate-400 font-mono">
                            <div className="flex justify-between"><span>Employee ID</span><span>{row.peekCard.employeeId}</span></div>
                            <div className="flex justify-between"><span>Base salary</span><span>{row.peekCard.baseSalary}</span></div>
                            <div className="flex justify-between"><span>Home address</span><span>{row.peekCard.homeAddress}</span></div>
                            <div className="flex justify-between"><span>Device</span><span>{row.peekCard.device}</span></div>
                            <div className="flex justify-between"><span>Apps</span><span className="px-1.5 py-0.5 rounded bg-sky-100 text-sky-700">{row.peekCard.apps}</span></div>
                            <div className="flex justify-between"><span>Corp card spend</span><span>{row.peekCard.corpCardSpend}</span></div>
                          </div>
                        </div>

                        <div className="relative z-10 bg-white rounded-2xl shadow-xl border border-slate-200/80 p-6 sm:p-7 w-full max-w-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 font-sans">
                          <div className="flex items-center gap-4 border-b border-slate-100 pb-5">
                            <img
                              src={row.profile.image}
                              alt={row.profile.name}
                              className="w-14 h-14 rounded-full object-cover border-2 border-slate-100 shadow-sm"
                            />
                            <div>
                              <h4 className="text-lg font-bold text-slate-900 tracking-tight leading-tight">
                                {row.profile.name}
                              </h4>
                              <p className="text-xs text-slate-500 font-medium mt-0.5">
                                {row.profile.role}
                              </p>
                            </div>
                          </div>

                          <div className="mt-5 space-y-3.5 text-xs sm:text-sm divide-y divide-slate-100 font-sans">
                            {row.profile.fields.map((field) => {
                              const Icon = iconMap[field.icon] || Activity;

                              return (
                                <div key={field.label} className="flex justify-between items-center pt-3 first:pt-1">
                                  <span className="text-slate-500 flex items-center gap-2">
                                    <Icon className="w-3.5 h-3.5 text-slate-400" /> {field.label}
                                  </span>
                                  {field.badge ? (
                                    <span className="px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-700 text-xs font-bold shadow-2xs">
                                      {field.value}
                                    </span>
                                  ) : (
                                    <span className="font-semibold text-slate-900">
                                      {field.value}
                                    </span>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
