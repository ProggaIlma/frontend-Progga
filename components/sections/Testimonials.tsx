"use client";
import { use, useRef, useState } from "react";
import Badge from "@/components/ui/Badge";
import Image from "next/image";
import { useTheme } from "@/hooks/ThemeProvider";
import SunMoonBgIcon from "../icons/SunMonBg";
import { PlayIcon } from "../icons/PlayIcon";
const TESTIMONIALS = [
  {
    name: "Alex Carter",
    role: "Freelance Designer",
    avatar: "/avatar1.jpg",
    text: "As someone who juggles multiple projects, staying focused was always a challenge. This course gave me the tools to cut through distractions and work with absolute clarity. My productivity has never been better!",
    featured: false,
  },
  {
    name: "Daniel Foster",
    role: "Content Creator",
    avatar: "/testmonial2ava.png",
    featuredBg: "/testimonial2.jpg",
    text: "",
    featured: true,
  },
  {
    name: "Mark Davidson",
    role: "Software Developer",
    avatar: "/testava.jpg",
    text: "I never realized how much distractions were holding me back. After applying the deep work techniques, I feel more in control of my time and energy. My efficiency has doubled!",
    featured: false,
  },
  {
    name: "Tom Davidson",
    role: "Product Manager",
    avatar: "/testava2.jpg",
    featuredBg: "/testimonial.jpg",
    text: "This course completely changed how I approach my workday. I went from feeling overwhelmed to finishing my most important tasks before noon. Absolutely worth every penny.",
    featured: true,
  },
  {
    name: "James Okafor",
    role: "UX Researcher",
    avatar: "/avatar2.jpg",
    text: "The techniques taught here are backed by science and actually work. Within two weeks I was getting more done in 4 hours than I used to in a full 8-hour day. Life changing.",
    featured: false,
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const [activeIdx, setActiveIdx] = useState(0);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("[data-card]")?.clientWidth ?? 300;
    const gap = 16;
    el.scrollBy({ left: dir === "right" ? cardWidth + gap : -(cardWidth + gap), behavior: "smooth" });
    setActiveIdx((prev) => (dir === "right" ? Math.min(prev + 1, TESTIMONIALS.length - 1) : Math.max(prev - 1, 0)));
  };

  return (
    <section id="testimonials" className="section-py" style={{ background: "var(--bg)" }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="gsap-fade-in flex justify-center mb-6">
            <Badge>Testimonials</Badge>
          </div>
          <h2 className="h2 gsap-fade-up">
            Real Results from
            <br />
            Real People
          </h2>
        </div>

        {/* Sub-header row */}
        <div className="flex items-center justify-between mb-6">
          <p className="h3 font-medium" style={{ color: "var(--text)" }}>
            Join with 5K other students
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-95"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 3L6 8l4 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-95"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3l4 5-4 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable row */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4"
          style={{
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            cursor: "grab",
          }}
          onMouseDown={(e) => {
            const el = scrollRef.current;
            if (!el) return;
            el.style.cursor = "grabbing";
            el.style.userSelect = "none";
            const startX = e.pageX - el.offsetLeft;
            const scrollLeft = el.scrollLeft;

            const onMove = (e: MouseEvent) => {
              const x = e.pageX - el.offsetLeft;
              el.scrollLeft = scrollLeft - (x - startX);
            };

            const onUp = () => {
              el.style.cursor = "grab";
              el.style.userSelect = "";
              window.removeEventListener("mousemove", onMove);
              window.removeEventListener("mouseup", onUp);
            };

            window.addEventListener("mousemove", onMove);
            window.addEventListener("mouseup", onUp);
          }}
        >
          {TESTIMONIALS.map((t, i) =>
            t.featured ? (
              /* Featured video card */
              <div
                key={i}
                data-card
                className="rounded-2xl overflow-hidden border relative flex-shrink-0 flex flex-col justify-end"
                style={{
                  width: "clamp(260px, 30vw, 340px)",
                  minHeight: "380px",
                  border: "1px solid var(--border)",
                  scrollSnapAlign: "start",
                  borderColor: "transparent",
  background: `
    linear-gradient(var(--surface), var(--surface)) padding-box, 
    linear-gradient(135deg, #2466F2 0%, rgba(36,102,242,0) 35%, rgba(36,102,242,0) 65%, #2466F2 100%) border-box
  `,
                }}
              >
                {/* Full bg image */}
                {t.featuredBg && <Image src={t.featuredBg} width={400} height={400} alt={t.name} className="absolute inset-0 w-full h-full object-cover" />}

                {/* Gradient overlay */}
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)" }} />

                {/* Circle avatar — top left like other cards */}
                <div className="absolute top-5 left-5 w-11 h-11 rounded-full overflow-hidden flex-shrink-0" style={{ border: "2px solid rgba(255,255,255,0.4)" }}>
                  <Image src={t.avatar} alt={t.name} width={44} height={44} className="w-full h-full object-cover" />
                </div>

                {/* Play button — centered */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-[60px] h-[60px] rounded-full flex items-center justify-center transition-all">
                    <div className="absolute inset-0 flex items-center justify-center" style={theme === "light" ? { color: "var(--blue)" } : { color: "#ffffff" }}>
                      <SunMoonBgIcon size={60} preview={true} />
                    </div>

                    <PlayIcon
                      className={`relative z-10 w-[18px] h-[21px] transition-colors 
                ${theme === "light" ? "text-white" : "text-[var(--blue)]"}`}
                    />
                  </div>
                </div>

                {/* Name / role at bottom */}
                <div className="relative z-10 p-5">
                  <p className="font-semibold text-sm text-white">{t.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {t.role}
                  </p>
                </div>
              </div>
            ) : (
              /* Text card */
              <div
                key={i}
                data-card
                className="rounded-2xl border p-6 flex flex-col justify-between flex-shrink-0"
                style={{
                 
                  width: "clamp(260px, 30vw, 340px)",
                  minHeight: "380px",
                  scrollSnapAlign: "start",borderColor: "transparent",
  background: `
    linear-gradient(var(--surface), var(--surface)) padding-box, 
    linear-gradient(135deg, #2466F2 0%, rgba(36,102,242,0.4) 35%, rgba(36,102,242,0) 65%, #2466F2 100%) border-box
  `,
                }}
              >
                {/* Avatar */}
                <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0 mb-6" style={{ border: "1px solid var(--border)" }}>
                  <Image src={t.avatar} alt={t.name} width={44} height={44} className="w-full h-full object-cover" />
                </div>

                {/* Quote */}
                <p className="flex-1 body-sm" style={{ color: "var(--text2)", lineHeight: "1.7" }}>
                  {t.text}
                </p>

                {/* Name / role */}
                <div className="mt-6 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                  <p className="font-semibold text-sm" style={{ color: "var(--text)" }}>
                    {t.name}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--text2)" }}>
                    {t.role}
                  </p>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
