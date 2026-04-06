"use client";
import { Fragment, useState } from "react";
import Badge from "@/components/ui/Badge";
import SunMoonBgIcon from "../icons/SunMonBg";
import { CheckIcon } from "@/components/icons/CheckIcon";
import { useTheme } from "@/hooks/useTheme";
import { PlayIcon } from "../icons/PlayIcon";
import { CaretIcon } from "../icons/CaretUp";
const MODULES = [
  {
    title: "Module 1: Foundations of Deep Work",
    duration: "1.7h of video",
    lessons: [
      { title: "Understanding Focus & Distraction", duration: "14:23", preview: true, active: true },
      { title: "The Science Behind Deep Work", duration: "22:51" },
      { title: "Identifying Your Productivity Killers", duration: "34:42" },
      { title: "How to Strengthen Your Attention Span", duration: "27:08" },
    ],
  },
  {
    title: "Module 2: Building Your Deep Work Routine",
    duration: "1.3h of video",
    lessons: [
      { title: "Designing Your Ideal Day", duration: "18:30" },
      { title: "Time Blocking Mastery", duration: "25:10" },
      { title: "Energy Management Fundamentals", duration: "35:20" },
    ],
  },
  {
    title: "Module 3: Eliminating Procrastination",
    duration: "1.5h of video",
    lessons: [
      { title: "The Root Causes of Procrastination", duration: "22:00" },
      { title: "Implementation Intentions", duration: "28:45" },
      { title: "Building Momentum Daily", duration: "39:15" },
    ],
  },
  {
    title: "Module 4: Advanced Focus & Productivity Hacks",
    duration: "1.2h of video",
    lessons: [
      { title: "Flow State Engineering", duration: "30:00" },
      { title: "Digital Minimalism in Practice", duration: "24:00" },
      { title: "Sustaining High Performance", duration: "18:00" },
    ],
  },
];

const FEATURES = [
  "6h of videos – Step-by-step deep work strategies.",
  "Templates & Trackers – Stay on track effortlessly.",
  "Live Q&As – Expert guidance & accountability.",
  "Exclusive Community – Connect with others.",
];

export default function Curriculum() {
  // Set of open indices — multiple can be open
  const [openSet, setOpenSet] = useState<Set<number>>(new Set());
  const { theme } = useTheme();
  const toggle = (i: number) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  return (
    <section id="curriculum" className="section-py" style={{ background: "var(--bg)" }}>
      <div className="container">
        <div className="text-center mb-14">
          <div className="gsap-fade-in flex justify-center mb-6">
            <Badge>Course Curriculum</Badge>
          </div>
          <h2 className="h2 gsap-fade-up">
            Mastering Deep Work: A Structured
            <br className="hidden sm:block" /> Path to Peak Productivity
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {" "}
          {/* Left — flat module list */}
          <div
            className="w-full"
            style={{
              maxHeight: "calc(100vh - var(--nav-h) - 100px)",
              overflowY: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {MODULES.map((mod, mi) => {
              const isOpen = openSet.has(mi);
              return (
                <div key={mi}>
                  {/* Module header */}
                  <button className="w-full flex items-start justify-between py-6 text-left bg-transparent border-none cursor-pointer gap-4" onClick={() => toggle(mi)}>
                    <div>
                      <p className="font-medium text-[20px] leading-snug mb-1" style={{ color: "var(--text)" }}>
                        {mod.title}
                      </p>
                      <p className="font-normal text-sm" style={{ color: "var(--text2)" }}>
                        {mod.duration}
                      </p>
                    </div>

                    {/* Triangle arrow */}
                    <div className="flex-shrink-0 mt-1 " style={{ transform: isOpen ? "rotate(180deg)" : "none" }}>
                      <CaretIcon width={19} height={15} color={theme === "light" ? "var(--text)" : "var(--text2)"} />
                    </div>
                  </button>
 {/* Divider — gradient line like Figma */}
                  <div
                    className="divider"
                  />
                  {/* Lessons */}
                  {isOpen && (
                    <div className="pb-4">
                      {mod.lessons.map((lesson, li) => (
                        <Fragment key={li}>
                          <div className="flex items-center gap-3.5 py-6 px-4">
                            {/* Play circle */}
                            {!lesson.preview ? (
                              <div className="relative w-[32px] h-[32px] rounded-full flex items-center justify-center transition-all">
                                {/* Background icon — same size as wrapper */}
                                <div className="absolute inset-0 flex items-center justify-center" style={theme === "light" ? { color: "var(--neutral-200)" } : { color: "#282d33" }}>
                                  <SunMoonBgIcon size={32} />
                                </div>

                                <PlayIcon
                                  className={`relative z-10 w-[13px] h-[13px] transition-colors 
                ${theme === "light" ? "text-white" : "text-black"}`}
                                />
                              </div>
                            ) : (
                              <div className="relative w-[32px] h-[32px] rounded-full flex items-center justify-center transition-all">
                                {/* Background icon — same size as wrapper */}
                                <div className="absolute inset-0 flex items-center justify-center" style={theme === "light" ? { color: "var(--blue)" } : { color: "#ffffff" }}>
                                  <SunMoonBgIcon size={32} preview={lesson.preview} />
                                </div>

                                {/* Check icon — centered via flex on parent */}
                                <PlayIcon
                                  className={`relative z-10 w-[13px] h-[13px] transition-colors 
                ${theme === "light" ? "text-white" : "text-[var(--blue)]"}`}
                                />
                              </div>
                            )}

                            <span className="text-[20px] font-normal flex-1" style={{ color: "var(--text2)" }}>
                              {lesson.title}
                            </span>

                            {lesson.preview && (
                              <span className="text-[17px] px-4 py-1 rounded-full font-medium flex-shrink-0" style={{ background: "rgba(37,99,235,0.15)", color: "var(--blue2)" }}>
                                Preview
                              </span>
                            )}

                            <span className="text-[17px] flex-shrink-0" style={{ color: "var(--text2)" }}>
                              {lesson.duration}
                            </span>
                          </div>
                          <div
                            className="divider"
                          />
                        </Fragment>
                      ))}
                    </div>
                  )}

                 
                </div>
              );
            })}
          </div>
          {/* Right — sticky sidebar */}
          <div
            className="gsap-scale-in rounded-2xl p-8 lg:sticky w-full"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border2)",
              top: "calc(var(--nav-h) + 20px)",
              height: "fit-content",
            }}
          >
            <h3 className="font-semibold mb-8" style={{ color: "var(--text)", fontSize: "clamp(1.3rem, 2.5vw, 1.6rem)", lineHeight: 1.3 }}>
              Not only video lessons!
            </h3>

            <div className="flex flex-col gap-5 mb-8">
              {FEATURES.map((f, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="relative w-[32px] h-[32px] rounded-full flex items-center justify-center transition-all">
                    <div className="absolute inset-0 flex items-center justify-center" style={theme === "light" ? { color: "var(--neutral-200)" } : { color: "#282d33" }}>
                      <SunMoonBgIcon size={32} withBorder={true} />
                    </div>
                    <CheckIcon
                      className={`relative z-10 w-[16px] h-[16px] transition-colors 
                ${theme === "light" ? "text-slate-800" : "text-white"}`}
                    />
                  </div>
                  <span className="text-sm" style={{ color: "var(--text2)", lineHeight: 1.5 }}>
                    {f}
                  </span>
                </div>
              ))}
            </div>

            <a href="#pricing" className="btn-primary block text-center w-full" style={{ fontSize: "15px", padding: "15px", borderRadius: "12px" }}>
              Enroll now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
