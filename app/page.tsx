"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  Bookmark,
  Building2,
  CalendarRange,
  ChartColumnIncreasing,
  CheckCheck,
  ClipboardCheck,
  Clock3,
  FileText,
  Heart,
  LayoutTemplate,
  LockKeyhole,
  Mail,
  Menu,
  MessageSquare,
  Network,
  Package,
  Wallet,
  Workflow,
  X,
} from "lucide-react";

type LinkItem = {
  label: string;
  href: string;
};

type IconLinkButton = {
  label: string;
  icon: LucideIcon;
};

type FeatureCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  accentClass: string;
  eyebrow: string;
};

type FloatingTile = {
  label: string;
  icon: LucideIcon;
  className: string;
  accentClass: string;
};

type PricingPlan = {
  name: string;
  subtitle: string;
  price: string;
  priceNote: string;
  helperText: string;
  ctaText: string;
  badge?: string;
  accent: "light" | "primary";
  features: string[];
};

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

type SignalCard = {
  metric: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const navLinks: LinkItem[] = [
  { label: "Platform", href: "#features" },
  { label: "Solutions", href: "#solutions" },
  { label: "Customers", href: "#customers" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#integrations" },
];

const footerLinkGroups = [
  {
    title: "Platform",
    links: [
      { label: "Order Management", href: "#features" },
      { label: "Procurement", href: "#features" },
      { label: "Inventory Control", href: "#features" },
      { label: "OPEX Intelligence", href: "#features" },
      { label: "Integrations", href: "#integrations" },
      { label: "AI Modules (2026)", href: "#features" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Manufacturing", href: "#solutions" },
      { label: "Retail & CPG", href: "#solutions" },
      { label: "Healthcare", href: "#solutions" },
      { label: "Logistics", href: "#solutions" },
      { label: "Energy & Utilities", href: "#solutions" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About ORDENTRA", href: "#" },
      { label: "Customers", href: "#customers" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Contact Sales", href: "#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Analyst Reports", href: "#" },
      { label: "Security & Trust", href: "#security" },
      { label: "Status", href: "#" },
    ],
  },
];

const utilityButtons: IconLinkButton[] = [
  { label: "Security & Trust", icon: Heart },
  { label: "Documentation", icon: Bookmark },
];

const featureCards: FeatureCard[] = [
  {
    title: "Order Management",
    description: "Close the order-to-approval gap.",
    icon: Wallet,
    accentClass: "bg-sky-100 text-sky-700",
    eyebrow: "Order Management",
  },
  {
    title: "Procurement",
    description: "Source-to-pay without spreadsheets.",
    icon: BadgeCheck,
    accentClass: "bg-emerald-100 text-emerald-700",
    eyebrow: "Procurement",
  },
  {
    title: "Inventory Control",
    description: "Live stock across every warehouse.",
    icon: Building2,
    accentClass: "bg-violet-100 text-violet-700",
    eyebrow: "Inventory Control",
  },
  {
    title: "OPEX Intelligence",
    description: "Real-time budget vs actual.",
    icon: ChartColumnIncreasing,
    accentClass: "bg-amber-100 text-amber-700",
    eyebrow: "OPEX Intelligence",
  },
  {
    title: "Integrations",
    description: "40+ native connectors, 2-hour setup.",
    icon: Network,
    accentClass: "bg-indigo-100 text-indigo-700",
    eyebrow: "Integrations",
  },
  {
    title: "AI Modules",
    description: "Predictive reorder, risk, anomaly.",
    icon: ClipboardCheck,
    accentClass: "bg-rose-100 text-rose-700",
    eyebrow: "AI Modules (2026)",
  },
];

const floatingTiles: FloatingTile[] = [
  {
    label: "Orders",
    icon: Wallet,
    className: "left-[2%] top-[20%] rotate-[-8deg]",
    accentClass: "bg-sky-100 text-sky-600",
  },
  {
    label: "Procurement",
    icon: BadgeCheck,
    className: "left-[14%] top-[52%] rotate-[10deg]",
    accentClass: "bg-emerald-100 text-emerald-600",
  },
  {
    label: "Trade Ops",
    icon: Building2,
    className: "left-[26%] top-[18%] rotate-[-12deg]",
    accentClass: "bg-violet-100 text-violet-600",
  },
  {
    label: "Customers",
    icon: Workflow,
    className: "left-[38%] top-[50%] rotate-[8deg]",
    accentClass: "bg-amber-100 text-amber-600",
  },
  {
    label: "Inventory",
    icon: Package,
    className: "left-[50%] top-[18%] rotate-[6deg]",
    accentClass: "bg-cyan-100 text-cyan-700",
  },
  {
    label: "OPEX",
    icon: ClipboardCheck,
    className: "left-[62%] top-[52%] rotate-[-10deg]",
    accentClass: "bg-rose-100 text-rose-600",
  },
  {
    label: "Global 2000",
    icon: ChartColumnIncreasing,
    className: "left-[74%] top-[20%] rotate-[10deg]",
    accentClass: "bg-indigo-100 text-indigo-600",
  },
  {
    label: "AI 2026",
    icon: CalendarRange,
    className: "left-[86%] top-[52%] rotate-[-6deg]",
    accentClass: "bg-orange-100 text-orange-600",
  },
];

const workflowSteps = [
  {
    title: "Your stack, mapped",
    description:
      "We pull your existing ERP, commerce, and data footprint onto one canvas before the call - no questionnaires.",
  },
  {
    title: "Reference deployment",
    description:
      "A live walkthrough of a peer in your vertical running ORDENTRA at scale. Real data, real workflows.",
  },
  {
    title: "Procurement & security Q&A",
    description:
      "Bring your hardest questions. We answer on the call, in writing, with your security team copied.",
  },
];

const integrationCards: FeatureCard[] = [
  {
    title: "Native connectors",
    description: "40+ native connectors, 2-hour setup.",
    icon: Network,
    accentClass: "bg-sky-100 text-sky-700",
    eyebrow: "40+ connectors",
  },
  {
    title: "REST API",
    description: "REST API.",
    icon: Workflow,
    accentClass: "bg-violet-100 text-violet-700",
    eyebrow: "REST API",
  },
  {
    title: "CSV / SFTP exchange",
    description: "CSV / SFTP.",
    icon: CalendarRange,
    accentClass: "bg-amber-100 text-amber-700",
    eyebrow: "CSV / SFTP",
  },
];

const securityCards: FeatureCard[] = [
  {
    title: "AES-256 encryption",
    description:
      "At-rest and in-transit encryption, with customer-managed keys available on Enterprise and Elite plans.",
    icon: LockKeyhole,
    accentClass: "bg-emerald-100 text-emerald-700",
    eyebrow: "Security & Trust",
  },
  {
    title: "Private cloud & on-prem",
    description:
      "VPC-peered, fully isolated tenancy, or on-prem deployment for regulated industries.",
    icon: Building2,
    accentClass: "bg-indigo-100 text-indigo-700",
    eyebrow: "Deployment",
  },
];

const customerSignals: SignalCard[] = [
  {
    metric: "13 days",
    title: "avg PO cycle time",
    description: "13 days avg PO cycle time.",
    icon: ChartColumnIncreasing,
  },
  {
    metric: "Global 2000",
    title: "Built for the",
    description: "Built for the Global 2000.",
    icon: Building2,
  },
  {
    metric: "Q2 2026",
    title: "Founding design partners",
    description:
      "Pre-launch - taking on founding design partners for our Q2 2026 release. AI modules shipping 2026.",
    icon: BadgeCheck,
  },
];

const pricingPlans: PricingPlan[] = [
  {
    name: "Growth",
    subtitle: "For mid-market teams scaling operations rapidly.",
    price: "$1,190/mo",
    priceNote: "per organization - billed annually",
    helperText: "14-day evaluation; no credit card",
    ctaText: "Start Growth Trial",
    accent: "light",
    features: [
      "Up to 50 operational users",
      "Full procurement + inventory suite",
      "Multi-warehouse, multi-currency",
      "Vendor scorecards & SLA tracking",
      "Custom approval workflows",
      "Priority support (12x5)",
      "Standard integrations",
    ],
  },
  {
    name: "Enterprise",
    subtitle: "For Global 2000 operations at scale.",
    price: "Custom",
    priceNote: "Custom contract",
    helperText: "Typical go-live within 60 days",
    ctaText: "Contact Sales",
    badge: "Most deployed",
    accent: "primary",
    features: [
      "Unlimited users, warehouses, regions",
      "AI modules - early access",
      "SSO, SCIM, SAML, audit logs",
      "Dedicated customer success manager",
      "Custom integrations & data residency",
      "Private cloud / on-prem deployment",
    ],
  },
  {
    name: "Elite",
    subtitle: "For global enterprises with complex requirements.",
    price: "Custom",
    priceNote: "By engagement",
    helperText: "White-glove deployment",
    ctaText: "Schedule Consultation",
    accent: "light",
    features: [
      "Everything in Enterprise",
      "Dedicated infrastructure tenancy",
      "Custom SLA (up to 99.999%)",
      "Embedded solutions architect",
      "Roadmap influence & co-development",
      "Financial indemnification",
      "Regulatory & audit support",
    ],
  },
];

const testimonials: Testimonial[] = [
  {
    quote: "BOM-aware procurement, multi-plant stock.",
    name: "Manufacturing",
    role: "Manufacturing",
    company: "BOM-aware procurement, multi-plant stock.",
  },
  {
    quote: "Shelf-to-supplier visibility at SKU depth.",
    name: "Retail & CPG",
    role: "Retail & CPG",
    company: "Shelf-to-supplier visibility at SKU depth.",
  },
  {
    quote: "HIPAA-aligned, lot-tracked, audit-ready.",
    name: "Healthcare",
    role: "Healthcare",
    company: "HIPAA-aligned, lot-tracked, audit-ready.",
  },
  {
    quote: "Fleet-aware procurement tied to route P&L.",
    name: "Logistics",
    role: "Logistics",
    company: "Fleet-aware procurement tied to route P&L.",
  },
  {
    quote: "Energy & Utilities.",
    name: "Energy & Utilities",
    role: "Energy & Utilities",
    company: "Energy & Utilities",
  },
];

function BrandMark() {
  return (
    <svg viewBox="0 0 40 40" className="h-5 w-5" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="38" height="38" rx="4" fill="#0B1F37" />
      <rect x="7" y="7" width="8" height="8" rx="1" fill="#FAFAFA" />
      <rect x="17" y="7" width="8" height="8" rx="1" fill="#FAFAFA" fillOpacity="0.55" />
      <rect x="27" y="7" width="6" height="8" rx="1" fill="#FAFAFA" fillOpacity="0.28" />
      <rect x="7" y="17" width="8" height="8" rx="1" fill="#FAFAFA" fillOpacity="0.55" />
      <rect x="17" y="17" width="8" height="8" rx="1" fill="#FAFAFA" />
      <rect x="27" y="17" width="6" height="8" rx="1" fill="#FAFAFA" fillOpacity="0.55" />
      <rect x="7" y="27" width="8" height="6" rx="1" fill="#FAFAFA" fillOpacity="0.28" />
      <rect x="17" y="27" width="8" height="6" rx="1" fill="#FAFAFA" fillOpacity="0.55" />
      <rect x="27" y="27" width="6" height="6" rx="1" fill="#FAFAFA" />
    </svg>
  );
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-on-scroll ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function TaskProgressCard({
  icon: Icon,
  iconClass,
  label,
  progress,
  widthClass,
}: {
  icon: LucideIcon;
  iconClass: string;
  label: string;
  progress: string;
  widthClass: string;
}) {
  return (
    <div className="rounded-[1rem] bg-white px-3 py-3">
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2">
          <span
            className={`flex h-5 w-5 items-center justify-center rounded-md ${iconClass}`}
          >
            <Icon className="h-3.5 w-3.5" />
          </span>
          <span className="min-w-0 text-[10px] text-slate-700">{label}</span>
        </div>
        <span className="text-[10px] text-slate-400">{progress}</span>
      </div>
      <div className="mt-3 h-1.5 rounded-full bg-slate-100">
        <div className={`h-full rounded-full bg-[#2ec5ff] ${widthClass}`} />
      </div>
    </div>
  );
}

function IntegrationCard() {
  return (
    <div className="rounded-[1.35rem] border border-black/5 bg-[#f6f6f6] p-4 text-left shadow-[0_18px_35px_rgba(0,0,0,0.08)]">
      <p className="text-[12px] font-medium text-slate-700">40+ native connectors</p>
      <div className="mt-4 flex items-center gap-3">
        <div className="rounded-[1rem] bg-white p-4 shadow-[0_10px_25px_rgba(0,0,0,0.05)]">
          <Mail className="h-7 w-7 text-[#ea4335]" />
        </div>
        <div className="rounded-[1rem] bg-white p-4 shadow-[0_10px_25px_rgba(0,0,0,0.05)]">
          <MessageSquare className="h-7 w-7 text-[#4a154b]" />
        </div>
        <div className="rounded-[1rem] bg-white p-4 shadow-[0_10px_25px_rgba(0,0,0,0.05)]">
          <CalendarRange className="h-7 w-7 text-[#2563eb]" />
        </div>
      </div>
    </div>
  );
}

function MobileHeroCards() {
  return (
    <div className="mx-auto mt-10 grid w-full max-w-[320px] gap-4 sm:hidden">
      <div className="rounded-[1.35rem] border border-black/5 bg-[#f6f6f6] p-4 text-left shadow-[0_18px_35px_rgba(0,0,0,0.08)]">
        <p className="text-[12px] font-medium text-slate-700">Recent procurement activity</p>
        <div className="mt-4 space-y-3">
          <TaskProgressCard
            icon={FileText}
            iconClass="bg-[#ff6b4a]/12 text-[#ff6b4a]"
            label="PO-18422 | Vendor A"
            progress="Approved"
            widthClass="w-[86%]"
          />
          <TaskProgressCard
            icon={LayoutTemplate}
            iconClass="bg-[#2bc36b]/12 text-[#2bc36b]"
            label="PO-18421 | Vendor B"
            progress="Review"
            widthClass="w-[54%]"
          />
        </div>
      </div>

      <IntegrationCard />
    </div>
  );
}

function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      <div className="relative z-50 mx-auto flex max-w-screen-xl items-center justify-between gap-3 rounded-xl border border-black/6 bg-white px-3 py-3 shadow-xl sm:px-5 lg:px-6">
        
        {/* Logo */}
        <a
          href="#"
          className="font-display-copy flex items-center gap-3 text-[15px] font-semibold tracking-[0.12em] text-[#161616]"
        >
          <BrandMark />
          ORDENTRA
        </a>

        {/* Desktop Nav */}
        <nav className="hidden flex-1 items-center justify-center gap-8 text-[11px] font-medium text-slate-500 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 sm:flex">
          <a
            href="#contact"
            className="text-[11px] font-medium text-slate-600 transition hover:text-slate-950"
          >
            Sign in
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-[11px] font-medium text-slate-700 shadow-[0_10px_25px_rgba(15,23,42,0.06)] transition hover:border-slate-300 hover:text-slate-950"
          >
            Book a Demo
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-[0_10px_25px_rgba(15,23,42,0.06)] transition-all duration-300 ease-in-out hover:border-slate-300 hover:text-slate-950 lg:hidden"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5 text-slate-900 drop-shadow-sm" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Overlay */}
      <button
        type="button"
        aria-label="Close navigation overlay"
        onClick={() => setIsMobileMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile Menu */}
      <div
        className={`absolute inset-x-3 top-full z-50 mt-3 transition-all duration-300 ease-in-out lg:hidden sm:inset-x-5 ${
          isMobileMenuOpen
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-2 scale-[0.98] opacity-0"
        }`}
      >
        <div className="mx-auto max-w-[1400px] rounded-[1.35rem] border border-black/6 bg-white p-4 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
          
          <nav className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`rounded-xl px-3 py-3 text-sm font-medium text-slate-700 transition-all duration-300 hover:bg-slate-50 hover:text-slate-950 ${
                  isMobileMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-2 opacity-0"
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen
                    ? `${index * 40}ms`
                    : "0ms",
                }}
              >
                {link.label}
              </a>
            ))}

            {/* CTA */}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-xl bg-[#2f80ff] px-4 py-3 text-sm font-medium text-white shadow-[0_20px_35px_rgba(47,128,255,0.24)] transition hover:bg-[#1f72f0]"
            >
              Book a Demo
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
    {/* <button
      type="button"
      aria-label="Close navigation overlay"
      onClick={() => setIsMobileMenuOpen(false)}
      className={`fixed inset-0 z-40 bg-white/20 transition-opacity duration-300 ease-in-out lg:hidden ${isMobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
    ></button> */}
    {/* <div
        className={`absolute inset-x-3 top-full z-50 mt-3 transition-all duration-300 ease-in-out lg:hidden sm:inset-x-5 ${isMobileMenuOpen ? "pointer-events-auto translate-y-0 scale-100 opacity-100" : "pointer-events-none -translate-y-2 scale-[0.98] opacity-0"}`}
      >
        <div className="mx-auto max-w-[1400px] rounded-[1.35rem] border border-black/6 bg-white p-4 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`rounded-xl px-3 py-3 text-sm font-medium text-slate-700 transition-all duration-300 ease-in-out hover:bg-slate-50 hover:text-slate-950 ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}
                style={{ transitionDelay: isMobileMenuOpen ? `${index * 35}ms` : "0ms" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-[#2f80ff] px-4 py-3 text-sm font-medium text-white shadow-[0_20px_35px_rgba(47,128,255,0.24)] transition hover:bg-[#1f72f0]"
            >
              Book a Demo
            </a>
          </nav>
        </div>
      </div> */}

function HeroSection() {
  return (
    <section className="hero-section pb-8 pt-3 sm:pb-12">
      <Reveal className="mx-auto max-w-[1400px]">
        <div className="hero-shell relative overflow-hidden px-4 py-8 sm:px-8 sm:py-10 lg:min-h-[760px] lg:px-10 lg:py-12">

          <div className="hero-content relative z-10 mx-auto flex max-w-5xl flex-col items-center pt-14 text-center sm:pt-28 lg:pt-34">
            <div className="hero-app-badge mb-8 flex h-[72px] w-[72px] items-center justify-center rounded-[1.45rem] border border-black/6 bg-white shadow-[0_20px_40px_rgba(15,23,42,0.08)]">
              <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none" aria-hidden="true">
                <rect x="1" y="1" width="38" height="38" rx="4" fill="#0B1F37" />
                <rect x="7" y="7" width="8" height="8" rx="1" fill="#FAFAFA" />
                <rect x="17" y="7" width="8" height="8" rx="1" fill="#FAFAFA" fillOpacity="0.55" />
                <rect x="27" y="7" width="6" height="8" rx="1" fill="#FAFAFA" fillOpacity="0.28" />
                <rect x="7" y="17" width="8" height="8" rx="1" fill="#FAFAFA" fillOpacity="0.55" />
                <rect x="17" y="17" width="8" height="8" rx="1" fill="#FAFAFA" />
                <rect x="27" y="17" width="6" height="8" rx="1" fill="#FAFAFA" fillOpacity="0.55" />
                <rect x="7" y="27" width="8" height="6" rx="1" fill="#FAFAFA" fillOpacity="0.28" />
                <rect x="17" y="27" width="8" height="6" rx="1" fill="#FAFAFA" fillOpacity="0.55" />
                <rect x="27" y="27" width="6" height="6" rx="1" fill="#FAFAFA" />
              </svg>
            </div>

            <h1 className="hero-title font-display-copy max-w-5xl text-[3rem] font-medium tracking-[-0.08em] text-[#121212] sm:text-[4.5rem] lg:text-[5.25rem] lg:leading-[0.93]">
              The Enterprise
              <span className="mt-0 block text-[#adadad]">OPEX Platform</span>
            </h1>

            <p className="mt-7 max-w-[38rem] text-base leading-8 text-slate-500 sm:text-[1.15rem]">
              ORDENTRA unifies Order Management, Trade Operations & Inventory
              Control on one intelligent OPEX platform. Built to reduce
              operational spend, accelerate procurement, and bring real-time
              visibility to every transaction.
            </p>

            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-[0.95rem] bg-[#2f80ff] px-8 py-3.5 text-[15px] font-medium text-white shadow-[0_20px_35px_rgba(47,128,255,0.28)] transition hover:bg-[#1f72f0]"
              >
                Book a Demo
              </a>
            </div>

            <MobileHeroCards />
          </div>

          <div className="hero-float-left absolute left-5 top-10 z-10 hidden sm:block sm:left-8 lg:left-10 lg:top-11">
            <div className="relative rotate-[-7deg] rounded-[1.35rem] border border-[#f0e0a8] bg-[#ffe97a] px-4 py-4 shadow-[0_18px_35px_rgba(0,0,0,0.08)] sm:px-5 sm:py-5">
              <p className="max-w-[12rem] text-[13px] leading-7 text-[#3f3420]">
                Built to reduce operational spend, accelerate procurement, and
                bring real-time visibility to every transaction.
              </p>
            </div>
            <div className="absolute -bottom-9 left-8 rotate-[8deg] rounded-[1.2rem] border border-black/5 bg-white p-4 shadow-[0_16px_32px_rgba(0,0,0,0.08)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-[1rem] bg-[#377dff] text-white">
                <CheckCheck className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div className="hero-float-right absolute right-1 top-5 z-10 hidden sm:right-6 sm:block lg:right-8 lg:top-8">
            <div className="relative rotate-[10deg] rounded-[1.5rem] border border-black/5 bg-[#f6f6f6] p-4 shadow-[0_18px_35px_rgba(0,0,0,0.08)] sm:w-[210px]">
              <p className="text-[12px] font-medium text-[#202020]">
                Founding design partners
              </p>
              <div className="mt-4 rounded-[1rem] bg-white px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700">
                    <Clock3 className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-[11px] font-medium text-slate-800">
                      Q2 2026 release
                    </p>
                    <p className="mt-1 text-[10px] text-slate-400">AI modules shipping 2026</p>
                  </div>
                </div>
                <div className="mt-3 rounded-full bg-[#eef5ff] px-3 py-1 text-center text-[10px] font-semibold text-[#4091ff]">
                  Pre-launch - taking on founding design partners
                </div>
              </div>
              <a
                href="#contact"
                className="mt-3 inline-flex rounded-full bg-[#111111] px-3 py-1.5 text-[10px] font-medium text-white transition hover:bg-black"
              >
                Request access
              </a>
            </div>
          </div>

          <div className="hero-float-bottom-left absolute bottom-0 left-4 z-10 hidden w-[260px] translate-y-12 sm:left-7 sm:block sm:w-[285px] lg:left-9">
            <div className="rounded-[1.5rem] border border-black/5 bg-[#f6f6f6] p-4 shadow-[0_18px_35px_rgba(0,0,0,0.08)]">
              <p className="text-[12px] font-medium text-slate-700">
                Recent procurement activity
              </p>
              <div className="mt-4 space-y-3">
                <TaskProgressCard
                  icon={FileText}
                  iconClass="bg-[#ff6b4a]/12 text-[#ff6b4a]"
                  label="PO-18422 | Vendor A"
                  progress="Approved"
                  widthClass="w-[86%]"
                />
                <TaskProgressCard
                  icon={LayoutTemplate}
                  iconClass="bg-[#2bc36b]/12 text-[#2bc36b]"
                  label="PO-18421 | Vendor B"
                  progress="Review"
                  widthClass="w-[54%]"
                />
              </div>
              <a
                href="#features"
                className="mt-4 inline-flex text-[11px] font-medium text-[#2f80ff] transition hover:text-[#1f72f0]"
              >
                View all activity
              </a>
            </div>
          </div>

          <div className="hero-float-bottom-right absolute bottom-0 right-4 z-10 hidden w-[260px] translate-y-12 sm:right-8 sm:block sm:w-[310px] lg:right-10">
            <div className="rounded-[1.5rem] border border-black/5 bg-[#f6f6f6] p-4 shadow-[0_18px_35px_rgba(0,0,0,0.08)]">
              <p className="text-[12px] font-medium text-slate-700">40+ native connectors</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="rounded-[1rem] bg-white p-4 shadow-[0_10px_25px_rgba(0,0,0,0.05)]">
                  <Mail className="h-7 w-7 text-[#ea4335]" />
                </div>
                <div className="rounded-[1rem] bg-white p-4 shadow-[0_10px_25px_rgba(0,0,0,0.05)]">
                  <MessageSquare className="h-7 w-7 text-[#4a154b]" />
                </div>
                <div className="rounded-[1rem] bg-white p-4 shadow-[0_10px_25px_rgba(0,0,0,0.05)]">
                  <CalendarRange className="h-7 w-7 text-[#2563eb]" />
                </div>
              </div>
              <a
                href="#pricing"
                className="mt-4 inline-flex text-[11px] font-medium text-slate-700 transition hover:text-slate-950"
              >
                Explore connectors
              </a>
            </div>
          </div>

          <div className="pointer-events-none absolute left-[14%] top-[31%] hidden h-16 w-16 rotate-[-12deg] rounded-[1.3rem] border border-white/90 bg-white/75 shadow-[0_18px_35px_rgba(0,0,0,0.06)] lg:block" />
          <div className="pointer-events-none absolute right-[16%] top-[42%] hidden h-14 w-14 rotate-[11deg] rounded-[1.25rem] border border-white/90 bg-white/70 shadow-[0_18px_35px_rgba(0,0,0,0.06)] lg:block" />
        </div>
      </Reveal>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section id="features" className="pb-20 pt-8 sm:pt-10">
      <Reveal className="mx-auto max-w-[1400px]">
        <div className="relative overflow-hidden px-3 py-8 sm:px-5 sm:py-10 lg:px-6 lg:py-12">
          <div className="relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-700">
                Platform modules
              </p>
              <h2 className="font-display-copy mt-6 text-4xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-5xl lg:text-[4rem] lg:leading-[0.96]">
                Order Management, Trade Operations & Inventory Control, unified
                on one intelligent platform.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Built for the Global 2000.
              </p>
            </div>

            <div className="mx-auto mt-12 grid w-full max-w-[1280px] grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {featureCards.map(
                ({ title, description, icon: Icon, accentClass, eyebrow }, index) => (
                  <Reveal
                    key={title}
                    delay={index * 70}
                    className="group relative overflow-hidden rounded-[1.75rem] border border-black/6 bg-white/82 p-6 text-center shadow-[0_20px_45px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(15,23,42,0.1)] sm:p-7"
                  >
                    <div className="relative z-10">
                      <div className="flex flex-col items-center gap-4">
                        <div
                          className={`flex h-14 w-14 items-center justify-center rounded-[1.2rem] ${accentClass}`}
                        >
                          <Icon className="h-7 w-7" />
                        </div>
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                          {eyebrow}
                        </span>
                      </div>

                      <h3 className="font-display-copy mt-6 text-[1.45rem] font-semibold tracking-[-0.04em] text-slate-950">
                        {title}
                      </h3>
                      <p className="mt-3 text-[15px] leading-7 text-slate-600">
                        {description}
                      </p>

                      <div className="mt-6 flex items-center justify-center gap-2 text-sm font-medium text-[#2f80ff]">
                        <span>Learn more</span>
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Reveal>
                ),
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function IntegrationsSection() {
  return (
    <section id="integrations" className="py-20">
      <Reveal className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-700">
            Integrations
          </p>
          <h2 className="font-display-copy mt-6 text-4xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-5xl lg:text-[4rem] lg:leading-[0.96]">
            Integrations
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            40+ native connectors, 2-hour setup.
          </p>
        </div>

        <div className="mx-auto mt-12 grid w-full max-w-[1280px] grid-cols-1 gap-5 md:grid-cols-3">
          {integrationCards.map(
            ({ title, description, icon: Icon, accentClass, eyebrow }, index) => (
              <Reveal
                key={title}
                delay={index * 90}
                className="group relative overflow-hidden rounded-[1.75rem] border border-black/6 bg-white/82 p-6 text-left shadow-[0_20px_45px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(15,23,42,0.1)] sm:p-7"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(255,255,255,0.42),transparent)]" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-4">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-[1.2rem] ${accentClass}`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="rounded-full bg-[#eef5ff] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2f80ff]">
                      {eyebrow}
                    </span>
                  </div>

                  <h3 className="font-display-copy mt-6 text-[1.45rem] font-semibold tracking-[-0.04em] text-slate-950">
                    {title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-slate-600">
                    {description}
                  </p>
                </div>
              </Reveal>
            ),
          )}
        </div>
      </Reveal>
    </section>
  );
}

function SecuritySection() {
  return (
    <section id="security" className="py-20">
      <Reveal className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-700">
            Security
          </p>
          <h2 className="font-display-copy mt-6 text-4xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-5xl lg:text-[4rem] lg:leading-[0.96]">
            Security &amp; Trust
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            AES-256 encryption. Private cloud &amp; on-prem.
          </p>
        </div>

        <div className="mx-auto mt-12 grid w-full max-w-[1280px] grid-cols-1 gap-5 md:grid-cols-2">
          {securityCards.map(
            ({ title, description, icon: Icon, accentClass, eyebrow }, index) => (
              <Reveal
                key={title}
                delay={index * 90}
                className="group relative overflow-hidden rounded-[1.75rem] border border-black/6 bg-white/82 p-6 text-left shadow-[0_20px_45px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(15,23,42,0.1)] sm:p-7"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(255,255,255,0.42),transparent)]" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-4">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-[1.2rem] ${accentClass}`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="rounded-full bg-[#eef5ff] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2f80ff]">
                      {eyebrow}
                    </span>
                  </div>

                  <h3 className="font-display-copy mt-6 text-[1.45rem] font-semibold tracking-[-0.04em] text-slate-950">
                    {title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-slate-600">
                    {description}
                  </p>
                </div>
              </Reveal>
            ),
          )}
        </div>
      </Reveal>
    </section>
  );
}

function CustomersSection() {
  return (
    <section id="customers" className="py-20">
      <Reveal className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-700">
            Customers
          </p>
          <h2 className="font-display-copy mt-6 text-4xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-5xl lg:text-[4rem] lg:leading-[0.96]">
            Built for the Global 2000.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Order Management, Trade Operations &amp; Inventory Control, unified
            on one intelligent platform.
          </p>
        </div>

        <div className="mx-auto mt-12 grid w-full max-w-[1280px] grid-cols-1 gap-6 md:grid-cols-3">
          {customerSignals.map(({ metric, title, description, icon: Icon }, index) => (
            <Reveal
              key={title}
              delay={index * 90}
              className="group relative overflow-hidden rounded-[1.75rem] border border-black/6 bg-white/82 p-6 text-left shadow-[0_20px_45px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(15,23,42,0.1)] sm:p-7"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.42),transparent)]" />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] bg-slate-100 text-slate-900">
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="font-mono-copy rounded-full bg-[#eef5ff] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2f80ff]">
                    Signal 0{index + 1}
                  </span>
                </div>

                <p className="font-display-copy mt-6 text-4xl font-semibold tracking-[-0.06em] text-slate-950">
                  {metric}
                </p>
                <h3 className="font-display-copy mt-3 text-[1.45rem] font-semibold tracking-[-0.04em] text-slate-950">
                  {title}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-slate-600">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function DemoSection() {
  return (
    <section id="contact" className="py-20">
      <Reveal className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-700">
            Your 30 minutes
          </p>
          <h2 className="font-display-copy mt-6 text-4xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-5xl lg:text-[4rem] lg:leading-[0.96]">
            Your 30 minutes
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Scheduled within 24 hours. NDA available on request. SOC 2 review
            packet at GA.
          </p>
        </div>

        <div className="mx-auto mt-12 grid w-full max-w-[1280px] grid-cols-1 gap-5 md:grid-cols-3">
          {workflowSteps.map((step, index) => (
            <Reveal
              key={step.title}
              delay={index * 90}
              className="group relative overflow-hidden rounded-[1.75rem] border border-black/6 bg-white/82 p-6 text-left shadow-[0_20px_45px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(15,23,42,0.1)] sm:p-7"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(255,255,255,0.42),transparent)]" />

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] bg-slate-100 text-slate-900">
                    <span className="font-mono-copy text-lg font-semibold tracking-[-0.04em]">
                      0{index + 1}
                    </span>
                  </div>
                  <span className="font-mono-copy rounded-full bg-[#eef5ff] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2f80ff]">
                    {index === 0 ? "0-5 min" : index === 1 ? "5-20 min" : "20-30 min"}
                  </span>
                </div>

                <h3 className="font-display-copy mt-6 text-[1.45rem] font-semibold tracking-[-0.04em] text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-12 grid w-full max-w-[1280px] grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Scheduled within 24 hours",
            "NDA available on request",
            "SOC 2 review packet at GA",
            "No obligation, no follow-up cadence",
          ].map((item, index) => (
            <Reveal
              key={item}
              delay={index * 70}
              className="rounded-[1.5rem] border border-black/6 bg-white/82 p-5 text-left shadow-[0_20px_45px_rgba(15,23,42,0.06)]"
            >
              <div className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <p className="text-[15px] leading-7 text-slate-600">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="py-20">
      <Reveal className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-700">
            Pricing
          </p>
          <h2 className="font-display-copy mt-6 text-4xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-5xl lg:text-[4rem] lg:leading-[0.96]">
            Pricing
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Growth, Enterprise, and Elite.
          </p>
        </div>

        <div className="mx-auto mt-12 grid w-full max-w-[1280px] grid-cols-1 gap-6 md:grid-cols-3">
          {pricingPlans.map((plan, index) => {
            const isPrimary = plan.accent === "primary";

            return (
              <Reveal
                key={plan.name}
                delay={index * 90}
                className={
                  isPrimary
                    ? "relative overflow-hidden rounded-[1.9rem] border border-blue-500/30 bg-[#2f80ff] p-8 text-left text-white shadow-[0_28px_65px_rgba(47,128,255,0.26)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_34px_75px_rgba(47,128,255,0.3)]"
                    : "relative overflow-hidden rounded-[1.9rem] border border-black/6 bg-white/82 p-8 text-left shadow-[0_20px_45px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(15,23,42,0.1)]"
                }
              >
                {!isPrimary ? (
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.42),transparent)]" />
                ) : (
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_55%)]" />
                )}

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3
                        className={`font-display-copy text-2xl font-semibold ${
                          isPrimary ? "" : "text-black"
                        }`}
                      >
                        {plan.name}
                      </h3>
                      <p
                        className={`mt-2 text-sm ${
                          isPrimary ? "text-blue-100" : "text-gray-500"
                        }`}
                      >
                        {plan.subtitle}
                      </p>
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${
                        isPrimary
                          ? "bg-white/14 text-white"
                          : "bg-slate-100 text-slate-500"
                      } ${plan.badge ? "" : "invisible"}`}
                    >
                      {plan.badge ?? ""}
                    </span>
                  </div>

                  <p className={`mt-8 text-5xl font-bold ${isPrimary ? "" : "text-black"}`}>
                    {plan.price}
                  </p>
                  <p
                    className={`mt-2 text-sm ${
                      isPrimary ? "text-blue-100" : "text-gray-500"
                    }`}
                  >
                    {plan.priceNote}
                  </p>

                  <button
                    className={
                      isPrimary
                        ? "mt-8 w-full cursor-pointer rounded-xl bg-white py-3 font-medium text-blue-600 transition ease-in-out hover:bg-blue-50"
                        : "mt-8 w-full cursor-pointer rounded-xl bg-blue-600 py-3 text-white transition ease-in-out hover:bg-blue-700"
                    }
                  >
                    {plan.ctaText}
                  </button>
                  <p
                    className={`mt-2 text-center text-[11px] ${
                      isPrimary ? "text-blue-100" : "text-slate-500"
                    }`}
                  >
                    {plan.helperText}
                  </p>

                  <ul
                    className={`mt-8 space-y-3 ${
                      isPrimary ? "text-blue-50" : "text-gray-600"
                    }`}
                  >
                    {plan.features.map((item) => (
                      <li key={item} className="flex items-center justify-center gap-3">
                        <span
                          className={`flex h-7 w-7 items-center justify-center rounded-full ${
                            isPrimary
                              ? "bg-white/14 text-white"
                              : "bg-slate-100 text-blue-600"
                          }`}
                        >
                          <BadgeCheck className="h-4 w-4" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}

function SolutionsSection() {
  return (
    <section id="solutions" className="py-20">
      <Reveal className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-700">
            Solutions
          </p>
          <h2 className="font-display-copy mt-6 text-4xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-5xl lg:text-[4rem] lg:leading-[0.96]">
            Solutions
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Manufacturing, Retail & CPG, Healthcare, Logistics, Energy
            & Utilities.
          </p>
        </div>

        <div className="mx-auto mt-12 grid w-full max-w-[1280px] grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal
              key={testimonial.name}
              delay={index * 90}
              className="group relative overflow-hidden rounded-[1.75rem] border border-black/6 bg-white/82 p-6 text-center shadow-[0_20px_45px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(15,23,42,0.1)] sm:p-7"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.42),transparent)]" />

              <div className="relative z-10">
                <div className="flex items-center justify-center gap-1 text-[#2f80ff]">
                  <span className="text-lg leading-none">&quot;</span>
                  <span className="text-lg leading-none">&quot;</span>
                </div>

                <p className="mt-5 text-[15px] leading-8 text-slate-600">
                  &quot;{testimonial.quote}&quot;
                </p>

                <div className="mt-8 flex items-center justify-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-700">
                    {testimonial.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-slate-950">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-slate-500">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-slate-500">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-gray-500">
          Built for the Global 2000 and founding design partners modernizing
          operational spend.
        </p>
      </Reveal>
    </section>
  );
}

function FooterFeatureGrid() {
  return (
    <div className="footer-stage relative mx-auto w-full max-w-[1280px] overflow-hidden py-4 sm:px-5 sm:py-6">
      <div className="pointer-events-none absolute inset-0 opacity-90">
        <div className="absolute left-[10%] top-[18%] h-52 w-52 rounded-full bg-sky-100/45 blur-3xl" />
        <div className="absolute right-[14%] top-[28%] h-56 w-56 rounded-full bg-violet-100/35 blur-3xl" />
        <div className="absolute bottom-[6%] left-[42%] h-60 w-60 rounded-full bg-emerald-100/35 blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-[20rem] grid-cols-2 gap-x-6 gap-y-8 px-4 sm:hidden">
        {floatingTiles.map(({ label, icon: Icon, accentClass }) => (
          <div key={label} className="flex flex-col items-center justify-center gap-3 text-center">
            <div
              className={`flex h-24 w-24 items-center justify-center rounded-[1.6rem] ${accentClass}`}
            >
              <Icon className="h-12 w-12" />
            </div>
            <span className="text-sm font-semibold tracking-[0.08em] text-black">
              {label}
            </span>
          </div>
        ))}
      </div>

      <div className="relative hidden min-h-[52vh] rounded-[2rem] sm:block sm:min-h-[58vh] lg:min-h-[64vh]">
        {floatingTiles.map(({ label, icon: Icon, className, accentClass }) => (
          <div
            key={label}
            className={`footer-tile absolute flex h-28 w-28 items-center justify-center rounded-[2rem] text-center shadow-[0_18px_35px_rgba(15,23,42,0.12)] transition duration-300 hover:-translate-y-1 sm:h-[8rem] sm:w-[8rem] ${accentClass} ${className}`}
          >
            <Icon className="h-12 w-12 sm:h-14 sm:w-14" />
          </div>
        ))}
      </div>
    </div>
  );
}

function FooterSection() {
  return (
    <footer id="contact" className="pb-4 pt-12">
      <Reveal className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 border-b border-black/6 px-4 py-5 text-black sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-4 text-sm text-black/70">
            <div className="flex items-center gap-3">
              <p className="font-display-copy text-lg font-semibold tracking-[0.12em] text-black">
                ORDENTRA
              </p>
            </div>
            <span className="hidden text-slate-300 sm:inline">|</span>
            <span className="font-medium text-emerald-600">
              The Enterprise OPEX Platform
            </span>
            <a href="#contact" className="transition hover:text-black">
              Contact Sales
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {utilityButtons.map(({ label, icon: Icon }) => (
              <button
                key={label}
                type="button"
                aria-label={label}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-950"
              >
                <Icon className="h-5 w-5" />
              </button>
            ))}

            <a
              href="mailto:contact@ordentra.com"
              className="inline-flex items-center justify-center rounded-full bg-[#151830] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0f1226]"
            >
              Contact Sales
            </a>
          </div>
        </div>

        <div className="px-4 pb-3 pt-8 text-black sm:px-8 sm:pb-4 sm:pt-10">
          <div className="footer-copy flex w-full flex-col gap-10">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:items-start">
              <div className="footer-copy text-left">
                <p className="mb-4 inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em]">
                  Built for the Global 2000
                </p>
                <h2 className="footer-headline font-display-copy max-w-[32rem] text-4xl font-semibold tracking-[-0.04em] sm:max-w-[36rem] sm:text-5xl sm:leading-[1.02]">
                  Order Management, Trade Operations & Inventory Control,
                  unified on one intelligent platform.
                </h2>
              </div>

              <div className="footer-copy grid grid-cols-2 gap-8 text-left sm:grid-cols-4">
                {footerLinkGroups.map((group) => (
                  <div key={group.title}>
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-800">
                      {group.title}
                    </h3>
                    <ul className="space-y-3">
                      {group.links.map((link) => (
                        <li key={link.label}>
                          <a
                            href={link.href}
                            className="inline-flex items-center gap-2 text-[15px] font-medium text-slate-500 transition hover:text-black"
                          >
                            <ArrowRight className="h-4 w-4" />
                            <span>{link.label}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <FooterFeatureGrid />

            <div className="footer-copy pt-2 text-center">
              <div className="overflow-hidden">
                <p className="font-display-copy text-[clamp(2.5rem,11.5vw,12rem)] font-semibold leading-none tracking-[0.08em] text-black">
                  ORDENTRA
                </p>
              </div>
            </div>

            <div className="footer-copy flex flex-col gap-6 border-t border-black/6 pt-6 text-sm sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-full text-slate-500">
                <p>&copy; 2026 ORDENTRA, Inc. All rights reserved. ORDENTRA&reg; is a registered trademark.</p>
                <p className="mt-1">Made for operations leaders. Hosted on sovereign cloud.</p>
              </div>
              <div className="flex max-w-full flex-wrap items-center gap-5 text-slate-500 font-medium tracking-tight">
                <a href="#" className="transition hover:text-black">
                  Privacy Policy
                </a>
                <a href="#" className="transition hover:text-black">
                  Terms of Service
                </a>
                <a href="#" className="transition hover:text-black">
                  DPA & GDPR
                </a>
                <a href="#" className="transition hover:text-black">
                  Sub-processors
                </a>
                <a href="#" className="transition hover:text-black">
                  Accessibility
                </a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}

export default function Home() {
  const cursorGlowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const glow = cursorGlowRef.current;

    if (!glow) {
      return;
    }

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const current = { x: target.x, y: target.y };
    let frameId = 0;

    const handlePointerMove = (event: PointerEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
    };

    const animateGlow = () => {
      current.x += (target.x - current.x) * 0.22;
      current.y += (target.y - current.y) * 0.22;
      glow.style.transform = `translate3d(${current.x - 256}px, ${current.y - 256}px, 0)`;
      frameId = window.requestAnimationFrame(animateGlow);
    };

    window.addEventListener("pointermove", handlePointerMove);
    frameId = window.requestAnimationFrame(animateGlow);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <main className="relative isolate min-h-screen">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div ref={cursorGlowRef} className="cursor-glow" />
      </div>

      <div className="relative z-10">
        <SiteHeader />
        <HeroSection />
        <FeaturesSection />
        <SolutionsSection />
        <IntegrationsSection />
        <SecuritySection />
        <CustomersSection />
        <PricingSection />
        <DemoSection />
        <FooterSection />
      </div>
    </main>
  );
}

