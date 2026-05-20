"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ThemeSync() {
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
  }, [pathname]);

  return null;
}
