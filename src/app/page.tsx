"use client";

import React from "react";
import Link from "next/link";
import { Shield, ChevronRight, MapPin, FileText, ArrowRight, Building2, GraduationCap, Users } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* ─────────────────────────────────────────────────────────────────
           HERO SECTION
           ───────────────────────────────────────────────────────────────── */}
      <section id="top" className="relative bg-bg text-text overflow-hidden grain py-12">
        <div className="absolute inset-0 pattern-ink opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/40 to-bg"></div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-8 lg:pt-10 pb-14 lg:pb-20 z-10">
          
          {/* CLIENT LOGO MARQUEE (Moved to top) */}
          <div className="mb-14 pb-8 border-b border-line/10 reveal-up">
            <div className="flex items-center gap-8 mb-7">
              <span className="eyebrow text-mute2">Trusted by</span>
              <span className="h-px flex-1 bg-line/15"></span>
              <span className="eyebrow text-mute2">Selected engagements · 2013 — Present</span>
            </div>
            <div className="relative overflow-hidden">
              <div className="marquee-track flex items-center gap-16 lg:gap-24 whitespace-nowrap">
                <span className="serif text-3xl text-text/70">Enterprise Rent-A-Car</span><span className="text-mute2 text-2xl">·</span><span className="mono uppercase tracking-[0.25em] text-text/70 text-sm">NOAA</span><span className="text-mute2 text-2xl">·</span><span className="serif text-3xl text-text/70">Sheraton</span><span className="text-mute2 text-2xl">·</span><span className="text-text/70 text-base font-semibold tracking-wider">ALAMEDA POINT COLLABORATIVE</span><span className="text-mute2 text-2xl">·</span><span className="serif text-3xl text-text/70">BAART Programs</span><span className="text-mute2 text-2xl">·</span><span className="mono uppercase tracking-[0.25em] text-text/70 text-sm">U.S. Dept. of Commerce</span><span className="text-mute2 text-2xl">·</span><span className="serif text-3xl text-text/70">City of Hayward</span><span className="text-mute2 text-2xl">·</span>
                <span className="serif text-3xl text-text/70">Enterprise Rent-A-Car</span><span className="text-mute2 text-2xl">·</span><span className="mono uppercase tracking-[0.25em] text-text/70 text-sm">NOAA</span><span className="text-mute2 text-2xl">·</span><span className="serif text-3xl text-text/70">Sheraton</span><span className="text-mute2 text-2xl">·</span><span className="text-text/70 text-base font-semibold tracking-wider">ALAMEDA POINT COLLABORATIVE</span><span className="text-mute2 text-2xl">·</span><span className="serif text-3xl text-text/70">BAART Programs</span><span className="text-mute2 text-2xl">·</span><span className="mono uppercase tracking-[0.25em] text-text/70 text-sm">U.S. Dept. of Commerce</span><span className="text-mute2 text-2xl">·</span><span className="serif text-3xl text-text/70">City of Hayward</span><span className="text-mute2 text-2xl">·</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-8 reveal-up visible">
              <h1 className="serif text-[44px] sm:text-[68px] lg:text-[104px] leading-[0.95] text-text">
                To protect with <em className="text-accent not-italic font-serif" style={{ fontStyle: "italic" }}>courage.</em><br />
                To serve with <em className="text-accent not-italic font-serif" style={{ fontStyle: "italic" }}>compassion.</em>
              </h1>

              <p className="mt-8 max-w-xl text-text/75 text-[17px] leading-relaxed font-light">
                Licensed 24/7 protective services and facilities management for government, commercial, industrial and residential clients. Since 2013, SSM Inc. has designed bespoke security programs that meet exact specifications — without exception.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href="/contact" className="btn btn-brass">
                  Request a Proposal
                  <ArrowRight width="14" height="14" />
                </Link>
                <Link href="#explore" className="btn btn-outline border-line/50 hover:bg-surface2 hover:text-text">Explore Practice</Link>
                <a href="tel:5103639189" className="ml-2 hidden sm:inline-flex items-center gap-3 text-text/80 hover:text-accent transition-colors">
                  <span className="mono text-xs">24/7 DISPATCH</span>
                  <span className="serif text-2xl">(510)&nbsp;363&#8209;9189</span>
                </a>
              </div>
            </div>

            {/* Compact Stat Card */}
            <aside className="lg:col-span-4 border border-line/15 p-6 lg:p-8 bg-surface/60 backdrop-blur-sm relative reveal-up visible" style={{ transitionDelay: "150ms" }}>
              <div className="eyebrow text-accent mb-6">At a glance</div>
              <dl className="grid grid-cols-2 gap-y-8 gap-x-4">
                <div>
                  <dt className="eyebrow text-text/55 text-[10px]">Years of operation</dt>
                  <dd className="serif text-4xl lg:text-5xl mt-2 text-text">12<span className="text-accent">+</span></dd>
                  <p className="text-text/60 text-[10px] mt-2 font-light leading-snug">Continuous service since 2013.</p>
                </div>
                <div>
                  <dt className="eyebrow text-text/55 text-[10px]">Dispatch</dt>
                  <dd className="serif text-4xl lg:text-5xl mt-2 text-text">24/7</dd>
                  <p className="text-text/60 text-[10px] mt-2 font-light leading-snug">Radio check every 30 minutes.</p>
                </div>
                <div>
                  <dt className="eyebrow text-text/55 text-[10px]">Languages spoken</dt>
                  <dd className="serif text-4xl lg:text-5xl mt-2 text-text">06</dd>
                  <p className="text-text/60 text-[10px] mt-2 font-light leading-snug">Bilingual officers on staff.</p>
                </div>
                <div>
                  <dt className="eyebrow text-text/55 text-[10px]">Best rate</dt>
                  <dd className="serif text-4xl lg:text-5xl mt-2 text-text">100<span className="text-accent">%</span></dd>
                  <p className="text-text/60 text-[10px] mt-2 font-light leading-snug">Best-rate guarantee on contracts.</p>
                </div>
              </dl>
              <div className="mt-8 pt-5 border-t border-line/10 flex items-center gap-2 text-text/70 text-xs">
                <Shield width="14" height="14" className="text-accent" />
                TX DPS · VA SCC · CA BSIS · Fully bonded
              </div>
            </aside>
          </div>

          {/* Disciplines tags */}
          {/* Disciplines tags */}
          <div className="mt-14 lg:mt-20 pt-6 border-t border-line/10 flex flex-wrap items-center gap-3 reveal-up visible" style={{ transitionDelay: "300ms" }}>
            <span className="eyebrow text-mute2 mr-2">Disciplines</span>
            <span className="px-4 py-1.5 rounded-full border border-line/20 bg-surface/80 text-text/80 text-[13px] font-medium tracking-wide shadow-sm hover:border-accent hover:text-accent transition-colors cursor-default">Unarmed Security</span>
            <span className="px-4 py-1.5 rounded-full border border-line/20 bg-surface/80 text-text/80 text-[13px] font-medium tracking-wide shadow-sm hover:border-accent hover:text-accent transition-colors cursor-default">Mobile Patrol</span>
            <span className="px-4 py-1.5 rounded-full border border-line/20 bg-surface/80 text-text/80 text-[13px] font-medium tracking-wide shadow-sm hover:border-accent hover:text-accent transition-colors cursor-default">Surveillance & Tracking</span>
            <span className="px-4 py-1.5 rounded-full border border-line/20 bg-surface/80 text-text/80 text-[13px] font-medium tracking-wide shadow-sm hover:border-accent hover:text-accent transition-colors cursor-default">Facilities Management</span>
            <span className="px-4 py-1.5 rounded-full border border-line/20 bg-surface/80 text-text/80 text-[13px] font-medium tracking-wide shadow-sm hover:border-accent hover:text-accent transition-colors cursor-default">Private Investigation</span>
            <span className="px-4 py-1.5 rounded-full border border-line/20 bg-surface/80 text-text/80 text-[13px] font-medium tracking-wide shadow-sm hover:border-accent hover:text-accent transition-colors cursor-default">Access Control</span>
          </div>
        </div>
      </section>



      {/* ─────────────────────────────────────────────────────────────────
           EXPLORE PRACTICE (CARD GRID)
           ───────────────────────────────────────────────────────────────── */}
      <section id="explore" className="relative bg-bg py-16 lg:py-20 z-10 border-b border-line/15">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-10 reveal-up">
            <h2 className="serif text-5xl lg:text-7xl leading-[0.95] text-text">
              <span className="text-accent">Explore our</span> <span className="italic font-serif" style={{ fontStyle: "italic" }}>practice.</span>
            </h2>
            <p className="text-mute mt-6 leading-relaxed font-light">
              Security Systems Management Inc. delivers comprehensive protective services and facilities management. Discover our capabilities, sectors, and career opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* About */}
            <Link href="/about" className="glass-card flex flex-col group reveal-up" style={{ transitionDelay: "100ms" }}>
              <div className="flex items-center justify-between mb-6">
                <Building2 className="w-8 h-8 text-accent" />
                <ChevronRight className="w-5 h-5 text-mute2 group-hover:text-accent transition-colors group-hover:translate-x-1" />
              </div>
              <h3 className="serif text-3xl font-serif mb-3 text-text">The Company</h3>
              <p className="text-mute text-sm leading-relaxed font-light mb-6 flex-1">
                Learn about our history, leadership, and the standard of excellence we have maintained since 2013 across four jurisdictions.
              </p>
              <div className="mono text-xs text-accent uppercase tracking-wider">About Us</div>
            </Link>

            {/* Services */}
            <Link href="/services" className="glass-card flex flex-col group reveal-up" style={{ transitionDelay: "200ms" }}>
              <div className="flex items-center justify-between mb-6">
                <Shield className="w-8 h-8 text-accent" />
                <ChevronRight className="w-5 h-5 text-mute2 group-hover:text-accent transition-colors group-hover:translate-x-1" />
              </div>
              <h3 className="serif text-3xl font-serif mb-3 text-text">Protective Services</h3>
              <p className="text-mute text-sm leading-relaxed font-light mb-6 flex-1">
                From unarmed officers and mobile patrols to surveillance and access control. Custom security programs designed to your exact specifications.
              </p>
              <div className="mono text-xs text-accent uppercase tracking-wider">Explore Services</div>
            </Link>

            {/* SSM Academy */}
            <Link href="/ssm-academy" className="glass-card flex flex-col group reveal-up" style={{ transitionDelay: "300ms" }}>
              <div className="flex items-center justify-between mb-6">
                <GraduationCap className="w-8 h-8 text-accent" />
                <ChevronRight className="w-5 h-5 text-mute2 group-hover:text-accent transition-colors group-hover:translate-x-1" />
              </div>
              <h3 className="serif text-3xl font-serif mb-3 text-text">SSM Academy</h3>
              <p className="text-mute text-sm leading-relaxed font-light mb-6 flex-1">
                In-house Guard Card certification, employment readiness, and DOJ/FBI livescan training at our accredited Hayward campus.
              </p>
              <div className="mono text-xs text-accent uppercase tracking-wider">View Academy</div>
            </Link>

            {/* Careers */}
            <Link href="/career" className="glass-card flex flex-col group reveal-up" style={{ transitionDelay: "400ms" }}>
              <div className="flex items-center justify-between mb-6">
                <Users className="w-8 h-8 text-accent" />
                <ChevronRight className="w-5 h-5 text-mute2 group-hover:text-accent transition-colors group-hover:translate-x-1" />
              </div>
              <h3 className="serif text-3xl font-serif mb-3 text-text">Careers</h3>
              <p className="text-mute text-sm leading-relaxed font-light mb-6 flex-1">
                Work that matters. We hire steady, attentive people and invest in their training. Build a real career path with SSM.
              </p>
              <div className="mono text-xs text-accent uppercase tracking-wider">Open Positions</div>
            </Link>

            {/* Government */}
            <Link href="/government" className="glass-card flex flex-col group reveal-up" style={{ transitionDelay: "500ms" }}>
              <div className="flex items-center justify-between mb-6">
                <FileText className="w-8 h-8 text-accent" />
                <ChevronRight className="w-5 h-5 text-mute2 group-hover:text-accent transition-colors group-hover:translate-x-1" />
              </div>
              <h3 className="serif text-3xl font-serif mb-3 text-text">Government</h3>
              <p className="text-mute text-sm leading-relaxed font-light mb-6 flex-1">
                Capability statements and past performance summaries for federal, state, and municipal contracting officers.
              </p>
              <div className="mono text-xs text-accent uppercase tracking-wider">View Documents</div>
            </Link>

            {/* Contact */}
            <Link href="/contact" className="glass-card flex flex-col group reveal-up" style={{ transitionDelay: "600ms" }}>
              <div className="flex items-center justify-between mb-6">
                <MapPin className="w-8 h-8 text-accent" />
                <ChevronRight className="w-5 h-5 text-mute2 group-hover:text-accent transition-colors group-hover:translate-x-1" />
              </div>
              <h3 className="serif text-3xl font-serif mb-3 text-text">Contact & HQ</h3>
              <p className="text-mute text-sm leading-relaxed font-light mb-6 flex-1">
                Request a custom proposal or reach out to our 24/7 dispatch team. We respond to all inquiries within 72 hours.
              </p>
              <div className="mono text-xs text-accent uppercase tracking-wider">Get in Touch</div>
            </Link>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
           MAP IFRAME
           ───────────────────────────────────────────────────────────────── */}
      <section className="relative h-[420px] bg-surface2 border-t border-line/10 z-10 reveal-up">
        <iframe
          title="SSM HQ — Hayward, CA"
          src="https://maps.google.com/maps?q=350%20Winton%20Avenue,%20Hayward,%20California%2094544&t=&z=14&ie=UTF8&iwloc=&output=embed"
          className="absolute inset-0 w-full h-full opacity-80"
          style={{ border: 0, filter: "grayscale(1) contrast(1.1)" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="absolute top-6 left-6 lg:top-10 lg:left-10 bg-bg text-text p-6 max-w-xs border border-line/15 z-20">
          <div className="eyebrow text-accent">SSM Inc. · Headquarters</div>
          <div className="serif text-2xl mt-2 font-serif">350 Winton Avenue</div>
          <div className="mono text-xs text-text/60 mt-1">Hayward, California · 94544</div>
          <a
            href="https://maps.google.com/?q=350+Winton+Avenue,+Hayward,+CA"
            target="_blank"
            rel="noopener noreferrer"
            className="arrow-link mt-4 text-text hover:text-accent font-medium transition-colors"
          >
            Open in Maps
            <ChevronRight width="14" height="14" className="arr" />
          </a>
        </div>
      </section>
    </>
  );
}
