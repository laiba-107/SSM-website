import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import Link from "next/link";
import { Shield, Eye, ShieldAlert, Award, FileText } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Services",
  description: "24/7 Unarmed & Armed Security Guards, Mobile Patrol, and Security Services at competitive rates in the Bay Area.",
};

export default function ServicesPage() {
  return (
    <>
      {/* ─────────────────────────────────────────────────────────────────
           PAGE HEADER
           ───────────────────────────────────────────────────────────────── */}
      <section className="relative bg-bg pt-10 pb-4 overflow-hidden border-b border-line/15">
        <div className="absolute inset-0 pattern-ink opacity-60"></div>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif mb-4 uppercase tracking-wider text-text font-serif">Our Security Services</h1>
            <p className="text-xl text-mute font-normal">
              Providing 24/7 unarmed security guards, mobile patrols, and the latest security technology.
            </p>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
           SCOPE OF SERVICES & CAPABILITIES
           ───────────────────────────────────────────────────────────────── */}
      <Section className="bg-bg border-b border-line/15">
        <Container className="space-y-12">
          {/* Scope of services card */}
          <div className="card-premium max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif text-text mb-6">Scope of SSM Inc.'s Security Services</h2>
            <div className="w-20 h-0.5 bg-accent mb-6 rounded-full" />
            <p className="text-mute leading-relaxed mb-4 font-normal text-lg">
              Security Systems Management (SSM) Inc. has provided personnel security and facilities protection services since 2013. Today, SSM Inc. operates extensively across California, with active expansions underway in Washington D.C., Virginia, Texas, and internationally in the Fiji Islands.
            </p>
            <p className="text-mute leading-relaxed font-normal text-lg">
              We specialize in deploying highly trained and qualified unarmed security guards, loss prevention specialists, and undercover corporate officers. Over the last 12 years, SSM Inc. has designed top-tier security programs and consultations. Our dedicated management workforce maintains deep expertise, ensuring your property is continuously monitored and secured.
            </p>
            <div className="mt-10 image-placeholder h-80 sm:h-[400px]">
              <span>Image Placeholder (1200x800)</span>
            </div>
          </div>

          {/* Capabilities card */}
          <div className="card-premium max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif text-text mb-6 uppercase tracking-wider">
              Comprehensive Capabilities
            </h3>
            <div className="w-16 h-0.5 bg-accent mb-8 rounded-full" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 text-mute font-normal text-base">
              {[
                "Unarmed Security Officers",
                "Undercover Security Officers",
                "Bodyguard Services",
                "Patrol Services",
                "Bilingual Guards (multiple languages)",
                "Uniformed Officers",
                "Fully Accredited Security School",
                "Robust Training Program",
                "Government, Commercial, Industrial & Residential",
                "24 Hours / 7 Days a week Services",
                "Hourly, Daily, Weekly, Monthly, Yearly Contracts",
                "2-Way Radios",
                "Highly Trained Management team and staff",
                "Best Rate Guaranteed",
                "Full-Service Security Guards",
                "Private Investigation",
                "Surveillance and Tracking",
                "Employment Screenings",
                "Mandatory Drug Testing (and COVID-19 as applicable)",
                "Video Surveillance Specialists",
                "Fully Licensed and Insured"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 py-2 border-b border-line/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span className="font-normal">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology & Staff grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card-premium relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl" />
              <h3 className="text-xl font-serif text-text mb-4 group-hover:text-accent transition-colors font-serif">Latest Security Technology</h3>
              <p className="text-mute leading-relaxed font-normal text-sm sm:text-base">
                SSM Inc. equips all field agents with modern security equipment and mobile patrol tech, creating customized operational programs to match unique client sites. We offer comprehensive surveillance, smart check-points, and Detex technologies to guarantee your property's absolute protection.
              </p>
            </div>
            <div className="card-premium relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl" />
              <h3 className="text-xl font-serif text-text mb-4 group-hover:text-accent transition-colors font-serif">Highly Trained Staff</h3>
              <p className="text-mute leading-relaxed font-normal text-sm sm:text-base">
                Our guards undergo continuous, rigorous training to offer the highest grade of customer service and physical protection. We take great pride in our field execution, training our guards and patrol units to meticulously monitor, report, and intercept unauthorized activities on post.
              </p>
            </div>
          </div>

          {/* Valued capabilities card banner */}
          <div className="card-premium max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-[-10%] right-[-10%] w-[30%] h-[40%] rounded-full bg-accent/5 blur-[100px]" />
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h3 className="text-2xl font-serif text-text mb-6">Professional Security Guard Services</h3>
                <ul className="space-y-4 text-mute font-normal text-sm sm:text-base">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>The SSM Inc. performs thorough background checks on all security guards and officers.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>The SSM Inc. staff conduct required drug test screenings at all relevant locations including on post and upon hiring.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>The SSM Inc. offers all types of contracts depending on the clients’ needs (Hourly, Daily, Weekly, Monthly, and Yearly).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>The SSM Inc. offers an unmatched "best rate guarantee" options for its clients.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>The SSM Inc. provides 24- hour Dispatch with radio check every 30- minutes, or as required by each client.</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center p-8 bg-bg border border-line/15 rounded-xl">
                <h4 className="text-2xl font-serif text-text mb-3 font-serif">Need a Custom Program?</h4>
                <p className="text-mute mb-8 font-normal text-sm">
                  We provide free consultations to understand your unique security challenges and design a system that works for you.
                </p>
                <Link href="/contact" className="btn btn-brass">
                  Get a Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
