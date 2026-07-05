import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Shield, Target, Award, Building, FileText, Globe } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about SSM Inc., our mission, values, and our commitment to providing top-quality security services since 2013.",
};

export default function AboutPage() {
  return (
    <>
      {/* ─────────────────────────────────────────────────────────────────
           PAGE HEADER
           ───────────────────────────────────────────────────────────────── */}
      <section className="relative bg-bg pt-10 pb-4 overflow-hidden border-b border-line/15">
        <div className="absolute inset-0 pattern-ink opacity-60"></div>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif mb-4 uppercase tracking-wider text-text font-serif">About SSM Inc.</h1>
            <p className="text-xl text-mute font-normal">
              A trusted provider of elite security guard services and facilities management since 2013.
            </p>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
           ABOUT US TEXT SECTION
           ───────────────────────────────────────────────────────────────── */}
      <Section className="bg-bg border-b border-line/15">
        <Container>
          <div className="card-premium max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif text-text mb-6 uppercase tracking-wide">
              About Us
            </h2>
            <div className="w-20 h-0.5 bg-accent mb-8 rounded-full" />
            <div className="space-y-6 text-mute leading-relaxed text-lg font-normal text-justify">
              <p>
                Security Systems Management (SSM) Inc. is your top choice for qualified security guard services and facilities protection. Since 2013, SSM Inc. has provided outstanding security and facilities management services to government bodies, commercial spaces, industrial plants, and residential properties. As a full-service agency, we specialize in physical guards and mobile patrols, alongside running our professional training academy, managing databases, and deploying technological assets such as patrol vehicles and professional uniform support.
              </p>
              <p>
                As a minority-owned enterprise, SSM Inc. offers the precision and experience needed to align with strict client requirements, boasting corporate scalability to handle any deployment size. We maintain continuous 24 hours a day, 7 days a week operations including patrol routes, remote monitoring, and tactical tracking. Our security architects craft custom surveillance, deployment maps, and facilities management schedules uniquely customized for every location.
              </p>
            </div>
            
            <div className="mt-10 image-placeholder h-80 sm:h-[400px]">
              <span>Image Placeholder (1200x800)</span>
            </div>
          </div>
        </Container>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────
           PRIVACY POLICY SECTION
           ───────────────────────────────────────────────────────────────── */}
      <Section className="bg-bg border-b border-line/15" id="privacy-policy">
        <Container>
          <div className="card-premium max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif text-text mb-6 uppercase tracking-wide">
              Privacy Policy
            </h2>
            <div className="w-20 h-0.5 bg-accent mb-8 rounded-full" />
            
            <div className="space-y-8 text-mute font-normal">
              <p className="text-xl font-medium text-text italic border-l-4 border-accent pl-4 py-1 font-serif">
                "SMS opt-in or phone numbers for the purpose of SMS are not being shared with any third party and affiliate company for marketing purposes."
              </p>

              <div className="bg-bg p-8 rounded-lg border border-line/15 space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-text mb-2 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" /> 1 - SMS Consent Communication:
                  </h4>
                  <p className="pl-3.5 text-mute text-sm sm:text-base font-normal">Information (510-363-9189) obtained as part of the SMS consent process will not be shared with third parties for marketing purposes.</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-text mb-2 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" /> 2 - Types of SMS Communications:
                  </h4>
                  <div className="pl-3.5 space-y-2 text-mute text-sm sm:text-base font-normal">
                    <p>If consent has been given to receive text messages from Security Systems Management Inc, messages may be received related to the following:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Appointment reminders (if applicable)</li>
                      <li>Follow-up messages (if applicable)</li>
                      <li>Billing inquiries (if applicable)</li>
                      <li>Promotions or offers (if applicable)</li>
                    </ul>
                    <p>Reply STOP to opt out of SMS messaging at any time.</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-text mb-2 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" /> 3 - Message Frequency:
                  </h4>
                  <p className="pl-3.5 text-mute text-sm sm:text-base font-normal">Message frequency may vary depending on the type of communication. For example, you may receive up to [X] SMS messages per week related to your appointments/billing.</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-text mb-2 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" /> 4 - Potential Fees for SMS Messaging:
                  </h4>
                  <p className="pl-3.5 text-mute text-sm sm:text-base font-normal">Standard message and data rates may apply, depending on the carrier's pricing plan. These fees may vary if the message is sent domestically or internationally.</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-text mb-2 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" /> 5 - Opt-In Method:
                  </h4>
                  <p className="pl-3.5 mb-2 text-mute text-sm sm:text-base font-normal">Opt-in to receive SMS messages from Security Systems Management Inc can be done in the following ways:</p>
                  <ul className="list-disc pl-10 space-y-1 text-mute text-sm sm:text-base font-normal">
                    <li>Verbally, during a conversation</li>
                    <li>By submitting an online form</li>
                    <li>By filling out a paper form</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-text mb-2 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" /> 6 - Opt-Out Method:
                  </h4>
                  <p className="pl-3.5 text-mute text-sm sm:text-base font-normal">Opting out of receiving SMS messages can be done at any time by replying "STOP" to any SMS message received. Alternatively, direct contact can be made to request removal from the messaging list.</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-text mb-2 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" /> 7 - Help:
                  </h4>
                  <p className="pl-3.5 text-mute text-sm sm:text-base font-normal">For any issues, reply with the keyword HELP. Alternatively, help can be obtained directly from us at +1 (510) 363-9189. If SMS messages are not desired, the SMS consent box on forms can be left unchecked.</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-text mb-2 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" /> 8 - Standard Messaging Disclosures:
                  </h4>
                  <p className="pl-3.5 text-mute text-sm sm:text-base font-normal">Message and data rates may apply. Opt out at any time by texting "STOP." For assistance, text "HELP" or visit our Privacy Policy and Terms and Conditions pages. Message frequency may vary.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────
           LICENSE SECTION
           ───────────────────────────────────────────────────────────────── */}
      <Section className="bg-bg border-b border-line/15" id="license">
        <Container>
          <div className="card-premium max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl font-serif text-text mb-6 uppercase tracking-wide">
                License
              </h2>
              <div className="w-20 h-0.5 bg-accent mb-8 rounded-full" />
            </div>
            
            <div className="space-y-12 text-mute font-normal">
              {/* Texas */}
              <div className="space-y-4 bg-bg/40 p-6 rounded-lg border border-line/15">
                <h4 className="text-2xl font-semibold text-text font-serif">Licensed Security Provider in Texas</h4>
                <p className="text-sm sm:text-base font-normal">
                  Welcome to Security Systems Management Inc, your trusted and fully licensed security services provider in the state of Texas. With a strong commitment to safety, professionalism, and reliability, we are proud to offer a wide range of security solutions tailored to meet the needs of individuals, businesses, and communities across the region. Your security is our priority.
                </p>

                <h4 className="text-xl font-semibold text-text font-serif pt-4">Licensed by the Texas Department of Public Safety (DPS)</h4>
                <p className="text-sm sm:text-base font-normal">
                  Security Systems Management Inc is officially licensed by the Texas Department of Public Safety – Private Security Bureau (License Number: B12668001), ensuring that all our operations comply with the state's strict legal, ethical, and professional standards. Our licensing guarantees that:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base font-normal">
                  <li>All security personnel undergo extensive background checks and are certified in line with DPS guidelines.</li>
                  <li>We meet all state-mandated insurance and bonding requirements.</li>
                </ul>
              </div>

              {/* Virginia */}
              <div className="space-y-4 pt-8 border-t border-line/15">
                <h3 className="text-2xl font-serif text-text uppercase tracking-wide">Virginia Operations</h3>
                <h4 className="text-xl font-semibold text-accent font-medium font-serif">Officially Licensed by the Virginia State Corporation Commission</h4>
                <p className="text-sm sm:text-base font-normal">
                  At Security Systems Management Inc., we are proud to be officially licensed and registered with the Virginia State Corporation Commission (SCC) to legally transact business in the Commonwealth of Virginia. Our SCC registry guarantees transparency and strict compliance with corporate rules.
                </p>

                <div className="bg-bg p-6 rounded-lg border border-line/15 space-y-3 font-mono text-sm max-w-xl text-text">
                  <p><span className="text-accent font-bold">Entity Name:</span> Security Systems Management Inc.</p>
                  <p><span className="text-accent font-bold">Business Entity Type:</span> Corporation</p>
                  <p><span className="text-accent font-bold">SCC ID:</span> 11839637</p>
                  <p><span className="text-accent font-bold">Status:</span> Active</p>
                  <p><span className="text-accent font-bold">Jurisdiction:</span> Virginia</p>
                  <p><span className="text-accent font-bold">Date of Incorporation:</span> 05/01/2025</p>
                </div>
                <p className="text-sm">
                  You can verify our registration directly with the Virginia SCC at: 🔗 <a href="https://cis.scc.virginia.gov" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white transition-colors underline font-medium">https://cis.scc.virginia.gov</a>
                </p>
              </div>

              {/* Fiji */}
              <div className="space-y-4 pt-8 border-t border-line/15">
                <h3 className="text-2xl font-serif text-text font-serif">Fiji Islands Operations</h3>
                <p className="text-sm sm:text-base font-normal">
                  We're proud to extend our services to the Fiji Islands, where we've established a growing footprint in the security sector. From local businesses and resorts to public service buildings and private homes, our Fiji team is equipped with the tools and knowledge to deliver world-class protection tailored to island life.
                </p>
                <p className="text-sm sm:text-base font-normal">
                  Whether you're located in the states of California, Texas, Virginia U.S. or a remote island in Fiji, SSM is committed to securing what matters most to you. Our international experience allows us to deliver globally informed solutions that are locally adapted.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────
           VALUED CLIENTS SECTION
           ───────────────────────────────────────────────────────────────── */}
      <Section className="bg-bg border-t border-line/15 py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-text mb-6 uppercase tracking-wide">
              Some of SSM's Valued Clients
            </h2>
            <div className="w-20 h-0.5 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-80 hover:opacity-100 transition-opacity">
            {/* Enterprise Rent-A-Car */}
            <div className="flex flex-col items-center justify-center space-y-4 group">
               <div className="bg-surface border border-line/15 p-6 rounded-lg w-48 h-24 flex items-center justify-center grayscale hover:grayscale-0 hover:border-accent/30 transition-all shadow-xl">
                 <span className="text-green-600 font-black text-xl tracking-tighter">enterprise</span>
               </div>
               <span className="text-mute text-sm font-semibold group-hover:text-accent transition-colors">Enterprise Rent-A-Car</span>
            </div>

            {/* NOAA */}
            <div className="flex flex-col items-center justify-center space-y-4 group">
               <div className="bg-surface border border-line/15 p-6 rounded-lg w-48 h-24 flex items-center justify-center grayscale hover:grayscale-0 hover:border-accent/30 transition-all shadow-xl">
                 <span className="text-blue-500 font-bold text-2xl tracking-widest">NOAA</span>
               </div>
               <span className="text-mute text-sm font-semibold group-hover:text-accent transition-colors">NOAA</span>
            </div>

            {/* Sheraton */}
            <div className="flex flex-col items-center justify-center space-y-4 group">
               <div className="bg-surface border border-line/15 p-6 rounded-lg w-48 h-24 flex items-center justify-center grayscale hover:grayscale-0 hover:border-accent/30 transition-all shadow-xl">
                 <div className="flex flex-col items-center">
                   <span className="text-text text-2xl mb-1 font-semibold">S</span>
                   <span className="text-mute2 tracking-[0.3em] text-[10px]">SHERATON</span>
                 </div>
               </div>
               <span className="text-mute text-sm font-semibold group-hover:text-accent transition-colors">Sheraton</span>
            </div>

            {/* Alameda Point Collaborative */}
            <div className="flex flex-col items-center justify-center space-y-4 group">
               <div className="bg-surface border border-line/15 p-6 rounded-lg w-48 h-24 flex flex-col items-center justify-center grayscale hover:grayscale-0 hover:border-accent/30 transition-all shadow-xl">
                  <span className="text-red-500 font-bold text-center text-sm leading-tight">Alameda Point<br/>Collaborative</span>
               </div>
               <span className="text-mute text-sm font-semibold group-hover:text-accent transition-colors">Alameda Point Collaborative</span>
            </div>

            {/* BAART Programs */}
            <div className="flex flex-col items-center justify-center space-y-4 group">
               <div className="bg-surface border border-line/15 p-6 rounded-lg w-48 h-24 flex items-center justify-center grayscale hover:grayscale-0 hover:border-accent/30 transition-all shadow-xl">
                  <span className="text-teal-600 font-bold text-base text-center">BAART<br/>Programs</span>
               </div>
               <span className="text-mute text-sm font-semibold group-hover:text-accent transition-colors">BAART Programs</span>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
