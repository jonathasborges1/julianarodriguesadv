// src/components/Navbar/MobileMenu.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { menuLinks } from "./menuLinks";

type Props = {
  onLinkClick: () => void;
};

export function MobileMenu({ onLinkClick }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const linkStyle =
    "flex items-center gap-2 text-gray-800 text-lg font-medium hover:text-blue-600 transition";

  return (
    <>
      {menuLinks.map(({ href, label, icon: Icon, children }, index) => {
        const isOpen = openIndex === index;

        if (children && children.length > 0) {
          return (
            <div key={label} className="w-full">
              <button
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                aria-controls={`submenu-${index}`}
                className="w-full flex justify-between items-center text-left text-gray-800 text-lg font-medium hover:text-blue-600 transition"
              >
                <span className="flex items-center gap-2">
                  <Icon className="w-5 h-5" />
                  {label}
                </span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                id={`submenu-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-96 mt-2" : "max-h-0"
                }`}
              >
                <ul className="pl-4 space-y-2">
                  {children.map(({ href, label, icon: ChildIcon }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="flex items-center gap-2 text-gray-700 text-base hover:text-blue-600 transition"
                        onClick={onLinkClick}
                      >
                        <ChildIcon className="w-5 h-5" />
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        }

        return (
          <Link
            key={href}
            href={href}
            className={linkStyle}
            onClick={onLinkClick}
          >
            <Icon className="w-5 h-5" />
            {label}
          </Link>
        );
      })}
    </>
  );
}
