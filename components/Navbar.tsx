"use client";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import { useTheme } from "@/hooks/useTheme";
import SunIcon from "./icons/SunIcon";
import MoonIcon from "./icons/MoonIcon";
import SunMoonBgIcon from "./icons/SunMonBg";
import LogoIcon from "./icons/LogoIcon";
import {HamburgerIcon} from "./icons/HamBurgerIcon";
const NAV_LINKS = [
  { label: "Overview", href: "#blueprint" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const closeMobile = () => setOpen(false);

  return (
    <>
      <nav
        className="nav-blur fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] border-[var(--nav-border)]] transition-colors"
        style={{ height: "var(--nav-h)", background: theme === "dark" ? "rgba(10,10,15,0.2)" : "rgba(245,245,248,0.2)" }}
      >
        <div className="container h-full flex items-center gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 text-[var(--text)] no-underline flex-shrink-0">
            <LogoIcon className={`w-[84px] h-[31px] transition-colors ${theme === "dark" ? "text-white" : "text-slate-800"}`} />{" "}
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-8 mx-auto list-none">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="body-sm h4 text-[var(--text)] no-underline">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-3 ml-auto lg:ml-0">
          

            <div className="flex items-center gap-0.5 p-1 rounded-full border" style={{ background: "var(--surface2)", borderColor: "var(--border2)" }}>
              <div onClick={() => setTheme("dark")} className="relative w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer overflow-hidden">
                {theme === "dark" && (
                  <div className="absolute inset-0 z-0" style={{ color: "#282d33" }}>
                    <SunMoonBgIcon />
                  </div>
                )}

                <MoonIcon className={`relative z-10 w-[14px] h-[14px] transition-colors text-primary`} />
              </div>

              <div onClick={() => setTheme("light")} className="relative w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer overflow-hidden">
                {theme === "light" && (
                  <div className="absolute inset-0 z-0 text-[var(--neutral-200)]">
                    <SunMoonBgIcon />
                  </div>
                )}

                <SunIcon className={`relative z-10 w-[14px] h-[14px] transition-colors text-primary`} />
              </div>
            </div>

            {/* CTA */}
            <a href="#pricing" className="btn-primary hidden sm:inline-flex">
              Enroll now
            </a>

            {/* Hamburger */}
            <button className="flex lg:hidden flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer" 
            onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
            
             <div className="relative w-[60px] h-[60px] rounded-full flex items-center justify-center transition-all">
                    <div className="absolute inset-0 flex items-center justify-center" style={theme === "light" ? { color: "var(--neutral-200)" } : { color: "#282d33" }}>
                      <SunMoonBgIcon size={60}  />
                    </div>
                   <HamburgerIcon width={28} height={28}
                      className="relative z-10 w-[28px] h-[28px] transition-colors text-primary"
                    />
                  </div>
              
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile menu ── */}
      {open && (
        <div className="nav-blur h-full fixed left-0 right-0 z-40 flex flex-col px-6 py-6 gap-5 lg:hidden" style={{ top: "var(--nav-h)", background: theme === "dark" ? "rgba(10,10,15,0.2)" : "rgba(245,245,248,0.2)"   }}>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={closeMobile} className="body-normal nav-blur text-[var(--text2)] no-underline pb-4"  >
              {l.label}
            </a>
          ))}
         
        </div>
      )}
    </>
  );
}
