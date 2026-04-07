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

const gradient =
  theme === "dark"
    ? "linear-gradient(to bottom, #08080f 0%, #08080f 30%, #0d1f5c 100%)"
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
      <h1 className="h1 gsap-fade-up relative z-10 max-w-[560px] mb-5" style={{ color: "var(--headtext)" }}>
        Master Focus &amp; Get More Done in Less Time
      </h1>

    <p className="text-body-normal text-center gsap-fade-up relative z-10 max-w-[520px] mx-auto mb-9" style={{ color: "var(--text2)" }}>
        A step-by-step system to eliminate procrastination, train your brain for deep work, and boost productivity effortlessly.
      </p>
     

      {/* Video*/}
      <section
        className="relative w-full max-h-[900px] pb-6 md:pb-10  pt-5 flex items-center justify-center overflow-hidden
      "
      >
        <div
          className="absolute inset-0"
          style={{
            background: gradient,
            ...(theme === "dark" && { backdropFilter: "blur(400px)" }),
          }}
        />
        <div className="absolute inset-0">
          <TextureBg theme={theme}/>
        </div>

        {/* LAYER 4: Foreground Image & Play Button */}
        <div className="relative z-10 w-full max-w-4xl px-4"> {/* CTAs */}
            {/* Sub */}
      

      <div className="gsap-fade-up relative z-10 flex flex-wrap items-center justify-center gap-3 mb-14">
        <a href="#pricing" className="btn-primary" style={{ padding: "13px 28px", fontSize: "16px" }}>
          Enroll now
        </a>
        <a href="#curriculum" className="btn-outline" style={{ padding: "13px 28px", fontSize: "16px" }}>
          Curriculum
        </a>
      </div>
          <div className="group relative aspect-video rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <Image src="/video.png" alt="Video Thumbnail" width={1064} height={600} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

            {/* LAYER 5: Play Button Overlay */}

            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
              <div className="relative w-[88px] h-[88px] rounded-full flex items-center justify-center transition-all">
                <div className="absolute inset-0 flex items-center justify-center text-white" >
                  <SunMoonBgIcon size={84} preview={true} />
                </div>

                <PlayIcon
                  className={`relative z-10 w-[25px] h-[30px] transition-colors 
               text-[var(--blue)]`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
