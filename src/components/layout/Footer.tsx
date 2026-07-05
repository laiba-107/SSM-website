"use client";

import React from "react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface text-text border-t border-line/15 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-20 pb-10">
        {/* big mark + tagline */}
        <div className="grid lg:grid-cols-12 gap-10 pb-16 border-b border-line/15">
          <div className="lg:col-span-7">
            <div className="serif text-[80px] sm:text-[120px] lg:text-[160px] leading-[0.85] tracking-tightest text-text selection:bg-accent selection:text-bg">
              SSM<span className="text-accent">.</span>
            </div>
            <p className="mt-6 max-w-md text-mute leading-relaxed font-light text-sm sm:text-base">
              Licensed protective services &amp; facilities management. Government, commercial, industrial &amp; residential. Operating since 2013.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-10">
            <div>
              <div className="eyebrow text-mute2 mb-5">Sitemap</div>
              <ul className="space-y-2.5 text-sm font-light">
                <li><Link href="/" className="text-text/80 hover:text-accent transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-text/80 hover:text-accent transition-colors">About Us</Link></li>
                <li><Link href="/services" className="text-text/80 hover:text-accent transition-colors">Services</Link></li>
                <li><Link href="/government" className="text-text/80 hover:text-accent transition-colors">Government</Link></li>
                <li><Link href="/career" className="text-text/80 hover:text-accent transition-colors">Careers</Link></li>
                <li><Link href="/ssm-academy" className="text-text/80 hover:text-accent transition-colors">SSM Academy</Link></li>
                <li><Link href="/contact" className="text-text/80 hover:text-accent transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <div className="eyebrow text-mute2 mb-5">Reach Us</div>
              <ul className="space-y-3 text-sm text-text/80 font-light">
                <li><a href="tel:5103639189" className="hover:text-accent transition-colors">(510) 363-9189</a></li>
                <li><a href="tel:5107541245" className="hover:text-accent transition-colors">(510) 754-1245</a></li>
                <li><a href="mailto:ssm@securitysystemsmanagement.us" className="hover:text-accent transition-colors break-all">ssm@securitysystemsmanagement.us</a></li>
                <li className="text-mute pt-2 not-italic">
                  350 Winton Avenue<br />
                  Hayward, CA 94544
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* bottom row */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-mute text-xs mono">
            © 2013 — <span>{currentYear}</span> Security Systems Management Inc. · All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-mute text-xs">
            <Link href="/about#privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/about#license" className="hover:text-accent transition-colors">Licensing</Link>
            <Link href="/about#sms-terms" className="hover:text-accent transition-colors">SMS Terms</Link>
            <span className="hidden md:inline text-mute/30">·</span>
            <span className="mono uppercase tracking-[0.1em] text-[10px] text-accent">CA BSIS · TX DPS · VA SCC</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
