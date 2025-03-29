// src/components/Navbar/DesktopMenu.tsx
"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { menuLinks } from "./menuLinks";

export function DesktopMenu() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdownClick = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const handleLinkClick = () => setOpenIndex(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenIndex(null);
      }
    };

    if (openIndex !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openIndex]);

  return (
    <>
      {menuLinks.map(({ href, label, children }, index) =>
        children ? (
          <div
            key={label}
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setOpenIndex(index)}
          >
            <button
              onClick={() => handleDropdownClick(index)}
              className="flex items-center gap-1 text-gray-800 hover:text-blue-600 font-medium transition cursor-pointer"
              aria-expanded={openIndex === index}
              aria-controls={`dropdown-${index}`}
            >
              {label}
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {openIndex === index && (
              <div
                id={`dropdown-${index}`}
                className="absolute left-0 mt-2 w-56 rounded-md bg-white shadow-md z-50 p-2 flex flex-col"
              >
                {children.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={handleLinkClick}
                    className="px-4 py-2 text-sm text-blue-600 hover:bg-gray-100 rounded"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ) : (
          <Link
            key={href}
            href={href}
            className="text-gray-800 hover:text-blue-600 font-medium transition"
          >
            {label}
          </Link>
        )
      )}
    </>
  );
}
