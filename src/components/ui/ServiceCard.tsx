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
        "group relative flex flex-col justify-between overflow-hidden rounded-xl glass-effect premium-card p-8",
        className
      )}
    >
      <div>
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light/50 text-gold-main border border-white/5 group-hover:scale-115 transition-all duration-300 group-hover:border-gold-main/20">
          {icon}
        </div>
        <h3 className="mb-3 text-xl font-semibold text-foreground heading-premium group-hover:text-gold-main transition-colors">
          {title}
        </h3>
        <p className="text-muted leading-relaxed mb-6 font-light">
          {description}
        </p>
      </div>
      <div className="mt-auto flex items-center text-sm font-medium text-gold-main group-hover:text-white transition-colors duration-200">
        Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
