"use client";

import React, { useRef, useState, useEffect } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Check, Trash2, Save, Send } from "lucide-react";

export default function CareerPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSaved, setFormSaved] = useState(false);

  // Form states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [workedBefore, setWorkedBefore] = useState("");
  const [startDate, setStartDate] = useState("");
  const [adept, setAdept] = useState("");
  const [mobileTech, setMobileTech] = useState("");
  const [emailSkills, setEmailSkills] = useState("");
  const [checkedRequirements, setCheckedRequirements] = useState<string[]>([]);
  const [checkedPositions, setCheckedPositions] = useState<string[]>([]);

  const toggleRequirement = (req: string) => {
    if (checkedRequirements.includes(req)) {
      setCheckedRequirements(checkedRequirements.filter((r) => r !== req));
    } else {
      setCheckedRequirements([...checkedRequirements, req]);
    }
  };

  const togglePosition = (pos: string) => {
    if (checkedPositions.includes(pos)) {
      setCheckedPositions(checkedPositions.filter((p) => p !== pos));
    } else {
      setCheckedPositions([...checkedPositions, pos]);
    }
  };

  // Canvas Drawing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
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

  const handleSave = () => {
    setFormSaved(true);
    setTimeout(() => setFormSaved(false), 3000);
  };

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
            <h1 className="text-4xl md:text-5xl font-serif mb-4 uppercase tracking-wider text-text font-serif">
              Career Opportunities
            </h1>
            <p className="text-xl text-mute font-normal">
              Join SSM Inc.'s professional security and facilities management staff.
            </p>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
           REQUIREMENTS CHECKLIST
           ───────────────────────────────────────────────────────────────── */}
      <Section className="bg-bg border-b border-line/15 min-h-[50vh]">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Standards Card */}
            <div className="card-premium">
              <h2 className="text-2xl font-serif text-text mb-8 border-b border-line/10 pb-4 uppercase tracking-wider">
                Hiring Criteria &amp; Standards
              </h2>
              
              <ul className="grid sm:grid-cols-2 gap-4 text-mute font-normal text-sm sm:text-base">
                {[
                  "Valid registration guard card",
                  "Must be at least 18 years old",
                  "Employment background history",
                  "Screening and drug test",
                  "Possess a GED or high school diploma",
                  "Authorization documents to work in USA",
                  "Must pass the security training exam",
                  "Criminal background check",
                  "DMV record for patrolling positions",
                  "Must pass the interview by SSM manager"
                ].map((req, idx) => (
                  <li key={idx} className="flex items-center gap-3 py-2 border-b border-line/10">
                    <Check className="w-4 h-4 text-accent shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ─────────────────────────────────────────────────────────────────
                 APPLICATION FORM (canvas drawing)
                 ───────────────────────────────────────────────────────────────── */}
            <div className="card-premium">
              <h2 className="text-3xl font-serif text-text mb-8 border-b border-line/10 pb-4 uppercase tracking-wider">
                Apply Now
              </h2>
              
              <div className="bg-bg/40 rounded p-8 border border-line/15">
                <div className="mb-10 border-b border-line/10 pb-8">
                  <h3 className="text-2xl font-serif text-text uppercase tracking-wider mb-2 font-serif font-serif">Employment Application</h3>
                  <p className="text-mute text-sm mt-1 font-normal">Please complete the pre-employment screening form below to apply.</p>
                </div>

                {formSubmitted ? (
                  <div className="text-center p-8 border border-accent/20 bg-bg/50 rounded">
                    <Check className="w-16 h-16 text-accent mx-auto mb-4" />
                    <h4 className="serif text-3xl font-serif mb-2">Application Received!</h4>
                    <p className="text-mute text-sm max-w-md mx-auto mt-2 font-normal">
                      Thank you, {firstName}. Your pre-employment application has been logged in our databases. Our hiring manager will contact you for a phone interview within 3-5 business days.
                    </p>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFirstName("");
                        setLastName("");
                        setPhone("");
                        setAddress("");
                        setEmail("");
                        setWorkedBefore("");
                        setAdept("");
                        setMobileTech("");
                        setEmailSkills("");
                        setCheckedRequirements([]);
                        setCheckedPositions([]);
                        clearSignature();
                      }}
                      className="btn btn-outline mt-8 text-xs py-2 px-4 rounded border-line"
                    >
                      Apply for another role
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Save alert */}
                    {formSaved && (
                      <div className="p-4 border border-accent/20 bg-accent/5 text-accent text-sm rounded flex items-center gap-2 font-semibold">
                        <Check className="w-4 h-4" /> Progress saved locally. You can finish your application at any time!
                      </div>
                    )}

                    {/* Name */}
                    <div className="space-y-3">
                      <label className="text-xs font-semibold uppercase tracking-wider text-text/75 block">
                        Full Name <span className="text-red-500">*</span>
                      </label>
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
                      <label className="text-xs font-semibold uppercase tracking-wider text-text/75 block">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
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
                      <label className="text-xs font-semibold uppercase tracking-wider text-text/75 block">Address</label>
                      <input
                        type="text"
                        placeholder="Street Address, Apt, City, State, Zip"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="field field-dark"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-3">
                      <label className="text-xs font-semibold uppercase tracking-wider text-text/75 block">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="jordan@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="field field-dark"
                      />
                    </div>

                    {/* Job Requirement Questionnaire */}
                    <div className="space-y-3">
                      <label className="text-xs font-semibold uppercase tracking-wider text-text/75 block">
                        Job Requirement Questionnaire <span className="text-red-500">*</span>
                      </label>
                      <div className="space-y-2.5 text-mute text-sm font-normal">
                        {[
                          "Do you have a Driver License?",
                          "Do you have a Guard Card?",
                          "Are you legally eligible to work in the United States?",
                          "Do you have reliable transportation to work?"
                        ].map((q) => (
                          <label key={q} className="flex items-start gap-3 cursor-pointer hover:text-text transition-colors select-none">
                            <input
                              type="checkbox"
                              checked={checkedRequirements.includes(q)}
                              onChange={() => toggleRequirement(q)}
                              className="mt-1 accent-sky-500 rounded shrink-0"
                            />
                            <span>{q}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Worked before? */}
                    <div className="space-y-3">
                      <label className="text-xs font-semibold uppercase tracking-wider text-text/75 block">
                        Have you worked as a security guard before?
                      </label>
                      <input
                        type="text"
                        placeholder="If yes, please list the company name(s)..."
                        value={workedBefore}
                        onChange={(e) => setWorkedBefore(e.target.value)}
                        className="field field-dark"
                      />
                    </div>

                    {/* What position are you applying for? */}
                    <div className="space-y-3">
                      <label className="text-xs font-semibold uppercase tracking-wider text-text/75 block">
                        What position are you applying for?
                      </label>
                      <div className="grid sm:grid-cols-2 gap-3 text-mute text-sm font-normal">
                        {[
                          "Unarmed Guard",
                          "Flex Officer",
                          "Daytime Supervisor",
                          "Night Supervisor",
                          "Weekend Day Supervisor",
                          "Weekend Night Supervisor"
                        ].map((pos) => (
                          <label key={pos} className="flex items-center gap-3 cursor-pointer hover:text-text transition-colors select-none">
                            <input
                              type="checkbox"
                              checked={checkedPositions.includes(pos)}
                              onChange={() => togglePosition(pos)}
                              className="accent-sky-500 rounded shrink-0"
                            />
                            <span>{pos}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Start Date */}
                    <div className="space-y-3">
                      <label className="text-xs font-semibold uppercase tracking-wider text-text/75 block">
                        When can you start? <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        required
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="field field-dark text-text max-w-xs cursor-pointer"
                      />
                    </div>

                    <h3 className="text-xl font-serif text-text pt-8 pb-4 border-b border-line/10 font-serif">Employment Questionnaire</h3>

                    {/* Software Skills */}
                    <div className="space-y-3">
                      <label className="text-xs font-semibold uppercase tracking-wider text-text/75 block font-mono">
                        How adept are you in learning computer software programs and systems?
                      </label>
                      <div className="space-y-2 text-mute text-sm font-normal">
                        {["Experienced", "Averaged", "No Experience"].map((option) => (
                          <label key={option} className="flex items-center gap-3 cursor-pointer hover:text-text transition-colors select-none">
                            <input
                              type="radio"
                              name="adept"
                              checked={adept === option}
                              onChange={() => setAdept(option)}
                              className="accent-sky-500"
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Mobile Technologies */}
                    <div className="space-y-3">
                      <label className="text-xs font-semibold uppercase tracking-wider text-text/75 block font-mono">
                        Which mobile technologies are you experienced in using?
                      </label>
                      <div className="space-y-2 text-mute text-sm font-normal">
                        {["Apple iOS", "Android OS", "GuardTek Device", "No Mobile Experience"].map((option) => (
                          <label key={option} className="flex items-center gap-3 cursor-pointer hover:text-text transition-colors select-none">
                            <input
                              type="radio"
                              name="mobileTech"
                              checked={mobileTech === option}
                              onChange={() => setMobileTech(option)}
                              className="accent-sky-500"
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Time Clock Skills */}
                    <div className="space-y-3">
                      <label className="text-xs font-semibold uppercase tracking-wider text-text/75 block font-mono">
                        How would you rate your e-mail skills and use of online Time Clock Software?
                      </label>
                      <div className="space-y-2 text-mute text-sm font-normal">
                        {["Excellent", "Good", "Needs Training"].map((option) => (
                          <label key={option} className="flex items-center gap-3 cursor-pointer hover:text-text transition-colors select-none">
                            <input
                              type="radio"
                              name="emailSkills"
                              checked={emailSkills === option}
                              onChange={() => setEmailSkills(option)}
                              className="accent-sky-500"
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Interactive Canvas Signature */}
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

                    {/* Action bar */}
                    <div className="pt-8 border-t border-line/15 flex flex-wrap justify-end gap-3 font-semibold">
                      <button
                        type="button"
                        onClick={handleSave}
                        className="btn btn-outline text-xs px-5 py-2.5 flex items-center gap-2 border-line hover:text-accent hover:border-accent"
                      >
                        <Save width="14" height="14" /> Save Draft
                      </button>
                      <button
                        type="submit"
                        className="btn btn-brass text-xs px-6 py-2.5 flex items-center gap-2"
                      >
                        <Send width="14" height="14" /> Submit Application
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
