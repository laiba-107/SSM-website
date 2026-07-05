import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  className?: string;
}

export function ServiceCard({ title, description, icon, href, className }: ServiceCardProps) {
  return (
    <Link 
      href={href}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-xl glass-card p-8",
        className
      )}
    >
      <div>
        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-surface2/50 border border-line/30 group-hover:border-accent/50 group-hover:bg-accent/10 transition-colors duration-300">
          <div className="text-accent group-hover:scale-110 transition-transform">{icon}</div>
        </div>
        <h3 className="mb-4 text-2xl font-serif text-text group-hover:text-gradient-gold transition-colors">
          {title}
        </h3>
        <p className="text-mute text-sm leading-relaxed mb-6 font-light">
          {description}
        </p>
      </div>
      <div className="mt-auto flex items-center text-sm font-semibold text-accent uppercase tracking-wider group-hover:text-accentL transition-colors duration-200">
        Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
