import React, { useState } from 'react';
import { MapPin, Clock, Calendar, Check, User, Sparkles, Network, UserCheck, ShieldCheck } from 'lucide-react';

export default function MobileAppPreview() {
  const [clockedIn, setClockedIn] = useState(false);

  return (
    <div className="mx-auto w-full max-w-[340px] sm:max-w-[360px] rounded-[48px] border-[10px] border-slate-900 bg-[#070b14] p-3.5 shadow-2xl text-white relative select-none">
      {/* Top Phone Frame Status Header */}
      <div className="flex items-center justify-between px-5 pt-1.5 pb-2 text-xs font-semibold text-white">
        <span>9:41</span>

        {/* Dynamic Island / Notch */}
        <div className="w-24 h-4 bg-slate-900 rounded-full mx-auto border border-slate-800/60" />

        <div className="flex items-center gap-1.5 text-xs text-slate-300">
          {/* Signal indicator bars */}
          <div className="flex items-end gap-0.5 h-3">
            <span className="w-0.5 h-1 bg-white rounded-xs" />
            <span className="w-0.5 h-1.5 bg-white rounded-xs" />
            <span className="w-0.5 h-2 bg-white rounded-xs" />
            <span className="w-0.5 h-3 bg-white rounded-xs" />
          </div>
          {/* Wifi */}
          <span className="text-[10px] font-bold">5G</span>
          {/* Battery */}
          <div className="w-5 h-2.5 rounded-sm border border-white/80 p-0.5 flex items-center">
            <div className="h-full w-3.5 bg-emerald-400 rounded-xs" />
          </div>
        </div>
      </div>

      {/* Screen Body */}
      <div className="rounded-[36px] bg-[#070b14] space-y-3 p-1 overflow-hidden">
        
        {/* 1. TOP CYAN PROFILE CARD */}
        <div className="rounded-[28px] bg-gradient-to-br from-[#00c3f8] to-[#00a8e8] p-4 text-navy-950 shadow-md">
          {/* Top row: Avatar + Name + Profile Button */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-navy-950 text-white font-extrabold flex items-center justify-center text-sm shadow-inner font-display">
                AW
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-wider text-navy-950/70">
                  GOOD MORNING
                </div>
                <div className="text-lg font-extrabold text-navy-950 font-display leading-snug">
                  Alex Johnson
                </div>
              </div>
            </div>

            {/* Profile icon with online indicator */}
            <div className="w-9 h-9 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-navy-950 relative border border-white/40 cursor-pointer hover:bg-white/40 transition-colors">
              <User className="w-4 h-4 text-navy-950" />
              <span className="absolute top-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#00c3f8]" />
            </div>
          </div>

          {/* Sub-card inside cyan header */}
          <div className="mt-3.5 rounded-2xl bg-navy-950/15 backdrop-blur-sm p-3 flex items-center justify-between border border-navy-950/10">
            <div>
              <div className="text-[9px] font-black uppercase tracking-widest text-navy-950/70">
                TODAY'S SHIFT
              </div>
              <div className="text-xs sm:text-sm font-extrabold text-navy-950 font-display mt-0.5">
                Operations Team
              </div>
            </div>
            <div className="bg-navy-950/20 px-2.5 py-1 rounded-full text-[11px] font-extrabold text-navy-950 border border-navy-950/10">
              09:00 — 17:00
            </div>
          </div>
        </div>

        {/* 2. TWO STATUS CARDS */}
        <div className="grid grid-cols-2 gap-2.5">
          {/* Card 1: Status */}
          <div className="rounded-2xl bg-[#0c1427] border border-slate-800/80 p-3 flex flex-col justify-between space-y-1">
            <span className="text-[11px] font-medium text-slate-400">Status</span>
            <div className="flex items-center gap-1.5 font-bold text-xs text-white">
              <span className={`w-2 h-2 rounded-full ${clockedIn ? 'bg-emerald-400 animate-pulse' : 'bg-emerald-400'}`} />
              <span>{clockedIn ? 'On Active Duty' : 'Ready to work'}</span>
            </div>
          </div>

          {/* Card 2: Hours this week */}
          <div className="rounded-2xl bg-[#0c1427] border border-slate-800/80 p-3 flex flex-col justify-between space-y-1">
            <span className="text-[11px] font-medium text-slate-400">Hours this week</span>
            <div className="font-display text-base font-bold text-white">
              {clockedIn ? '32.6h' : '32.5h'}
            </div>
          </div>
        </div>

        {/* 3. SHIFT CHECK-IN CARD */}
        <div className="rounded-2xl bg-[#0c1427] border border-slate-800/80 p-3.5 space-y-3 shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#00c3f8]">
              SHIFT CHECK-IN
            </span>
            <span className="bg-[#00c3f8]/15 border border-[#00c3f8]/30 text-[#00c3f8] font-bold text-[11px] px-2.5 py-0.5 rounded-full">
              08:58 AM
            </span>
          </div>

          <h3 className="font-display text-base font-extrabold text-white">
            Morning Shift
          </h3>

          {/* Location details */}
          <div className="rounded-xl bg-[#050913] p-2.5 flex items-center gap-3 border border-white/5">
            <div className="w-8 h-8 rounded-lg bg-[#00c3f8]/15 border border-[#00c3f8]/30 flex items-center justify-center text-[#00c3f8] shrink-0">
              <Network className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] text-slate-400 font-medium">Current location</div>
              <div className="text-xs font-bold text-white">Building B Operations</div>
            </div>
          </div>

          {/* Cyan Glow Confirm Clock-in Button */}
          <button
            onClick={() => setClockedIn(!clockedIn)}
            className={`w-full py-2.5 rounded-xl text-xs font-black flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${
              clockedIn
                ? 'bg-emerald-400 text-navy-950 shadow-md'
                : 'bg-gradient-to-r from-[#00c3f8] to-[#0091ea] text-navy-950 hover:from-[#00b0e4] hover:to-[#0081d6] shadow-cyan-glow'
            }`}
          >
            <Check className="w-4 h-4 stroke-[3]" />
            <span>{clockedIn ? 'Clocked In (Active)' : 'Confirm Clock-In'}</span>
          </button>
        </div>

        {/* 4. UPCOMING SCHEDULE SECTION */}
        <div className="space-y-2 pt-1">
          <div className="flex items-center justify-between">
            <h4 className="font-display text-xs font-extrabold text-white">
              Upcoming Schedule
            </h4>
            <button className="text-[11px] font-bold text-[#00c3f8] hover:underline cursor-pointer">
              View all
            </button>
          </div>

          <div className="rounded-2xl bg-[#0c1427] border border-slate-800/80 p-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#050913] px-2.5 py-1.5 text-center border border-white/5 shrink-0">
                <div className="text-xs font-bold text-white font-mono">09:00</div>
                <div className="text-[8px] font-black text-slate-400 uppercase tracking-wider">TODAY</div>
              </div>
              <div>
                <div className="text-xs font-bold text-white">Morning Briefing</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Operations Room</div>
              </div>
            </div>

            <div className="w-5 h-5 rounded-full bg-[#00c3f8]/10 border border-[#00c3f8]/30 flex items-center justify-center text-[#00c3f8]">
              <Check className="w-3 h-3" />
            </div>
          </div>
        </div>

        {/* 5. BOTTOM NAVIGATION BAR */}
        <div className="rounded-2xl bg-[#050913] border border-slate-800/80 px-4 py-2.5 flex items-center justify-between mt-2">
          {/* Home Active */}
          <div className="flex flex-col items-center gap-0.5 text-[#00c3f8] cursor-pointer">
            <UserCheck className="w-4 h-4" />
            <span className="text-[9px] font-extrabold">Home</span>
          </div>

          {/* Shifts */}
          <div className="flex flex-col items-center gap-0.5 text-slate-400 hover:text-white cursor-pointer transition-colors">
            <Calendar className="w-4 h-4" />
            <span className="text-[9px] font-medium">Shifts</span>
          </div>

          {/* Tasks */}
          <div className="flex flex-col items-center gap-0.5 text-slate-400 hover:text-white cursor-pointer transition-colors">
            <Sparkles className="w-4 h-4" />
            <span className="text-[9px] font-medium">Tasks</span>
          </div>

          {/* Profile */}
          <div className="flex flex-col items-center gap-0.5 text-slate-400 hover:text-white cursor-pointer transition-colors">
            <User className="w-4 h-4" />
            <span className="text-[9px] font-medium">Profile</span>
          </div>
        </div>

        {/* iPhone Home Indicator Bar */}
        <div className="w-24 h-1 bg-slate-600/80 rounded-full mx-auto mt-2 mb-1" />
      </div>
    </div>
  );
}
