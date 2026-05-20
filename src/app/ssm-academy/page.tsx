"use client";

import React, { useRef, useState, useEffect } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Check, Trash2 } from "lucide-react";

export default function SSMAcademyPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [selectedClass, setSelectedClass] = useState("Monday @9:00 AM - 5:00 PM (February 17th)");
  const [selectedPackages, setSelectedPackages] = useState<string[]>([]);

  const togglePackage = (pkg: string) => {
    if (selectedPackages.includes(pkg)) {
      setSelectedPackages(selectedPackages.filter((p) => p !== pkg));
    } else {
      setSelectedPackages([...selectedPackages, pkg]);
    }
  };

  // Canvas Drawing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Scale for high density screens
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    ctx.strokeStyle = "#0EA5E9"; // sky-blue theme color!
    ctx.lineWidth = 2.5;
    ctx.lineCap = "round";
  }, []);

  const getCoordinates = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    
    if ("touches" in e) {
      if (e.touches.length === 0) return { x: 0, y: 0 };
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    } else {
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const coords = getCoordinates(e);
    ctx.beginPath();
    ctx.moveTo(coords.x, coords.y);
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const coords = getCoordinates(e);
    ctx.lineTo(coords.x, coords.y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
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
            <h1 className="text-4xl md:text-5xl font-serif mb-4 uppercase tracking-wider text-text font-serif">
              SSM Academy
            </h1>
            <p className="text-xl text-mute font-normal">
              Elevate your skills with our fully accredited security training programs.
            </p>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
           ACADEMY TRAINING PACKAGES
           ───────────────────────────────────────────────────────────────── */}
      <Section className="bg-bg border-b border-line/15 min-h-[50vh]">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Packages Card */}
            <div className="card-premium">
              <h2 className="text-2xl font-serif text-text mb-6 border-b border-line/10 pb-4 uppercase tracking-wider">
                Training Packages
              </h2>
              
              <ul className="grid gap-4 text-mute font-normal">
                <li className="flex items-start gap-4 bg-bg/40 p-6 border border-line/15 hover:border-accent/20 transition-all duration-300">
                  <div className="w-10 h-10 rounded bg-accent/10 border border-accent/20 flex items-center justify-center font-bold text-accent shrink-0 font-mono">
                    A
                  </div>
                  <div>
                    <span className="font-bold text-text text-lg block mb-1 font-serif">$97.00</span>
                    <span className="text-mute block text-sm sm:text-base font-normal">Guard Card Training - Two Classes in one day</span>
                  </div>
                </li>
                
                <li className="flex items-start gap-4 bg-bg/40 p-6 border border-line/15 hover:border-accent/20 transition-all duration-300">
                  <div className="w-10 h-10 rounded bg-accent/10 border border-accent/20 flex items-center justify-center font-bold text-accent shrink-0 font-mono">
                    B
                  </div>
                  <div>
                    <span className="font-bold text-text text-lg block mb-1 font-serif">$50.00</span>
                    <span className="text-mute block text-sm sm:text-base font-normal">Resume Creation, Interview Practice, Employment Readiness Workshop</span>
                  </div>
                </li>
                
                <li className="flex items-start gap-4 bg-bg/40 p-6 border border-line/15 hover:border-accent/20 transition-all duration-300">
                  <div className="w-10 h-10 rounded bg-accent/10 border border-accent/20 flex items-center justify-center font-bold text-accent shrink-0 font-mono">
                    C
                  </div>
                  <div>
                    <span className="font-bold text-text text-lg block mb-1 font-serif">Livescan Services</span>
                    <span className="text-mute block text-sm sm:text-base mb-1 font-normal">DOJ and FBI Fingerprinting and Background Check</span>
                    <span className="text-accent text-xs font-semibold italic block font-mono">($32 DOJ, $19 FBI, $35 Fingerprinting and Live-Scan)</span>
                  </div>
                </li>
                
                <li className="flex items-start gap-4 bg-bg/40 p-6 border border-line/15 hover:border-accent/20 transition-all duration-300">
                  <div className="w-10 h-10 rounded bg-accent/10 border border-accent/20 flex items-center justify-center font-bold text-accent shrink-0 font-mono">
                    D
                  </div>
                  <div>
                    <span className="font-bold text-text text-lg block mb-1 font-serif">$25.00</span>
                    <span className="text-mute block text-sm sm:text-base font-normal">Processing and mailing package for you</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* ─────────────────────────────────────────────────────────────────
                 SCHEDULE FORM (canvas drawing)
                 ───────────────────────────────────────────────────────────────── */}
            <div className="card-premium relative overflow-hidden">
              <div className="absolute top-[-10%] right-[-10%] w-[30%] h-[40%] rounded-full bg-accent/5 blur-[100px]" />
              <h2 className="text-3xl font-serif text-text mb-6 border-b border-line/10 pb-4 uppercase tracking-wider relative z-10 font-serif">
                Schedule a Class
              </h2>
              
              <div className="bg-bg/40 rounded p-8 border border-line/15 relative z-10">
                <div className="mb-10 border-b border-line/10 pb-8">
                  <h3 className="text-3xl font-serif text-text mb-2 font-serif font-serif">SSM Academy Campus</h3>
                  <p className="text-accent text-lg mb-8 uppercase tracking-widest font-semibold text-xs font-mono">★ Guard Card Classes ★</p>
                  
                  <div className="space-y-4 font-normal text-mute text-sm sm:text-base">
                    <p className="text-text font-semibold">Tell a Friend - Security Systems Management</p>
                    <p className="text-text font-semibold">A Quick Route To Success</p>
                    <p className="text-text font-semibold">510-363-9189</p>
                  </div>
                  
                  <div className="mt-8 space-y-2 text-mute/85 font-normal text-xs font-mono">
                    <p>SSM Academy Campus Address:</p>
                    <p className="text-text font-medium">24301 Southland Drive, Suite B5</p>
                    <p className="text-text font-medium">Hayward, CA, 94545</p>
                  </div>
                </div>

                {formSubmitted ? (
                  <div className="text-center p-8 border border-accent/20 bg-bg/50 rounded">
                    <Check className="w-16 h-16 text-accent mx-auto mb-4" />
                    <h4 className="serif text-3xl font-serif mb-2">Class Reserved Successfully!</h4>
                    <p className="text-mute text-sm max-w-md mx-auto mt-2 font-normal">
                      Thank you, {firstName}. Your seat at SSM Academy for <strong>{selectedClass}</strong> has been tentatively held. We will reach out to you within 24 hours to confirm your payment setup.
                    </p>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFirstName("");
                        setLastName("");
                        setPhone("");
                        setAddress("");
                        setSelectedPackages([]);
                        clearSignature();
                      }}
                      className="btn btn-outline mt-8 text-xs py-2 px-4 rounded border-line"
                    >
                      New Booking
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="space-y-8">
                    {/* Name */}
                    <div className="space-y-3">
                      <label className="text-xs font-semibold uppercase tracking-wider text-text/75 block">Name</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <input
                            type="text"
                            required
                            placeholder="Jordan"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="field field-dark"
                          />
                          <label className="text-[10px] text-mute2 uppercase tracking-wider mt-1 block font-mono">First Name</label>
                        </div>
                        <div>
                          <input
                            type="text"
                            required
                            placeholder="Reyes"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="field field-dark"
                          />
                          <label className="text-[10px] text-mute2 uppercase tracking-wider mt-1 block font-mono">Last Name</label>
                        </div>
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-3">
                      <label className="text-xs font-semibold uppercase tracking-wider text-text/75 block">Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="(510) 363-9189"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="field field-dark"
                      />
                    </div>

                    {/* Address */}
                    <div className="space-y-3">
                      <label className="text-xs font-semibold uppercase tracking-wider text-text/75 block">Contact Address</label>
                      <input
                        type="text"
                        placeholder="Street Address, Apt / Suite, City, Zip"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="field field-dark"
                      />
                    </div>

                    {/* Policy Notes */}
                    <div className="py-6 space-y-3 text-mute border-y border-line/15 my-6 font-normal text-sm">
                      <h4 className="text-base font-semibold text-text">Class Policies:</h4>
                      <p>• Classes are capped at a maximum of 8 students to ensure high quality instruction.</p>
                      <p>• Pre-payment ensures that your preferred class will not fill up.</p>
                      <p className="italic text-accent font-semibold">• Extra time is provided at the end of each class for test re-takes or questions.</p>
                    </div>

                    {/* Book A Class */}
                    <div className="space-y-3">
                      <label className="text-xs font-semibold uppercase tracking-wider text-text/75 block">
                        Book A Class <span className="text-red-500">*</span>
                      </label>
                      <select
                        className="field field-dark cursor-pointer"
                        value={selectedClass}
                        onChange={(e) => setSelectedClass(e.target.value)}
                      >
                        <option>Monday @9:00 AM - 5:00 PM (February 17th)</option>
                        <option>Monday @9:00 AM - 5:00 PM (March 16th)</option>
                      </select>
                    </div>

                    {/* Training Packages */}
                    <div className="space-y-3 pt-4">
                      <label className="text-xs font-semibold uppercase tracking-wider text-text/75 block">Training Packages</label>
                      <div className="space-y-3 text-mute text-sm font-normal">
                        {[
                          { id: "A", label: "A - $97.00 Guard card Training - Two Classes in one day" },
                          { id: "B", label: "B - $50.00 Resume Creation, interview Practice, Employment Readiness Workshop" },
                          { id: "C", label: "C - DOJ and FBI Livescan ($32 DOJ, $19 FBI, $35 Fingerprinting and Live-Scan)" },
                          { id: "D", label: "D - $25.00 Processing and mailing package for you" },
                          { id: "E", label: "E - Employee Orientation Training for New guards, how we do it at SSM" }
                        ].map((pkg) => (
                          <label key={pkg.id} className="flex items-start gap-3 cursor-pointer hover:text-text transition-colors select-none">
                            <input
                              type="checkbox"
                              checked={selectedPackages.includes(pkg.id)}
                              onChange={() => togglePackage(pkg.id)}
                              className="mt-1 accent-sky-500 rounded border-line shrink-0"
                            />
                            <span>{pkg.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="py-4 text-accent text-xs leading-relaxed border-y border-line/15 mt-8 font-semibold">
                      * 10% Discount for new hire on one-year contract with SSM employee pay-as-you-go repayment plan. Note: Not every graduate can be placed at SSM; check post availability.
                    </div>

                    {/* Interactive HTML5 Canvas Signature Pad */}
                    <div className="space-y-3">
                      <label className="text-xs font-semibold uppercase tracking-wider text-text/75 block">
                        Signature Authorization
                      </label>
                      <div className="relative max-w-md border border-line/15 bg-bg rounded overflow-hidden">
                        <canvas
                          ref={canvasRef}
                          className="w-full h-40 cursor-crosshair block relative z-10"
                          onMouseDown={startDrawing}
                          onMouseMove={draw}
                          onMouseUp={stopDrawing}
                          onMouseLeave={stopDrawing}
                          onTouchStart={startDrawing}
                          onTouchMove={draw}
                          onTouchEnd={stopDrawing}
                        />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
                          <span className="text-text/15 font-serif italic text-2xl transform -rotate-6">Sign Here With Mouse/Finger</span>
                        </div>
                        <button
                          type="button"
                          onClick={clearSignature}
                          className="absolute bottom-2 right-4 z-20 text-[10px] uppercase tracking-wider font-mono bg-bg/80 border border-line/15 text-text hover:text-accent hover:border-accent px-2 py-1 flex items-center gap-1 transition-colors"
                        >
                          <Trash2 width="10" height="10" /> Clear
                        </button>
                      </div>
                    </div>

                    <div className="pt-8 flex justify-start">
                      <button type="submit" className="btn btn-brass px-10">
                        Submit Class Booking
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
