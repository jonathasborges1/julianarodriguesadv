"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { menuLinks } from "./menuLinks";

export function DesktopMenu() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

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
      {menuLinks.map(({ href, label, children }, index) => {
        const isActive = href !== "#" && pathname === href.split("#")[0];

        return children ? (
          <div
            key={label}
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setOpenIndex(index)}
            onMouseLeave={() => setOpenIndex(null)}
          >
            <button
              onClick={() =>
                setOpenIndex((prev) => (prev === index ? null : index))
              }
              className="flex items-center gap-1 text-gray-700 hover:text-[#00274B] font-medium transition cursor-pointer"
              aria-expanded={openIndex === index}
              aria-controls={`dropdown-${index}`}
            >
              {label}
              <ChevronDown
                className={clsx(
                  "w-4 h-4 transition-transform duration-200",
                  openIndex === index && "rotate-180"
                )}
              />
            </button>

            {openIndex === index && (
              <div
                id={`dropdown-${index}`}
                className="absolute left-0 mt-2 w-56 rounded-lg bg-white shadow-lg z-50 p-1 flex flex-col border border-gray-100"
              >
                {children.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={handleLinkClick}
                    className="px-4 py-2.5 text-sm text-gray-700 hover:bg-[#00274B]/5 hover:text-[#00274B] rounded-md transition"
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
            className={clsx(
              "font-medium transition",
              isActive
                ? "text-[#00274B] border-b-2 border-[#00274B] pb-0.5"
                : "text-gray-700 hover:text-[#00274B]"
            )}
          >
            {label}
          </Link>
        );
      })}

      <Link
        href="/#contato"
        className="ml-2 px-4 py-2 bg-[#00274B] text-white text-sm font-semibold rounded-lg hover:bg-[#003d75] transition"
      >
        Agendar Consulta
      </Link>
    </>
  );
}
