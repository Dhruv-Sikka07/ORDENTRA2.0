"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  Bell,
  Boxes,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Cloud,
  CreditCard,
  FileBarChart,
  Headphones,
  Layers3,
  LayoutDashboard,
  Menu,
  PackageCheck,
  Search,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  TrendingUp,
  Users,
  WalletCards,
  X,
  Zap,
} from "lucide-react";

type NavItem = {
  label: string;
  href: string;
  hasMenu?: boolean;
};

type CardItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  tone: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "#" },
  { label: "Modules", href: "#modules", hasMenu: true },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "About Us", href: "#about" },
  { label: "Resources", href: "#resources", hasMenu: true },
  { label: "Contact", href: "#contact" },
];

const trustItems = ["Acme Corp", "HexaTech", "ManageX", "CircleSoft", "VisionMart", "LayerLab"];

const featureCards: CardItem[] = [
  {
    title: "Cloud Based",
    description: "Access your business data anytime, anywhere.",
    icon: Cloud,
    tone: "bg-blue-50 text-blue-600",
  },
  {
    title: "Real-time Insights",
    description: "Make smarter decisions with real-time analytics.",
    icon: TrendingUp,
    tone: "bg-indigo-50 text-indigo-600",
  },
  {
    title: "Workflow Automation",
    description: "Automate repetitive tasks and boost productivity.",
    icon: Zap,
    tone: "bg-violet-50 text-violet-600",
  },
  {
    title: "Secure & Reliable",
    description: "Enterprise-grade security to protect your data.",
    icon: ShieldCheck,
    tone: "bg-blue-50 text-blue-600",
  },
  {
    title: "Scalable Solution",
    description: "Built to grow with your business, effortlessly.",
    icon: Boxes,
    tone: "bg-indigo-50 text-indigo-600",
  },
  {
    title: "24/7 Support",
    description: "Our team is always here to support you.",
    icon: Headphones,
    tone: "bg-violet-50 text-violet-600",
  },
];

const moduleCards: CardItem[] = [
  {
    title: "Finance",
    description: "Accounts, billing, expenses, taxation and more.",
    icon: CreditCard,
    tone: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "HR & Payroll",
    description: "Employee management, payroll, attendance.",
    icon: Users,
    tone: "bg-purple-50 text-purple-600",
  },
  {
    title: "Inventory",
    description: "Stock management, multi-warehouse, returns.",
    icon: PackageCheck,
    tone: "bg-orange-50 text-orange-600",
  },
  {
    title: "Sales",
    description: "Leads, quotations, orders and invoicing.",
    icon: BarChart3,
    tone: "bg-blue-50 text-blue-600",
  },
  {
    title: "Purchase",
    description: "Vendors, purchase orders, bill tracking.",
    icon: ShoppingCart,
    tone: "bg-pink-50 text-pink-600",
  },
  {
    title: "CRM",
    description: "Customer management, interactions, pipeline.",
    icon: Layers3,
    tone: "bg-cyan-50 text-cyan-600",
  },
];

const workflowCards: CardItem[] = [
  {
    title: "Leads / Sales",
    description: "Capture leads and convert to orders",
    icon: BarChart3,
    tone: "bg-blue-50 text-blue-600",
  },
  {
    title: "Inventory",
    description: "Check stock and fulfill orders",
    icon: PackageCheck,
    tone: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Purchase",
    description: "Manage vendors and procure",
    icon: ShoppingCart,
    tone: "bg-orange-50 text-orange-600",
  },
  {
    title: "Finance",
    description: "Invoices, payments and reconciliation",
    icon: WalletCards,
    tone: "bg-purple-50 text-purple-600",
  },
  {
    title: "Reports",
    description: "Real-time insights and analytics",
    icon: FileBarChart,
    tone: "bg-cyan-50 text-cyan-600",
  },
];

const footerGroups = [
  {
    title: "Modules",
    links: ["Finance", "HR & Payroll", "Inventory", "Sales", "Purchase", "CRM"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Partners", "Blog"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Help Center", "Privacy Policy", "Terms & Conditions"],
  },
];

function BrandMark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <path
        d="M4.5 19.5 11.2 8.8l5.7 7.4 4.1-6.4 6.5 3.6"
        stroke="#1557ff"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="11.2" cy="8.8" r="2.7" fill="#7cb4ff" />
      <circle cx="16.9" cy="16.2" r="2.7" fill="#1557ff" />
      <circle cx="21" cy="9.8" r="2.7" fill="#7cb4ff" />
    </svg>
  );
}

function SiteHeader({ open, setOpen }: { open: boolean; setOpen: (val: boolean | ((prev: boolean) => boolean)) => void }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-5">
        <a href="#" className="flex items-center gap-2.5 font-display text-[17px] font-extrabold tracking-tight text-slate-900">
          <BrandMark />
          ORDENTRA
        </a>

        <nav className="hidden items-center gap-8 text-[14px] font-medium text-slate-500 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`flex items-center gap-1 transition-colors duration-200 ${
                item.label === "Home"
                  ? "text-[#1557ff] font-semibold"
                  : "hover:text-slate-900"
              }`}
            >
              {item.label}
              {item.hasMenu ? <ChevronDown className="h-3.5 w-3.5 opacity-70" /> : null}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a href="#contact" className="text-[14px] font-medium text-slate-500 hover:text-slate-950 transition-colors">
            Login
          </a>
          <a
            href="#contact"
            className="rounded-full bg-[#1557ff] px-6 py-2.5 text-[13.5px] font-semibold text-white shadow-[0_8px_20px_rgba(21,87,255,0.12)] transition-all duration-300 hover:bg-[#0f48dc] hover:shadow-[0_12px_28px_rgba(21,87,255,0.22)] hover:scale-[1.01]"
          >
            Book a Demo
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-900 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <>
          <div
            onClick={() => setOpen(false)}
            className="fixed top-[72px] left-0 right-0 bottom-0 z-40 bg-slate-950/15 lg:hidden"
          />
          <div className="absolute top-[72px] left-0 right-0 z-50 border-b border-slate-200/60 bg-white/95 backdrop-blur-md px-5 py-5 lg:hidden shadow-xl shadow-slate-900/5">
            <nav className="mx-auto flex max-w-[1200px] flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                >
                  {item.label}
                  {item.hasMenu ? <ChevronDown className="h-4 w-4" /> : null}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-3 rounded-xl bg-[#1557ff] px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Book a Demo
              </a>
            </nav>
          </div>
        </>
      ) : null}
    </header>
  );
}

function DashboardPreview({ compact = false }: { compact?: boolean }) {
  const sidebar = ["Dashboard", "Finance", "HR", "Inventory", "Sales", "Purchase", "CRM", "Reports", "Settings"];

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.12)] ${
        compact ? "h-[190px]" : "min-h-[420px]"
      }`}
    >
      <div className="flex h-9 items-center gap-1.5 border-b border-slate-100 bg-slate-50/50 px-4 select-none">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
      </div>
      <div className="grid grid-cols-[120px_minmax(0,1fr)] sm:grid-cols-[150px_minmax(0,1fr)]">
        <aside className="border-r border-slate-200 bg-white p-4">
          <div className="mb-5 flex items-center gap-2 text-[11px] font-bold text-slate-900">
            <BrandMark className="h-4 w-4" />
            ORDENTRA
          </div>
          <div className="space-y-1.5">
            {sidebar.map((item, index) => (
              <div
                key={item}
                className={`flex items-center gap-2 rounded px-2.5 py-2 text-[10px] font-semibold ${
                  index === 0 ? "bg-[#1557ff] text-white" : "text-slate-600"
                }`}
              >
                {index === 0 ? <LayoutDashboard className="h-3 w-3" /> : <Settings className="h-3 w-3" />}
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>
        </aside>

        <div className="bg-[#fbfcff] p-4 sm:p-6">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <h3 className="text-[17px] font-bold text-slate-950">Hello, Admin</h3>
              <p className="mt-1 text-[10px] font-medium text-slate-500">
                Welcome back. Here is what is happening with your business.
              </p>
            </div>
            <div className="hidden items-center gap-3 md:flex">
              <div className="flex h-8 w-36 items-center gap-2 rounded border border-slate-200 bg-white px-3 text-[10px] text-slate-400">
                <Search className="h-3 w-3" />
                Search...
              </div>
              <Bell className="h-4 w-4 text-slate-500" />
              <div className="h-7 w-7 rounded-full bg-slate-900" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              ["Total Revenue", "$128K", "+10.4%"],
              ["Pending Orders", "245", "+6.2%"],
              ["Employees", "84", "68 Punched In"],
              ["Low Stock Alerts", "12", "View Details"],
            ].map(([label, value, meta]) => (
              <div key={label} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-[10px] font-semibold text-slate-500">{label}</p>
                <p className="mt-4 text-[22px] font-bold text-slate-950">{value}</p>
                <p className="mt-3 text-[9px] font-semibold text-emerald-500">{meta}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-[1.6fr_1fr]">
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-[12px] font-bold text-slate-950">Sales Overview</p>
                  <p className="text-[10px] font-semibold text-emerald-500">$128K +12.5%</p>
                </div>
              </div>
              <svg viewBox="0 0 420 150" className="h-32 w-full" fill="none" aria-hidden="true">
                <path d="M22 120 82 82 142 98 202 58 262 76 322 42 398 7" stroke="#1557ff" strokeWidth="4" />
                <path d="M22 120 82 82 142 98 202 58 262 76 322 42 398 7V150H22Z" fill="url(#chartFill)" />
                <defs>
                  <linearGradient id="chartFill" x1="210" x2="210" y1="7" y2="150">
                    <stop stopColor="#1557ff" stopOpacity=".22" />
                    <stop offset="1" stopColor="#1557ff" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-[12px] font-bold text-slate-950">Top Selling Products</p>
                <a href="#" className="text-[10px] font-bold text-[#1557ff]">
                  View All
                </a>
              </div>
              <div className="space-y-3">
                {["Wireless Headphones", "Smart Watch", "Bluetooth Speaker", "USB-C Cable"].map((item, index) => (
                  <div key={item} className="flex items-center justify-between gap-3 text-[10px]">
                    <div className="flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded bg-slate-100">
                        <PackageCheck className="h-3.5 w-3.5 text-slate-700" />
                      </span>
                      <span className="font-semibold text-slate-700">{item}</span>
                    </div>
                    <span className="font-bold text-slate-900">${[12520, 8430, 6760, 2310][index].toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ item }: { item: CardItem }) {
  const Icon = item.icon;

  return (
    <div className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.015)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-200/60 hover:shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
      <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105 ${item.tone}`}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="font-display text-[16px] font-bold text-slate-900 tracking-tight">{item.title}</h3>
      <p className="mt-2.5 text-[13px] font-medium leading-relaxed text-slate-500">{item.description}</p>
    </div>
  );
}

function ModuleCard({ item }: { item: CardItem }) {
  const Icon = item.icon;

  return (
    <div className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.015)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-200/60 hover:shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
      <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105 ${item.tone}`}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="font-display text-[16px] font-bold text-slate-900 tracking-tight">{item.title}</h3>
      <p className="mt-2.5 text-[13px] font-medium leading-relaxed text-slate-500">{item.description}</p>
      <a href="#" className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-bold text-[#1557ff] transition-all duration-300 group-hover:gap-2">
        Learn More
        <ArrowRight className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:py-20">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1.5 text-[12px] font-semibold text-[#1557ff]">
            <Sparkles className="h-4 w-4" />
            All-in-One Business Management Solution
          </div>
          <h1 className="font-display max-w-[520px] text-[44px] font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-[56px]">
            Simplify. Automate. Grow with <span className="text-[#1557ff]">ORDENTRA</span>
          </h1>
          <p className="mt-6 max-w-[560px] text-[16px] font-medium leading-relaxed text-slate-500">
            Manage your entire business operations - finance, HR, inventory,
            sales and more - in one unified and intelligent ERP platform.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#1557ff] px-6 py-3.5 text-[14px] font-semibold text-white shadow-[0_10px_25px_rgba(21,87,255,0.15)] transition-all duration-300 hover:bg-[#0f48dc] hover:shadow-[0_12px_28px_rgba(21,87,255,0.25)] hover:scale-[1.01]"
            >
              Book a Demo
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#modules"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-[14px] font-semibold text-slate-600 transition-all duration-300 hover:border-slate-350 hover:text-slate-900 hover:shadow-[0_4px_12px_rgba(0,0,0,0.02)] hover:scale-[1.01]"
            >
              Explore Modules
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-10 grid max-w-[520px] grid-cols-3 gap-4 text-[12px] font-medium text-slate-500">
            {[
              ["Cloud Based", Cloud],
              ["Secure & Reliable", ShieldCheck],
              ["Easy to Use", CheckCircle2],
            ].map(([label, Icon]) => {
              const BadgeIcon = Icon as LucideIcon;
              return (
                <div key={label as string} className="flex items-center gap-2">
                  <BadgeIcon className="h-4 w-4 text-[#1557ff]" />
                  <span>{label as string}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="hidden lg:block">
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto max-w-[1200px] px-5 py-5">
        <p className="text-center text-[15px] font-bold text-slate-600">
          Trusted by 500+ businesses worldwide
        </p>
        <div className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {trustItems.map((item, index) => (
            <div key={item} className="flex items-center justify-center gap-2 text-[14px] font-bold text-slate-600">
              {index % 3 === 0 ? <Building2 className="h-5 w-5" /> : index % 3 === 1 ? <FileBarChart className="h-5 w-5" /> : <Layers3 className="h-5 w-5" />}
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section id="features" className="bg-slate-50/50 px-5 py-20 border-y border-slate-100/80">
      <div className="mx-auto max-w-[1200px]">
        <p className="text-[12px] font-bold uppercase tracking-wider text-[#1557ff]">Why choose ORDENTRA</p>
        <h2 className="font-display mt-2.5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Everything You Need to Run Your Business
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((item) => (
            <FeatureCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ModulesSection() {
  return (
    <section id="modules" className="bg-white px-5 py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12">
          <div className="max-w-[620px]">
            <p className="text-[12px] font-bold uppercase tracking-wider text-[#1557ff]">Our modules</p>
            <h2 className="font-display mt-2.5 text-3xl font-extrabold tracking-tight leading-tight text-slate-900 sm:text-4xl">
              All Your Operations, One Integrated Platform
            </h2>
            <p className="mt-4 text-[15px] font-medium leading-relaxed text-slate-500">
              Powerful modules designed to streamline every department of your business.
            </p>
          </div>
          <a
            href="#modules"
            className="inline-flex items-center gap-2 rounded-xl bg-[#1557ff] px-6 py-3.5 text-[14px] font-semibold text-white shadow-[0_10px_25px_rgba(21,87,255,0.15)] transition-all duration-300 hover:bg-[#0f48dc] hover:shadow-[0_12px_28px_rgba(21,87,255,0.25)] hover:scale-[1.01]"
          >
            Explore All Modules
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {moduleCards.map((item) => (
            <ModuleCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkflowSection() {
  return (
    <section className="bg-slate-50/20 px-5 py-20 border-b border-slate-100/80">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12">
          <div className="max-w-[620px]">
            <p className="text-[12px] font-bold uppercase tracking-wider text-[#1557ff]">Smart workflow</p>
            <h2 className="font-display mt-2.5 text-3xl font-extrabold tracking-tight leading-tight text-slate-900 sm:text-4xl">
              How ORDENTRA Works for You
            </h2>
            <p className="mt-4 text-[15px] font-medium leading-relaxed text-slate-500">
              Seamless integration of all your business processes in one connected flow.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[#1557ff] px-6 py-3.5 text-[14px] font-semibold text-white shadow-[0_10px_25px_rgba(21,87,255,0.15)] transition-all duration-300 hover:bg-[#0f48dc] hover:shadow-[0_12px_28px_rgba(21,87,255,0.25)] hover:scale-[1.01]"
          >
            See How It Works
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {workflowCards.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="relative group rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.015)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-200/60 hover:shadow-[0_16px_40px_rgba(15,23,42,0.06)]"
              >
                <span className="absolute top-6 right-6 text-sm font-extrabold text-slate-350 tracking-tight select-none">
                  0{index + 1}
                </span>
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105 ${item.tone}`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-[15px] font-bold text-slate-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-[12.5px] font-medium leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DashboardCtaSection() {
  return (
    <section id="pricing" className="bg-white px-5 py-12">
      <div className="mx-auto grid max-w-[1200px] overflow-hidden rounded-3xl border border-slate-150 bg-[#f8fafc] shadow-[0_8px_30px_rgba(0,0,0,0.01)] lg:grid-cols-[1.1fr_1fr]">
        <div className="relative hidden lg:block min-h-[400px] overflow-hidden bg-slate-50/30">
          <div className="absolute top-8 left-8 w-[130%] xl:w-[125%] transition-transform duration-500 hover:scale-[1.02] hover:-rotate-1">
            <DashboardPreview />
          </div>
        </div>
        <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
          <p className="text-[12px] font-bold uppercase tracking-wider text-[#1557ff]">Powerful dashboard</p>
          <h2 className="font-display mt-2.5 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl leading-tight">
            Get Complete Visibility of Your Business
          </h2>
          <p className="mt-4 max-w-[560px] text-[14.5px] font-medium leading-relaxed text-slate-500">
            Track performance, monitor KPIs and make data-driven decisions with powerful dashboards and reports.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-[#1557ff] px-6 py-3.5 text-[14px] font-semibold text-white shadow-[0_10px_25px_rgba(21,87,255,0.15)] transition-all duration-300 hover:bg-[#0f48dc] hover:shadow-[0_12px_28px_rgba(21,87,255,0.25)] hover:scale-[1.01]"
          >
            Book a Demo
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section className="bg-white px-5 py-8">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 rounded-2xl bg-slate-900 px-8 py-10 text-white shadow-[0_12px_40px_rgba(0,0,0,0.08)] md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-5">
          <div className="hidden h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/5 md:flex">
            <CalendarDays className="h-7 w-7 text-white" />
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight">Ready to Transform Your Business?</h2>
            <p className="mt-1 text-[14px] font-medium text-slate-400">
              Book a free demo and see how ORDENTRA can help you automate, simplify and grow.
            </p>
          </div>
        </div>
        <a
          href="#contact"
          className="inline-flex w-fit items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-[14px] font-semibold text-slate-900 shadow-sm transition-all duration-300 hover:bg-slate-50 hover:scale-[1.01]"
        >
          Book a Free Demo
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-white px-5 py-8">
      <div className="mx-auto grid max-w-[1200px] gap-8 border-b border-slate-200 pb-8 md:grid-cols-[1.4fr_1fr_1fr_1fr_1.4fr]">
        <div>
          <a href="#" className="flex items-center gap-2 text-[16px] font-bold text-slate-950">
            <BrandMark />
            ORDENTRA
          </a>
          <p className="mt-4 max-w-[260px] text-[13px] font-medium leading-6 text-slate-600">
            ORDENTRA is an all-in-one business management solution to streamline your operations and accelerate growth.
          </p>
        </div>

        {footerGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-[14px] font-extrabold text-slate-950">{group.title}</h3>
            <ul className="mt-4 space-y-2">
              {group.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-[13px] font-medium text-slate-600 hover:text-[#1557ff]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-[14px] font-extrabold text-slate-950">Contact Us</h3>
          <div className="mt-4 space-y-2 text-[13px] font-medium leading-6 text-slate-600">
            <p>123 Business Street, Gurugram, Haryana 122001</p>
            <p>hello@ordentra.com</p>
            <p>+91 98765 43210</p>
          </div>
          <div className="mt-5 flex gap-3">
            {["in", "x", "f", "yt"].map((item) => (
              <a
                key={item}
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-[11px] font-bold text-slate-700"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="mx-auto max-w-[1200px] pt-5 text-center text-[12px] font-medium text-slate-500">
        © 2026 ORDENTRA. All rights reserved.
      </p>
    </footer>
  );
}

export default function HomePage() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <SiteHeader open={open} setOpen={setOpen} />
      <div className={`transition-all duration-350 ${open ? "blur-md pointer-events-none select-none" : ""}`}>
        <HeroSection />
        <TrustSection />
        <FeaturesSection />
        <ModulesSection />
        <WorkflowSection />
        <DashboardCtaSection />
        <CtaBand />
        <Footer />
      </div>
    </main>
  );
}
