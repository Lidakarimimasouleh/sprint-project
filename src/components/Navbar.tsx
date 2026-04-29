"use client";

import { useState } from "react";

const NAV_LINKS = ["About", "Services", "Projects", "News", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="relative z-10 flex items-center justify-between py-6">
        <span className="font-semibold text-base tracking-[-0.04em] capitalize text-black">
          H.Studio
        </span>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-14 font-semibold text-base tracking-[-0.04em] capitalize text-black">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:opacity-70 transition-opacity"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Desktop CTA button */}
        <button className="hidden md:flex items-center justify-center bg-black text-white text-sm font-medium tracking-[-0.04em] px-4 py-3 rounded-full cursor-pointer hover:bg-neutral-800 transition-colors">
          Let&apos;s talk
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-1 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            {menuOpen ? (
              <>
                <rect
                  x="3"
                  y="10.586"
                  width="24"
                  height="2"
                  rx="1"
                  transform="rotate(45 3 10.586)"
                  fill="black"
                />
                <rect
                  x="4.414"
                  y="21"
                  width="24"
                  height="2"
                  rx="1"
                  transform="rotate(-45 4.414 21)"
                  fill="black"
                />
              </>
            ) : (
              <>
                <rect y="5" width="24" height="2" rx="1" fill="black" />
                <rect y="11" width="24" height="2" rx="1" fill="black" />
                <rect y="17" width="24" height="2" rx="1" fill="black" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="md:hidden absolute top-[72px] left-0 right-0 z-50 bg-white/95 backdrop-blur-md flex flex-col p-6 gap-5 border-t border-black/10">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-semibold text-lg capitalize text-black hover:opacity-70 transition-opacity"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <button className="mt-2 self-start bg-black text-white text-sm font-medium tracking-[-0.04em] px-4 py-3 rounded-full cursor-pointer hover:bg-neutral-800 transition-colors">
            Let&apos;s talk
          </button>
        </div>
      )}
    </>
  );
}
