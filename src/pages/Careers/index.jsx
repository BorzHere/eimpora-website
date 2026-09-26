import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase, MapPin, Clock, Heart, Zap, Users, Globe, Code, Palette,
  TrendingUp, HeadphonesIcon, Shield, ArrowRight, CheckCircle2, Sparkles,
  Upload, X, Send, Award
} from 'lucide-react';
import SectionHeading from '../../components/common/SectionHeading';
import GlassCard from '../../components/common/GlassCard';
import MetricCard from '../../components/common/MetricCard';
import CTASection from '../../components/common/CTASection';
import ToastModal from '../../components/common/ToastModal';
import Stars from '../../components/home/Stars';

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
    quote: "At Eimpora, we're building more than software—we're shaping the future of autonomous workforce operations.",
  },
  {
    name: "Michael Rodriguez",
    role: "CTO & Co-Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop",
    quote: "Our engineering culture values innovation, real-time distributed architecture, and continuous learning.",
  },
  {
    name: "Aisha Patel",
    role: "Chief Product Officer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop",
    quote: "We empower our team to solve complex multi-entity operational challenges for global organizations.",
  },
  {
    name: "David Kim",
    role: "VP of Engineering",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop",
    quote: "We build resilient, audit-compliant systems that scale gracefully with security at the core.",
  },
];

const openRoles = [
  {
    id: 1,
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Remote (US/Global)",
    type: "Full-time",
    icon: Code,
    description: "Build the next generation of workforce management tools using React, Node.js, and PostgreSQL multi-tenant databases.",
    requirements: ["5+ years full-stack development", "React & TypeScript expertise", "High-scale API design experience"],
  },
  {
    id: 2,
    title: "Lead Product Designer",
    department: "Design",
    location: "Remote (Global)",
    type: "Full-time",
    icon: Palette,
    description: "Design intuitive, accessible interfaces for complex HR, payroll, and scheduling workflows used by enterprise teams daily.",
    requirements: ["4+ years enterprise SaaS product design", "Figma design system expertise", "Complex data visualization"],
  },
  {
    id: 3,
    title: "Enterprise Customer Success Manager",
    department: "Customer Success",
    location: "New York, NY or Remote",
    type: "Full-time",
    icon: HeadphonesIcon,
    description: "Help global enterprise customers achieve their workforce transformation goals and maximize platform value.",
    requirements: ["3+ years B2B SaaS customer success", "Enterprise account management", "HR tech domain knowledge"],
  },
  {
    id: 4,
    title: "Cloud Infrastructure & DevOps Engineer",
    department: "Engineering",
    location: "Remote (US/Europe)",
    type: "Full-time",
    icon: Shield,
    description: "Build and maintain high-availability Kubernetes infrastructure, automated CI/CD pipelines, and multi-region telemetry systems.",
    requirements: ["AWS/GCP Cloud Native experience", "Kubernetes & Terraform", "SOC2 compliance & security hardening"],
  },
  {
    id: 5,
    title: "Sales Development Representative",
    department: "Sales",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    icon: TrendingUp,
    description: "Engage executive HR and Finance leaders to present Eimpora's AI workforce operating platform.",
    requirements: ["1+ years SDR/BDR experience", "Enterprise SaaS background", "Goal-oriented, consultative mindset"],
  },
  {
    id: 6,
    title: "Security & Compliance Engineer",
    department: "Security",
    location: "Remote (US)",
    type: "Full-time",
    icon: Shield,
    description: "Ensure platform security, maintain SOC 2 Type II and ISO 27001 certifications, and conduct proactive threat modeling.",
    requirements: ["SOC 2 / ISO 27001 audit experience", "Application security & pen testing", "Incident response lead"],
  },
];

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health, dental, and vision insurance for you and your dependents with 100% premium coverage.",
  },
  {
    icon: Globe,
    title: "Remote-First Work",
    description: "Work from anywhere with flexible operating hours, home office setup stipends, and async communication culture.",
  },
  {
    icon: Zap,
    title: "Growth & Learning",
    description: "$2,500 annual learning stipend for courses, conferences, certifications, and technical literature.",
  },
  {
    icon: Clock,
    title: "Unlimited PTO & Leave",
    description: "Flexible paid time off policy with mandatory minimums, plus parental leave and mental wellness days.",
  },
  {
    icon: Users,
    title: "Global Team Retreats",
    description: "Bi-annual fully funded international company offsites and regional team-building gatherings.",
  },
  {
    icon: TrendingUp,
    title: "Competitive Equity & Bonus",
    description: "Meaningful early-stage equity grants, competitive salary benchmarks, and performance incentives.",
  },
];

export default function Careers() {
  const [selectedRoleId, setSelectedRoleId] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedDept, setSelectedDept] = useState("All");
  const [toastMessage, setToastMessage] = useState(null);

  const departments = ["All", "Engineering", "Design", "Customer Success", "Sales", "Security"];

  const filteredRoles = selectedDept === "All"
    ? openRoles
    : openRoles.filter(r => r.department === selectedDept);

  const selectedRole = openRoles.find(r => r.id === selectedRoleId);

  const handleApplyClick = (roleId) => {
    setSelectedRoleId(roleId);
    setShowApplicationForm(true);
    setTimeout(() => {
      document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleSubmitApplication = (e) => {
    e.preventDefault();
    setToastMessage(`Application submitted successfully for ${selectedRole?.title || 'Open Role'}! Our recruiting team will reach out within 48 hours.`);
    setShowApplicationForm(false);
  };

  return (
    <div className="space-y-0">
      {/* Toast Notification */}
      {toastMessage && (
        <ToastModal
          title="Application Received"
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      )}

      {/* SECTION 1: Careers Hero (DARK SECTION) */}
      <section className="relative pt-36 pb-24 bg-navy-950 text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-radial-glow opacity-80" aria-hidden="true" />
        
        <Stars />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-400">
              <Sparkles className="w-3.5 h-3.5 text-orange-400" /> Careers at Eimpora
            </span>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Build the Future of <span className="gradient-text-cyan">Workforce Operations</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-light">
              Join a high-performing team of engineers, designers, and operators building autonomous tools that empower multi-entity enterprise organizations worldwide.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="#open-roles"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-navy-950 bg-gradient-to-r from-brand-400 to-brand-300 hover:from-brand-300 hover:to-brand-glow transition-all duration-300 shadow-cyan-glow uppercase tracking-wider hover:scale-[1.02]"
              >
                View Open Positions <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/platform"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-medium text-orange-400 hover:text-orange-500 border border-white/20 bg-orange-500/5 hover:border-orange-500/40 transition-all"
              >
                Explore Platform Architecture
              </Link>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/10">
            <div className="p-4 rounded-xl border border-white/10 bg-navy-900/30 backdrop-blur-md">
              <div className="text-2xl sm:text-3xl font-bold font-display text-brand-400">50+</div>
              <div className="text-xs text-slate-400 font-medium mt-1">Global Team Members</div>
            </div>
            <div className="p-4 rounded-xl border border-white/10 bg-navy-900/30 backdrop-blur-md">
              <div className="text-2xl sm:text-3xl font-bold font-display text-emerald-400">100%</div>
              <div className="text-xs text-slate-400 font-medium mt-1">Remote Work Culture</div>
            </div>
            <div className="p-4 rounded-xl border border-white/10 bg-navy-900/30 backdrop-blur-md">
              <div className="text-2xl sm:text-3xl font-bold font-display text-brand-400">20+</div>
              <div className="text-xs text-slate-400 font-medium mt-1">Countries Represented</div>
            </div>
            <div className="p-4 rounded-xl border border-white/10 bg-navy-900/30 backdrop-blur-md">
              <div className="text-2xl sm:text-3xl font-bold font-display text-brand-500">Flexible</div>
              <div className="text-xs text-slate-400 font-medium mt-1">Unlimited PTO & Stipends</div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: Why Work at Eimpora (LIGHT SECTION) */}
      <section className="relative py-24 bg-slate-50 text-navy-950 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Culture & Benefits"
            title="Why Build Your Career at Eimpora?"
            description="We prioritize autonomy, engineering excellence, work-life harmony, and meaningful long-term equity for every team member."
            dark={false}
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-slate-200 bg-white space-y-4 transition-all duration-300 hover:border-brand-500/40 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="h-12 w-12 rounded-xl bg-brand-50 text-brand-700 border border-brand-200 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-navy-950">{benefit.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Hear From Our Team (DARK SECTION) */}
      <section className="relative py-24 bg-navy-950 text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Team Voices"
            title="Hear from Our Leadership & Engineers"
            description="Get an insider look at how we collaborate across timezone boundaries."
            dark={true}
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-white/10 bg-navy-900/80 backdrop-blur-xl space-y-6 transition-all duration-300 hover:border-brand-500/40 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-16 w-16 rounded-full object-cover border-2 border-orange-400/50 shadow-md shadow-orange-500/10"
                  />
                  <div>
                    <h3 className="font-display font-bold text-lg text-white">{member.name}</h3>
                    <p className="text-xs font-semibold text-brand-300">{member.role}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed italic border-l-2 border-brand-400 pl-4">
                  "{member.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Open Positions (LIGHT SECTION) */}
      <section id="open-roles" className="relative pt-24 pb-16 bg-white text-navy-950 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <SectionHeading
            eyebrow="Open Roles"
            title="Join Our Growing Enterprise Team"
            description="Filter by department and find your next high-impact role."
            dark={false}
          />

          {/* Department Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-6 py-2 rounded-lg text-xs font-bold border-b-2 transition-all duration-200 ${selectedDept === dept
                  ? 'bg-brand-500 text-white shadow-md border-brand-600'
                  : 'bg-slate-200 text-slate-600 hover:bg-slate-200/80'
                  }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Job Listings Grid */}
          <div className="space-y-4">
            {filteredRoles.map((role) => (
              <div
                key={role.id}
                className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white transition-all duration-300 hover:border-brand-500/40 hover:shadow-lg space-y-4"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-brand-50 text-brand-700 border border-brand-200 flex items-center justify-center shrink-0">
                      <role.icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-display font-bold text-xl text-navy-950">{role.title}</h3>
                        <span className="px-2.5 py-1 rounded-md bg-brand-50 text-brand-700 border border-brand-200 text-[11px] font-bold uppercase tracking-wider">
                          {role.department}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-500">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-orange-500" />
                          {role.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-orange-500" />
                          {role.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleApplyClick(role.id)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs font-bold text-navy-950 bg-gradient-to-r from-brand-400 to-brand-300 hover:from-brand-300 hover:to-brand-glow transition-all shadow-cyan-glow uppercase tracking-wider shrink-0 hover:scale-[1.02]"
                  >
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">{role.description}</p>

                <div className="pt-2 flex flex-wrap gap-2">
                  {role.requirements.map((req, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-slate-200/70 text-slate-700 text-xs font-medium"
                    >
                      <span className="text-emerald-500 font-bold">✓</span> {req}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Application Form Drawer (DARK SECTION) */}
      {showApplicationForm && (
        <section id="application-form" className="relative pt-16 pb-24 bg-white text-white border-b border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-brand-500/30 bg-navy-900 p-8 sm:p-12 pt-0 sm:pt-6 shadow-2xl backdrop-blur-2xl space-y-8 relative">
              <div className="absolute inset-0 bg-radial-glow opacity-40" aria-hidden="true" />
              
              <div className="flex items-center justify-between border-b border-white/10 pb-6 relative z-10">
                <div className='max-w-md'>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-400">Direct Application</span>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold  text-white mt-1">
                    Apply for {selectedRole?.title || "Enterprise Role"}
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">{selectedRole?.department} <span className='text-orange-400'>•</span> {selectedRole?.location}</p>
                </div>
                <button
                  onClick={() => setShowApplicationForm(false)}
                  className="p-2 rounded-xl bg-transparent hover:bg-white/5 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmitApplication} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">First Name <span className='text-orange-400'>*</span></label>
                    <input
                      type="text"
                      required
                      placeholder="Jane"
                      className="w-full border-b border-white/15 bg-transparent py-3 text-sm text-white placeholder-slate-500 hover:border-brand-400 focus:border-brand-400 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">Last Name <span className='text-orange-400'>*</span></label>
                    <input
                      type="text"
                      required
                      placeholder="Doe"
                      className="w-full border-b border-white/15 bg-transparent py-3 text-sm text-white placeholder-slate-500 hover:border-brand-400 focus:border-brand-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">Email Address <span className='text-orange-400'>*</span></label>
                    <input
                      type="email"
                      required
                      placeholder="jane.doe@company.com"
                      className="w-full border-b border-white/15 bg-transparent py-3 text-sm text-white placeholder-slate-500 hover:border-brand-400 focus:border-brand-400 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="w-full border-b border-white/15 bg-transparent py-3 text-sm text-white placeholder-slate-500 hover:border-brand-400 focus:border-brand-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">LinkedIn Profile URL</label>
                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/janedoe"
                    className="w-full border-b border-white/15 bg-transparent py-3 text-sm text-white placeholder-slate-500 hover:border-brand-400 focus:border-brand-400 focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">Resume / CV (PDF or Word) <span className='text-orange-400'>*</span></label>
                  <div className="p-6 rounded-xl border border-dashed border-white/20 bg-transparent text-center hover:border-brand-400/50 transition-colors">
                    <Upload className="w-8 h-8 text-brand-400 mx-auto mb-2" />
                    <p className="text-xs text-slate-300 font-semibold mb-1">Click to upload your resume or drag file here</p>
                    <p className="text-[11px] text-slate-500">Supported formats: PDF, DOCX (Max 10MB)</p>
                    <input
                      type="file"
                      required
                      accept=".pdf,.doc,.docx"
                      className="mt-3 block mx-auto text-xs text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-brand-500/20 file:text-brand-300 hover:file:bg-brand-500/30"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs pt-4 font-bold uppercase tracking-wider text-slate-300">Cover Note / Why Eimpora?</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your technical background and why you want to build at Eimpora..."
                    className="w-full border-b border-white/15 bg-transparent py-3 text-sm text-white placeholder-slate-500 hover:border-brand-400 focus:border-brand-400 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-xs font-bold text-navy-950 bg-gradient-to-r from-brand-400 to-brand-300 hover:from-brand-300 hover:to-brand-glow transition-all shadow-cyan-glow uppercase tracking-wider"
                  >
                    <Send className="w-4 h-4" /> Submit Application
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowApplicationForm(false)}
                    className="px-8 py-4 rounded-xl text-xs font-bold text-slate-300 border border-white/15 bg-white/5 hover:bg-white/10 transition-colors uppercase tracking-wider"
                  >
                    Cancel
                  </button>
                </div>
              </form>

            </div>
          </div>
        </section>
      )}

      {/* CTA Footer */}
      <CTASection />
    </div>
  );
}
