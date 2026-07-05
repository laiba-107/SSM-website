import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FileText, Download, Shield } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Government Services",
  description: "Download SSM Inc. Government Brochures and Services.",
};

export default function GovernmentPage() {
  return (
    <>
      {/* ─────────────────────────────────────────────────────────────────
           PAGE HEADER
           ───────────────────────────────────────────────────────────────── */}
      <section className="relative bg-bg pt-10 pb-4 overflow-hidden border-b border-line/15">
        <div className="absolute inset-0 pattern-ink opacity-60"></div>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif mb-4 uppercase tracking-wider text-text font-serif">
              Government Contracting
            </h1>
            <p className="text-xl text-mute font-normal">
              Official publications, capabilities statements, and corporate brochures.
            </p>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
           GOVERNMENT BANNER IMAGE
           ───────────────────────────────────────────────────────────────── */}
      <section className="bg-bg border-b border-line/15">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 py-10">
          <div className="image-placeholder h-56 sm:h-72">
            <span>Image Placeholder — Federal Building / Capitol (1200x500)</span>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
           CAPABILITY LINKS
           ───────────────────────────────────────────────────────────────── */}
      <Section className="bg-bg border-b border-line/15 min-h-[50vh]">
        <Container>
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Capability Statement Downloads */}
            <div className="card-premium">
              <div className="mb-10 text-center sm:text-left">
                <h2 className="text-2xl font-serif text-text">Capability Statements &amp; Brochures</h2>
                <p className="text-mute text-sm mt-1 font-normal">Contracting officers and partners can download our official registry materials below.</p>
              </div>

              <div className="space-y-6">
                {/* Document 1 */}
                <a 
                  href="https://img1.wsimg.com/blobby/go/94663fab-43bc-4548-8196-d416ddebf9fc/E6.%20Brochure_Security%20Systems%20Management%20Inc.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 bg-bg/40 p-6 border border-line/15 hover:border-accent/30 group transition-all duration-300 rounded-lg"
                >
                  <div className="bg-surface border border-line/15 p-4 rounded text-mute group-hover:text-accent group-hover:border-accent transition-all duration-300 shrink-0 shadow">
                    <FileText className="w-8 h-8" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-serif text-text mb-1 transition-colors group-hover:text-accent truncate font-serif">E6. Brochure_Security Systems Management Inc.pdf</h3>
                    <span className="text-accent text-xs font-semibold flex items-center gap-2 group-hover:text-white transition-colors font-mono">
                      <Download className="w-3.5 h-3.5" /> DOWNLOAD PDF (4.2 MB)
                    </span>
                  </div>
                </a>

                {/* Document 2 */}
                <a 
                  href="https://img1.wsimg.com/blobby/go/94663fab-43bc-4548-8196-d416ddebf9fc/SSm2-0001.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 bg-bg/40 p-6 border border-line/15 hover:border-accent/30 group transition-all duration-300 rounded-lg"
                >
                  <div className="bg-surface border border-line/15 p-4 rounded text-mute group-hover:text-accent group-hover:border-accent transition-all duration-300 shrink-0 shadow">
                    <FileText className="w-8 h-8" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-serif text-text mb-1 transition-colors group-hover:text-accent truncate font-serif">SSm2-0001.pdf</h3>
                    <span className="text-accent text-xs font-semibold flex items-center gap-2 group-hover:text-white transition-colors font-mono">
                      <Download className="w-3.5 h-3.5" /> DOWNLOAD PDF (1.8 MB)
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Procurement Detail Box */}
            <div className="card-premium grid sm:grid-cols-2 gap-8 text-sm text-mute font-normal">
              <div>
                <h4 className="text-base font-semibold text-text mb-2 flex items-center gap-2 font-serif">
                  <Shield width="16" height="16" className="text-accent" />
                  NAICS Codes
                </h4>
                <p className="font-normal text-mute text-xs mb-2">SSM Inc. operates primarily under the following North American Industry Classification System identifiers:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 font-mono text-xs text-text font-normal">
                  <li>561612 — Protective Guard Services</li>
                  <li>561611 — Investigation Services</li>
                  <li>561621 — Security Systems Services</li>
                </ul>
              </div>
              <div>
                <h4 className="text-base font-semibold text-text mb-2 flex items-center gap-2 font-serif">
                  <Shield width="16" height="16" className="text-accent" />
                  Corporate Identification
                </h4>
                <p className="font-normal text-mute text-xs mb-2">Verify active registrations or retrieve details for municipal bid listings:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 font-mono text-xs text-text font-normal">
                  <li>DUNS &nbsp;·&nbsp; 07-849-0639</li>
                  <li>CAGE &nbsp;·&nbsp; 7Y6D1</li>
                  <li>Minority Owned Business Enterprise (MBE)</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
