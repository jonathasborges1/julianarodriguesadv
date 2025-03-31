"use client";

import type { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/sections/Footer";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="pt-14 md:pt-16 bg-white">{children}</div>
      <Footer />
    </>
  );
}
