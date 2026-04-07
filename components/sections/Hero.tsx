"use client"; 
import Badge from "@/components/ui/Badge";
import Countdown from "@/components/ui/Countdown";
import { TextureBg } from "../icons/TextureBg";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "@/hooks/useTheme";
import SunMoonBgIcon from "../icons/SunMonBg";
import { PlayIcon } from "../icons/PlayIcon";
export default function Hero() {
   const { theme } = useTheme();


  const gradient =  theme === "dark"
    ? "linear-gradient(to bottom, #0a0a0f 0%, #1245B3 100%)"
    : "linear-gradient(to bottom, #f5f5f8 0%, #1245B3 100%)";

 
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
      <section className="relative w-full max-h-[700px] pb-6 md:pb-10  pt-24 flex items-center justify-center overflow-hidden
      ">
        <div className="absolute inset-0"
       style={{
    background: gradient
  }} />
        <div className="absolute inset-0">
          <TextureBg />
        </div>

        {/* LAYER 4: Foreground Image & Play Button */}
        <div className="relative z-10 w-full max-w-4xl px-4">
          <div className="group relative aspect-video rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <Image src="/video.png" alt="Video Thumbnail" width={1064} height={600} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

            {/* LAYER 5: Play Button Overlay */}
            
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">

            <div className="relative w-[60px] h-[60px] rounded-full flex items-center justify-center transition-all">
                    <div className="absolute inset-0 flex items-center justify-center" style={theme === "light" ? { color: "var(--blue)" } : { color: "#ffffff" }}>
                      <SunMoonBgIcon size={60} preview={true} />
                    </div>

                    <PlayIcon
                      className={`relative z-10 w-[18px] h-[21px] transition-colors 
                ${theme === "light" ? "text-white" : "text-[var(--blue)]"}`}
                    />
                  </div></div>
          </div>
        </div>
      </section>
    </section>
  );
}
