"use client";

import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Phone, Mail, MapPin, Clock, Check, Send } from "lucide-react";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <>
      {/* ─────────────────────────────────────────────────────────────────
           PAGE HEADER
           ───────────────────────────────────────────────────────────────── */}
      <section className="relative bg-bg pt-10 pb-4 overflow-hidden border-b border-line/15">
        <div className="absolute inset-0 pattern-ink opacity-60"></div>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif mb-4 uppercase tracking-wider text-text font-serif">Contact Us</h1>
            <p className="text-xl text-mute font-normal">
              Ready to secure your future? Reach out to our team for a free consultation.
            </p>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
           OFFICE IMAGE PLACEHOLDER
           ───────────────────────────────────────────────────────────────── */}
      <section className="bg-bg border-b border-line/15">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 py-10">
          <div className="image-placeholder h-64 sm:h-[320px]">
            <span>Image Placeholder — SSM Office / Team Photo (1400x600)</span>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
           GET IN TOUCH & QUOTE FORM
           ───────────────────────────────────────────────────────────────── */}
      <Section className="bg-bg border-b border-line/15">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Information */}
            <div className="card-premium flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-serif text-text mb-6">Get In Touch</h2>
                <div className="w-20 h-0.5 bg-accent mb-8 rounded-full" />
                <p className="text-mute leading-relaxed mb-10 font-normal text-base">
                  We love our customers, so feel free to visit during normal business hours or contact us via phone or email for immediate assistance. Our 24/7 dispatch is always ready to respond.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 border border-line/15 bg-bg/50 flex items-center justify-center text-accent rounded-lg shadow-sm">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-serif text-text mb-1 font-serif">Phone Dispatch</h3>
                      <p className="text-mute font-normal mb-1">Main: <a href="tel:5103639189" className="text-text hover:text-accent transition-colors font-semibold">(510) 363-9189</a></p>
                      <p className="text-mute font-normal">Alt: <a href="tel:5107541245" className="text-text hover:text-accent transition-colors font-semibold">(510) 754-1245</a></p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 border border-line/15 bg-bg/50 flex items-center justify-center text-accent rounded-lg shadow-sm">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-serif text-text mb-1 font-serif">Email Support</h3>
                      <a href="mailto:ssm@securitysystemsmanagement.us" className="text-mute font-normal hover:text-accent transition-colors break-all text-sm">
                        ssm@securitysystemsmanagement.us
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 border border-line/15 bg-bg/50 flex items-center justify-center text-accent rounded-lg shadow-sm">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-serif text-text mb-1 font-serif">Headquarters</h3>
                      <p className="text-mute font-normal leading-relaxed text-sm sm:text-base">
                        Security Systems Management Inc.<br />
                        350 Winton Avenue<br />
                        Hayward, California 94544
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 border border-line/15 bg-bg/50 flex items-center justify-center text-accent rounded-lg shadow-sm">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-serif text-text mb-1 font-serif">Business Hours</h3>
                      <div className="text-mute font-normal space-y-1 text-sm font-mono">
                        <p>Mon - Fri: 08:30 am – 05:00 pm</p>
                        <p className="text-mute2">Sat & Sun: Closed (Dispatch active)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card-premium relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl" />
              <h2 className="text-2xl font-serif text-text mb-6 uppercase tracking-wider font-serif">Request a Quote</h2>
              
              {formSubmitted ? (
                <div className="text-center p-8 border border-accent/20 bg-bg/40 rounded-lg">
                  <Check className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h4 className="serif text-3xl font-serif mb-2">Message Sent!</h4>
                  <p className="text-mute text-sm max-w-sm mx-auto mt-2 font-normal">
                    Thank you, {firstName}. Your message has been sent to our dispatch managers. We will review your request and contact you within 72 hours.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFirstName("");
                      setLastName("");
                      setEmail("");
                      setPhone("");
                      setService("");
                      setMessage("");
                    }}
                    className="btn btn-outline mt-8 text-xs py-2 px-4 rounded border-line"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-text/75 block">First Name</label>
                      <input 
                        type="text" 
                        placeholder="Jordan"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="field field-dark"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-text/75 block">Last Name</label>
                      <input 
                        type="text" 
                        placeholder="Reyes"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="field field-dark"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-text/75 block">Email Address *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="jordan@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="field field-dark"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-text/75 block">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="(510) 363-9189"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="field field-dark"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-text/75 block">Service Needed</label>
                    <select 
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="field field-dark bg-bg cursor-pointer"
                    >
                      <option value="">Select a service...</option>
                      <option value="unarmed">Unarmed Security Guards</option>
                      <option value="patrol">Mobile Patrol</option>
                      <option value="events">Event Security</option>
                      <option value="facilities">Facilities Management</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-text/75 block">Message</label>
                    <textarea 
                      rows={4}
                      placeholder="Tell us about your security needs..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="field field-dark"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-brass w-full flex items-center justify-center gap-2">
                    <Send width="14" height="14" /> Send Message
                  </button>
                  
                  <div className="text-[10px] text-mute2 text-center mt-4 space-y-2 leading-relaxed font-normal">
                    <p>
                      By texting Security Systems Management Inc at 510-363-9189, you agree to receive conversational & marketing notifications messages from Security Systems Management Inc. Reply STOP to opt-out; Reply HELP for support; Message & data rates may apply; Messaging frequency may vary. Visit Privacy Policy page to see our privacy policy and Terms of Service.
                    </p>
                    <p>
                      This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
