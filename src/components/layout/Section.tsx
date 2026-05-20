import React from "react";
import { cn } from "@/lib/utils";

export function Section({ className, children, id, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <section id={id} className={cn("py-8 md:py-12", className)} {...props}>
      {children}
    </section>
  );
}
