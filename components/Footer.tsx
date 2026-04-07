"use client";
import Image from "next/image";
import { RightArrowIcon } from "./icons/RightArrow";
import SunMoonBgIcon from "./icons/SunMonBg";
import { Fragment } from "react";
const FOOTER_LINKS = [
  { label: "Terms & conditions", href: "#" },
  { label: "Refund policy", href: "#" },
  { label: "Pricing", href: "#pricing" },
  { label: "Support", href: "#" },
];

const AVATARS = ["/avatar3.jpg", "/avatar2.jpg", "/avatar3.jpg"];

export default function Footer() {
  return (
    <Fragment>
      {" "}
      <div className="container" style={{ paddingTop: "60px" }}>
        {" "}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-10">
          {/* Brand */}
          <div className="gsap-fade-up text-center lg:text-left">
            <h2 className="h2" style={{ fontFamily: "var(--font-sf-display)", fontWeight: 500, lineHeight: "1.1", color: "var(--text)" }}>
              The Deep
              <br />
              Work Blueprint
            </h2>
            <p className="text-body-normal mt-3 px-4" style={{ color: "var(--text2)" }}>
              Master Focus &amp; Get More Done in Less Time
            </p>
          </div>

          {/* Students card */}
          <div className="gsap-scale-in flex  flex-col justify-between gap-6 rounded-xl px-6 py-4 min-w-[260px]" style={{ background: "var(--blue)" }}>
            <div className="flex justify-between w-full">
              <div className="flex">
                {AVATARS.map((src, i) => (
                  <div key={i} className="w-8 h-8 rounded-full overflow-hidden border-2" style={{ borderColor: "var(--blue)", marginLeft: i === 0 ? 0 : "-8px" }}>
                    <Image src={src} alt="student" width={32} height={32} />
                  </div>
                ))}
              </div>
              <div className="relative w-8 h-8 rounded-full flex items-center justify-center transition-all">
                {/* Background circle — Absolute and centered */}
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <SunMoonBgIcon size={32} />
                </div>

                {/* Arrow icon — Nudge it slightly to the right to look visually centered */}
                <RightArrowIcon className="relative z-10 w-4 h-4 transition-colors text-[var(--blue)] translate-x-[1px]" />
              </div>
            </div>
            <div>
              <p className="body-sm mt-6 font-medium text-white">Join with 5K other students</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="border-t" style={{ background: "var(--bg)", borderColor: "var(--border)", paddingBottom: "40px" }}>
        <div className="container">
         
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-6 pt-6">
            <p className="body-sm text-center lg:text-left" style={{ color: "var(--text)" }}>
              © Copyright 2024, All Rights Reserved
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              {FOOTER_LINKS.map((l) => (
                <a
                  key={l.label}
                  className="body-sm no-underline transition-colors"
                  style={{ color: "var(--text)" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--text)")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text)")}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}
