"use client";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export function ScrollEffects() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(pct);
      setShowTop(h.scrollTop > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal-up").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`back-to-top ${showTop ? "show" : ""}`}
        aria-label="Back to top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </>
  );
}
