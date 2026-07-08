"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Shield, ChevronRight, MapPin, FileText, ArrowRight, Building2, GraduationCap, Users, Lock, Target, Phone } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export default function Home() {
  return (
    <>
      {/* ─────────────────────────────────────────────────────────────────
           PREMIUM HERO SECTION
           ───────────────────────────────────────────────────────────────── */}
      <section id="top" className="relative bg-bg text-text overflow-hidden min-h-[90vh] flex items-center pt-20 pb-16">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero-bg.png" 
            alt="Corporate Security" 
            fill 
            priority
            className="object-cover object-center opacity-40 mix-blend-luminosity scale-105 transform origin-center transition-transform duration-[20s] hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg/60 via-bg/80 to-bg"></div>
          <div className="absolute inset-0 pattern-grid opacity-20"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent"></div>
          {/* Gold accent radial glow */}
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 60% 50%, rgba(212,175,55,0.13) 0%, rgba(212,175,55,0.04) 50%, transparent 80%)" }}></div>
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)", filter: "blur(60px)" }}></div>
        </div>

        <div className="relative max-w-[1400px] w-full mx-auto px-6 lg:px-10 z-10 flex flex-col pt-10 -mt-16 sm:-mt-24">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 reveal-up visible">
              
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-line/30 bg-surface/40 backdrop-blur-md mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                <span className="text-xs font-mono uppercase tracking-widest text-text/80">Licensed & Bonded · 24/7 Operations</span>
              </div>

              <h1 className="serif text-[56px] sm:text-[80px] lg:text-[100px] leading-[1.0] text-text drop-shadow-2xl font-bold">
                To protect with <em className="text-accent not-italic font-serif">courage.</em><br />
                To serve with <em className="text-accent not-italic font-serif">compassion.</em>
              </h1>

              <p className="mt-6 max-w-3xl text-mute text-[22px] sm:text-[24px] leading-relaxed font-light drop-shadow-lg">
                Elite 24/7 protective services and facilities management for government, commercial, industrial and residential clients. Since 2013, SSM Inc. has designed bespoke security programs that meet exact specifications — without exception.
              </p>

              <div className="mt-12 flex flex-wrap items-center gap-6">
                <Link href="/contact" className="btn btn-brass text-[17px] !px-8 !py-4 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                  Request a Proposal
                  <ArrowRight width="20" height="20" />
                </Link>
                <Link href="#explore" className="btn btn-outline border-line/50 hover:border-accent hover:text-accent text-[17px] !px-8 !py-4">
                  Explore Services
                </Link>
                <a href="tel:5103639189" className="ml-2 hidden sm:inline-flex items-center gap-3 text-text/80 hover:text-accent transition-colors">
                  <div className="w-10 h-10 rounded-full border border-line flex items-center justify-center bg-surface/50">
                    <Phone className="w-4 h-4 text-accent" />
                  </div>
                  <div className="flex flex-col">
                    <span className="mono text-[10px] text-mute2 uppercase tracking-widest">24/7 Dispatch</span>
                    <span className="serif text-xl">(510) 363-9189</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Security Officer Image — right side */}
            <div className="hidden lg:flex lg:col-span-5 items-end justify-center relative reveal-up visible" style={{ transitionDelay: "200ms" }}>
              {/* Gold ambient glow behind image */}
              <div className="absolute inset-0 rounded-3xl" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 80%, rgba(212,175,55,0.25) 0%, rgba(212,175,55,0.08) 50%, transparent 75%)", filter: "blur(30px)" }}></div>
              {/* Corner accent lines */}
              <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-accent/50 rounded-tr-xl"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-accent/50 rounded-bl-xl"></div>
              <div className="relative w-full max-w-[420px] h-[580px] rounded-2xl overflow-hidden border border-accent/20 shadow-[0_0_60px_rgba(212,175,55,0.15)]">
                <Image
                  src="/hero-officer.png"
                  alt="SSM Professional Security Officer"
                  fill
                  priority
                  className="object-cover object-top"
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg/80 to-transparent"></div>
                {/* Badge overlay */}
                <div className="absolute bottom-6 left-6 right-6 glass-effect rounded-xl px-5 py-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center shrink-0">
                    <Shield className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="mono text-[10px] uppercase tracking-widest text-accent font-bold">SSM Certified Officer</div>
                    <div className="text-text text-sm font-medium mt-0.5">Fully Licensed · BSIS · CA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Stat Bar */}
          <div className="mt-20 lg:mt-28 grid grid-cols-2 lg:grid-cols-4 gap-px bg-line/20 rounded-xl overflow-hidden glass-effect border border-line/30 reveal-up visible" style={{ transitionDelay: "150ms" }}>
            <div className="bg-surface/40 backdrop-blur-md p-6 lg:p-8 hover:bg-surface/60 transition-colors">
              <div className="flex items-baseline gap-1">
                <span className="serif text-4xl lg:text-5xl text-text font-bold">
                  <AnimatedCounter value={12} duration={2500} />
                </span>
                <span className="text-accent text-3xl font-serif font-bold">+</span>
              </div>
              <div className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-accent mt-3">Years of operation</div>
              <div className="text-mute text-[12px] mt-1 font-normal">Continuous service since 2013</div>
            </div>
            <div className="bg-surface/40 backdrop-blur-md p-6 lg:p-8 hover:bg-surface/60 transition-colors">
              <div className="serif text-4xl lg:text-5xl text-text font-bold">24/7</div>
              <div className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-accent mt-3">Dispatch Center</div>
              <div className="text-mute text-[12px] mt-1 font-normal">Radio check every 30 mins</div>
            </div>
            <div className="bg-surface/40 backdrop-blur-md p-6 lg:p-8 hover:bg-surface/60 transition-colors">
              <div className="flex items-baseline gap-1">
                <span className="serif text-4xl lg:text-5xl text-text font-bold">
                  0<AnimatedCounter value={6} duration={2000} />
                </span>
              </div>
              <div className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-accent mt-3">Languages Spoken</div>
              <div className="text-mute text-[12px] mt-1 font-normal">Bilingual officers on staff</div>
            </div>
            <div className="bg-surface/40 backdrop-blur-md p-6 lg:p-8 hover:bg-surface/60 transition-colors">
              <div className="flex items-baseline gap-1">
                <span className="serif text-4xl lg:text-5xl text-text font-bold">
                  <AnimatedCounter value={100} duration={3000} />
                </span>
                <span className="text-accent text-3xl font-serif font-bold">%</span>
              </div>
              <div className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-accent mt-3">Best Rate</div>
              <div className="text-mute text-[12px] mt-1 font-normal">Guarantee on all contracts</div>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
           CLIENT LOGO MARQUEE (Post-Hero)
           ───────────────────────────────────────────────────────────────── */}
      <section className="bg-accent py-12 border-y border-accent/20 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10 reveal-up">
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-[0.15em] text-bg">Trusted By Leading Organizations</h2>
            <span className="h-px flex-1 bg-bg/30 hidden md:block"></span>
          </div>
          <div className="relative overflow-hidden reveal-up" style={{ transitionDelay: "100ms" }}>
            <div className="marquee-track flex items-center gap-16 lg:gap-24 whitespace-nowrap opacity-80 hover:opacity-100 transition-opacity duration-500">
              <span className="serif text-2xl lg:text-3xl text-bg">Enterprise Rent-A-Car</span><span className="text-bg/50 text-2xl">·</span>
              <span className="mono uppercase tracking-[0.25em] text-bg text-sm">NOAA</span><span className="text-bg/50 text-2xl">·</span>
              <span className="serif text-2xl lg:text-3xl text-bg">Sheraton</span><span className="text-bg/50 text-2xl">·</span>
              <span className="text-bg text-sm font-semibold tracking-wider">ALAMEDA POINT</span><span className="text-bg/50 text-2xl">·</span>
              <span className="serif text-2xl lg:text-3xl text-bg">BAART Programs</span><span className="text-bg/50 text-2xl">·</span>
              <span className="mono uppercase tracking-[0.25em] text-bg text-sm">U.S. Dept. of Commerce</span><span className="text-bg/50 text-2xl">·</span>
              <span className="serif text-2xl lg:text-3xl text-bg">City of Hayward</span><span className="text-bg/50 text-2xl">·</span>
              {/* Duplicate for infinite scroll */}
              <span className="serif text-2xl lg:text-3xl text-bg">Enterprise Rent-A-Car</span><span className="text-bg/50 text-2xl">·</span>
              <span className="mono uppercase tracking-[0.25em] text-bg text-sm">NOAA</span><span className="text-bg/50 text-2xl">·</span>
              <span className="serif text-2xl lg:text-3xl text-bg">Sheraton</span><span className="text-bg/50 text-2xl">·</span>
              <span className="text-bg text-sm font-semibold tracking-wider">ALAMEDA POINT</span><span className="text-bg/50 text-2xl">·</span>
              <span className="serif text-2xl lg:text-3xl text-bg">BAART Programs</span><span className="text-bg/50 text-2xl">·</span>
              <span className="mono uppercase tracking-[0.25em] text-bg text-sm">U.S. Dept. of Commerce</span><span className="text-bg/50 text-2xl">·</span>
              <span className="serif text-2xl lg:text-3xl text-bg">City of Hayward</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
           WHY SSM (TRUST SECTION)
           ───────────────────────────────────────────────────────────────── */}
      <section className="bg-surface2 relative py-20 lg:py-28 z-10 border-b border-line/15">
        <div className="absolute inset-0 pattern-ink opacity-30"></div>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20 reveal-up">
            <h2 className="serif text-5xl lg:text-7xl leading-[1.1] text-text font-bold">
              The Standard of <span className="text-gradient-gold">Excellence.</span>
            </h2>
            <p className="text-mute mt-8 leading-relaxed font-normal text-2xl">
              We don't just provide guards; we engineer comprehensive security solutions. Our commitment to rigorous training and operational oversight sets us apart.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Shield className="w-12 h-12 text-accent" />,
                title: "Fully Licensed & Bonded",
                desc: "Operating with top-tier credentials across California (BSIS), Texas (DPS), and Virginia (SCC)."
              },
              {
                icon: <Target className="w-12 h-12 text-accent" />,
                title: "SSM Academy Trained",
                desc: "Our officers are trained in-house at our accredited Hayward campus, ensuring absolute quality control."
              },
              {
                icon: <Lock className="w-12 h-12 text-accent" />,
                title: "Uncompromising Integrity",
                desc: "A steadfast commitment to accountability with a 100% best-rate guarantee on all major contracts."
              }
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-10 rounded-2xl border-2 border-line bg-surface/50 hover:bg-surface hover:border-accent transition-all duration-300 reveal-up shadow-lg" style={{ transitionDelay: `${(idx + 1) * 100}ms` }}>
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-surface2 to-bg flex items-center justify-center border-2 border-line/40 shadow-inner mb-8">
                  {feature.icon}
                </div>
                <h3 className="serif text-3xl font-bold mb-5 text-text">{feature.title}</h3>
                <p className="text-mute text-lg leading-relaxed font-normal">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
           EXPLORE PRACTICE (CARD GRID)
           ───────────────────────────────────────────────────────────────── */}
      <section id="explore" className="relative bg-bg py-20 lg:py-28 z-10 border-b border-line/15">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 reveal-up">
            <div className="max-w-2xl">
              <div className="eyebrow text-accent mb-4">Our Practice Areas</div>
              <h2 className="serif text-5xl lg:text-7xl leading-[1.1] text-text">
                Comprehensive <span className="italic font-serif text-mute2" style={{ fontStyle: "italic" }}>Capabilities.</span>
              </h2>
            </div>
            <Link href="/services" className="btn btn-outline border-line/50 hover:border-accent hover:text-accent shrink-0">
              View All Services
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* About */}
            <Link href="/about" className="glass-card flex flex-col group reveal-up" style={{ transitionDelay: "100ms" }}>
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-full border border-line/30 flex items-center justify-center bg-surface2/50 group-hover:border-accent/50 group-hover:bg-accent/10 transition-colors">
                  <Building2 className="w-6 h-6 text-accent" />
                </div>
                <ChevronRight className="w-5 h-5 text-mute2 group-hover:text-accent transition-colors group-hover:translate-x-1" />
              </div>
              <h3 className="serif text-3xl font-serif mb-4 text-text group-hover:text-gradient-gold">The Company</h3>
              <p className="text-mute text-sm leading-relaxed font-light mb-8 flex-1">
                Learn about our history, leadership, and the standard of excellence we have maintained since 2013 across four jurisdictions.
              </p>
              <div className="mono text-xs text-accent uppercase tracking-wider font-semibold">About Us</div>
            </Link>

            {/* Services */}
            <Link href="/services" className="glass-card flex flex-col group reveal-up" style={{ transitionDelay: "200ms" }}>
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-full border border-line/30 flex items-center justify-center bg-surface2/50 group-hover:border-accent/50 group-hover:bg-accent/10 transition-colors">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <ChevronRight className="w-5 h-5 text-mute2 group-hover:text-accent transition-colors group-hover:translate-x-1" />
              </div>
              <h3 className="serif text-3xl font-serif mb-4 text-text group-hover:text-gradient-gold">Protective Services</h3>
              <p className="text-mute text-sm leading-relaxed font-light mb-8 flex-1">
                From unarmed officers and mobile patrols to surveillance and access control. Custom security programs designed to your exact specifications.
              </p>
              <div className="mono text-xs text-accent uppercase tracking-wider font-semibold">Explore Services</div>
            </Link>

            {/* SSM Academy */}
            <Link href="/ssm-academy" className="glass-card flex flex-col group reveal-up" style={{ transitionDelay: "300ms" }}>
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-full border border-line/30 flex items-center justify-center bg-surface2/50 group-hover:border-accent/50 group-hover:bg-accent/10 transition-colors">
                  <GraduationCap className="w-6 h-6 text-accent" />
                </div>
                <ChevronRight className="w-5 h-5 text-mute2 group-hover:text-accent transition-colors group-hover:translate-x-1" />
              </div>
              <h3 className="serif text-3xl font-serif mb-4 text-text group-hover:text-gradient-gold">SSM Academy</h3>
              <p className="text-mute text-sm leading-relaxed font-light mb-8 flex-1">
                In-house Guard Card certification, employment readiness, and DOJ/FBI livescan training at our accredited Hayward campus.
              </p>
              <div className="mono text-xs text-accent uppercase tracking-wider font-semibold">View Academy</div>
            </Link>

            {/* Careers */}
            <Link href="/career" className="glass-card flex flex-col group reveal-up" style={{ transitionDelay: "400ms" }}>
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-full border border-line/30 flex items-center justify-center bg-surface2/50 group-hover:border-accent/50 group-hover:bg-accent/10 transition-colors">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <ChevronRight className="w-5 h-5 text-mute2 group-hover:text-accent transition-colors group-hover:translate-x-1" />
              </div>
              <h3 className="serif text-3xl font-serif mb-4 text-text group-hover:text-gradient-gold">Careers</h3>
              <p className="text-mute text-sm leading-relaxed font-light mb-8 flex-1">
                Work that matters. We hire steady, attentive people and invest in their training. Build a real career path with SSM.
              </p>
              <div className="mono text-xs text-accent uppercase tracking-wider font-semibold">Open Positions</div>
            </Link>

            {/* Government */}
            <Link href="/government" className="glass-card flex flex-col group reveal-up" style={{ transitionDelay: "500ms" }}>
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-full border border-line/30 flex items-center justify-center bg-surface2/50 group-hover:border-accent/50 group-hover:bg-accent/10 transition-colors">
                  <FileText className="w-6 h-6 text-accent" />
                </div>
                <ChevronRight className="w-5 h-5 text-mute2 group-hover:text-accent transition-colors group-hover:translate-x-1" />
              </div>
              <h3 className="serif text-3xl font-serif mb-4 text-text group-hover:text-gradient-gold">Government</h3>
              <p className="text-mute text-sm leading-relaxed font-light mb-8 flex-1">
                Capability statements and past performance summaries for federal, state, and municipal contracting officers.
              </p>
              <div className="mono text-xs text-accent uppercase tracking-wider font-semibold">View Documents</div>
            </Link>

            {/* Contact */}
            <Link href="/contact" className="glass-card flex flex-col group reveal-up" style={{ transitionDelay: "600ms" }}>
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-full border border-line/30 flex items-center justify-center bg-surface2/50 group-hover:border-accent/50 group-hover:bg-accent/10 transition-colors">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <ChevronRight className="w-5 h-5 text-mute2 group-hover:text-accent transition-colors group-hover:translate-x-1" />
              </div>
              <h3 className="serif text-3xl font-serif mb-4 text-text group-hover:text-gradient-gold">Contact & HQ</h3>
              <p className="text-mute text-sm leading-relaxed font-light mb-8 flex-1">
                Request a custom proposal or reach out to our 24/7 dispatch team. We respond to all inquiries within 72 hours.
              </p>
              <div className="mono text-xs text-accent uppercase tracking-wider font-semibold">Get in Touch</div>
            </Link>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
           CTA BANNER
           ───────────────────────────────────────────────────────────────── */}
      <section className="relative py-20 z-10 overflow-hidden bg-accent">
        <div className="absolute inset-0 pattern-grid opacity-20 mix-blend-overlay"></div>
        
        <div className="relative max-w-4xl mx-auto px-6 text-center z-10 reveal-up">
          <h2 className="serif text-4xl lg:text-6xl text-bg drop-shadow-sm mb-6">
            Ready to Secure Your Future?
          </h2>
          <p className="text-bg/80 text-lg mb-10 max-w-2xl mx-auto font-medium">
            Contact our security consultants today for a comprehensive risk assessment and custom proposal tailored to your specific needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn bg-bg text-text hover:bg-surface hover:text-accent border border-transparent shadow-xl">
              Request a Proposal
            </Link>
            <a href="tel:5103639189" className="btn bg-transparent text-bg border-bg/30 hover:bg-bg/10">
              Call (510) 363-9189
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
           MAP IFRAME
           ───────────────────────────────────────────────────────────────── */}
      <section className="relative h-[500px] bg-bg z-10 reveal-up">
        <iframe
          title="SSM HQ — Hayward, CA"
          src="https://maps.google.com/maps?q=350%20Winton%20Avenue,%20Hayward,%20California%2094544&t=&z=14&ie=UTF8&iwloc=&output=embed"
          className="absolute inset-0 w-full h-full opacity-60 mix-blend-luminosity"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="absolute top-8 left-6 lg:top-12 lg:left-12 glass-effect p-8 max-w-sm rounded-xl z-20 shadow-2xl border-accent/20">
          <div className="eyebrow text-accent mb-2">SSM Inc. · Headquarters</div>
          <div className="serif text-3xl mt-2 font-serif text-text">350 Winton Avenue</div>
          <div className="mono text-sm text-mute mt-3 leading-relaxed">Hayward, California · 94544<br/>United States</div>
          <div className="mt-6 pt-6 border-t border-line/30">
            <a
              href="https://maps.google.com/?q=350+Winton+Avenue,+Hayward,+CA"
              target="_blank"
              rel="noopener noreferrer"
              className="arrow-link text-accent hover:text-accentL font-medium transition-colors text-sm uppercase tracking-wider"
            >
              Get Directions
              <ChevronRight width="16" height="16" className="arr" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
