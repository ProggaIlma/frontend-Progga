"use client"; 
import Badge from "@/components/ui/Badge";
import Countdown from "@/components/ui/Countdown";
import { TextureBg } from "../icons/TextureBg";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "@/hooks/useTheme";
import { log } from "console";

export default function Hero() {
   const { theme } = useTheme();
console.log(theme);
  useEffect(() => {
    console.log("Mounted, setting theme to:", theme);
  }, [theme]);

  const gradient =  theme === "dark"
    ? "linear-gradient(to bottom, #000000 0%, #1245B3 100%)"
    : "linear-gradient(to bottom, #ffffff 0%, #1245B3 100%)";

 
  return (
    <section
      id="overview"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ paddingTop: "calc(var(--nav-h) + 64px)", paddingBottom: "80px", paddingLeft: "24px", paddingRight: "24px" }}
    >
      {/* Blue glow blob */}
      <div
        className="absolute pointer-events-none z-0"
        style={{
          top: "28%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "720px",
          height: "420px",
          // background: "radial-gradient(ellipse, rgba(37,99,235,0.17) 0%, transparent 70%)",
        }}
      />

      {/* Countdown badge */}
      <div className="gsap-fade-in relative z-10 mb-8">
        <Badge pulse>
          30% off until&nbsp;
          <Countdown initialSeconds={4 * 86400 + 2 * 3600 + 41 * 60 + 17} />
        </Badge>
      </div>

      {/* H1 */}
      <h1 className="h1 gsap-fade-up relative z-10 max-w-[560px] mb-5" style={{ color: "var(--text)" }}>
        Master Focus &amp; Get More Done in Less Time
      </h1>

      {/* Sub */}
      <p className="body-normal gsap-fade-up relative z-10 max-w-[520px] mb-9" style={{ color: "var(--text2)", fontWeight: 300 }}>
        A step-by-step system to eliminate procrastination, train your brain for deep work, and boost productivity effortlessly.
      </p>

      {/* CTAs */}
      <div className="gsap-fade-up relative z-10 flex flex-wrap items-center justify-center gap-3 mb-14">
        <a href="#pricing" className="btn-primary" style={{ padding: "13px 28px", fontSize: "16px" }}>
          Enroll now
        </a>
        <a href="#curriculum" className="btn-outline" style={{ padding: "13px 28px", fontSize: "16px" }}>
          Curriculum
        </a>
      </div>

      {/* Video*/}
      <section className="relative w-full h-[700px] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0"
       style={{
    background: gradient
  }} />
        <div className="absolute inset-0">
          <TextureBg />
        </div>

        {/* LAYER 4: Foreground Image & Play Button */}
        <div className="relative z-10 w-full max-w-4xl px-4">
          <div className="group relative aspect-video rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10">
            <Image src="/video.png" alt="Video Thumbnail" width={1064} height={600} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

            {/* LAYER 5: Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
              <button className="w-20 h-20 bg-white/20 hover:bg-white/30 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30 transition-all active:scale-95 shadow-xl">
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
