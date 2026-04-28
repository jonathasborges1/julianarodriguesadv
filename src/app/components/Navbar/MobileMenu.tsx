"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { menuLinks } from "./menuLinks";

type Props = {
  onLinkClick: () => void;
};

export function MobileMenu({ onLinkClick }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const pathname = usePathname();

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <nav className="flex flex-col divide-y divide-gray-100">
      {menuLinks.map(({ href, label, icon: Icon, children }, index) => {
        const isOpen = openIndex === index;
        const isActive = href !== "#" && pathname === href.split("#")[0];

        if (children && children.length > 0) {
          return (
            <div key={label}>
              <button
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                aria-controls={`submenu-${index}`}
                className="w-full flex justify-between items-center min-h-[52px] py-3 text-left text-gray-800 font-medium hover:text-[#00274B] transition"
              >
                <span className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-[#00274B]" />
                  {label}
                </span>
                <ChevronDown
                  className={clsx(
                    "w-4 h-4 text-gray-400 transition-transform duration-200",
                    isOpen && "rotate-180"
                  )}
                />
              </button>

              <div
                id={`submenu-${index}`}
                className={clsx(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  isOpen ? "max-h-96 mb-2" : "max-h-0"
                )}
              >
                <ul className="pl-8 flex flex-col divide-y divide-gray-50">
                  {children.map(({ href, label, icon: ChildIcon }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="flex items-center gap-3 min-h-[44px] py-2 text-gray-600 hover:text-[#00274B] transition text-sm"
                        onClick={onLinkClick}
                      >
                        <ChildIcon className="w-4 h-4" />
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
            className={clsx(
              "flex items-center gap-3 min-h-[52px] py-3 font-medium transition",
              isActive
                ? "text-[#00274B] font-semibold"
                : "text-gray-800 hover:text-[#00274B]"
            )}
            onClick={onLinkClick}
          >
            <Icon
              className={clsx(
                "w-5 h-5",
                isActive ? "text-[#00274B]" : "text-gray-400"
              )}
            />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
