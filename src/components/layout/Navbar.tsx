"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Government", href: "/government" },
  { name: "Career", href: "/career" },
  { name: "SSM Academy", href: "/ssm-academy" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-bg/95 backdrop-blur-xl shadow-lg shadow-black/5"
          : "bg-bg/80 backdrop-blur-md"
      )}
    >
      {/* ── Single compact top strip ── */}
      <div className="border-b border-line/10">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 h-8 flex items-center justify-between text-[10px] text-mute2 tracking-wide">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent2 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent2"></span>
            </span>
            <span className="uppercase tracking-[0.15em] font-mono">24/7 Dispatch · Operational</span>
            <span className="hidden md:inline text-line">|</span>
            <span className="hidden md:inline">Licensed in California, Texas, Virginia &amp; Fiji</span>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <a href="tel:5103639189" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Phone className="w-2.5 h-2.5" />
              (510) 363-9189
            </a>
            <span className="text-line">|</span>
            <a href="mailto:ssm@securitysystemsmanagement.us" className="hover:text-accent transition-colors hidden lg:inline">
              ssm@securitysystemsmanagement.us
            </a>
          </div>
        </div>
      </div>

      {/* ── Main nav row ── */}
      <nav className="border-b border-line/8">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 h-14 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <span className="relative inline-flex h-8 w-8 items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 40 40" aria-hidden="true">
                <path d="M20 2 L36 8 V20 C36 28 29 35 20 38 C11 35 4 28 4 20 V8 Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M20 11 L29 14 V20 C29 24.5 25.2 28.2 20 30 C14.8 28.2 11 24.5 11 20 V14 Z" fill="#0EA5E9"/>
                <path d="M16 19 L19 22 L25 16" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="square"/>
              </svg>
            </span>
            <span className="flex flex-col leading-none">
              <span className="serif text-lg tracking-tight text-text group-hover:text-accent transition-colors">SSM<span className="text-accent">.</span></span>
              <span className="text-[8.5px] font-mono uppercase tracking-[0.18em] text-mute2 -mt-0.5">Security Systems Management</span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative px-3.5 py-1.5 text-[13px] font-medium rounded-md transition-all duration-200",
                    isActive
                      ? "text-accent bg-accent/8"
                      : "text-text/70 hover:text-text hover:bg-surface2/50"
                  )}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-accent rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 bg-accent hover:bg-accentL text-white text-xs font-semibold px-4 py-2 rounded-md transition-all duration-200 shadow-sm shadow-accent/20 hover:shadow-md hover:shadow-accent/25"
            >
              Request a Proposal
              <ChevronRight className="w-3 h-3" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-line/20 text-text hover:bg-surface2/50 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile menu ── */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-bg/98 backdrop-blur-xl border-b border-line/15 animate-in slide-in-from-top-2 duration-200">
          <div className="px-5 py-4 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                    isActive
                      ? "text-accent bg-accent/8"
                      : "text-text/80 hover:text-text hover:bg-surface2/40"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block mt-3 text-center bg-accent text-white text-sm font-semibold py-2.5 rounded-md hover:bg-accentL transition-colors"
            >
              Request a Proposal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
