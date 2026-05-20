"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ThemeSync() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
    }
  }, [pathname]);

  return null;
}
