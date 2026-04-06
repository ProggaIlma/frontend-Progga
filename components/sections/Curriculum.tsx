"use client";
import { useState } from "react";
import Badge from "@/components/ui/Badge";

const MODULES = [
  {
    title: "Module 1: Foundations of Deep Work",
    duration: "1.7h of video",
    lessons: [
      { title: "Understanding Focus & Distraction", duration: "14:23", preview: true, active: true },
      { title: "The Science Behind Deep Work",       duration: "22:51" },
      { title: "Identifying Your Productivity Killers", duration: "34:42" },
      { title: "How to Strengthen Your Attention Span", duration: "27:08" },
    ],
  },
  {
    title: "Module 2: Building Your Deep Work Routine",
    duration: "1.3h of video",
    lessons: [
      { title: "Designing Your Ideal Day",      duration: "18:30" },
      { title: "Time Blocking Mastery",         duration: "25:10" },
      { title: "Energy Management Fundamentals", duration: "35:20" },
    ],
  },
  {
    title: "Module 3: Eliminating Procrastination",
    duration: "1.5h of video",
    lessons: [
      { title: "The Root Causes of Procrastination", duration: "22:00" },
      { title: "Implementation Intentions",          duration: "28:45" },
      { title: "Building Momentum Daily",            duration: "39:15" },
    ],
  },
  {
    title: "Module 4: Advanced Focus & Productivity Hacks",
    duration: "1.2h of video",
    lessons: [
      { title: "Flow State Engineering",        duration: "30:00" },
      { title: "Digital Minimalism in Practice", duration: "24:00" },
      { title: "Sustaining High Performance",   duration: "18:00" },
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
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="curriculum" className="section-py" style={{ background: "var(--bg2)" }}>
      <div className="container">
        <div className="text-center mb-14">
          <div className="gsap-fade-in flex justify-center mb-6">
            <Badge>Course Curriculum</Badge>
          </div>
          <h2 className="h2 gsap-fade-up">
            Mastering Deep Work: A Structured<br className="hidden sm:block" /> Path to Peak Productivity
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 items-start">
          {/* Modules list */}
          <div className="flex flex-col gap-1">
            {MODULES.map((mod, mi) => {
              const isOpen = openIndex === mi;
              return (
                <div
                  key={mi}
                  className="gsap-fade-up rounded-xl overflow-hidden border transition-colors"
                  style={{ background: "var(--surface)", borderColor: isOpen ? "var(--border2)" : "var(--border)" }}
                  data-delay={mi}
                >
                  {/* Header */}
                  <button
                    className="w-full flex items-center justify-between px-5 py-[18px] border-none bg-transparent cursor-pointer text-left"
                    onClick={() => setOpenIndex(isOpen ? -1 : mi)}
                  >
                    <div>
                      <p className="h5" style={{ color: "var(--text)" }}>{mod.title}</p>
                      <p className="body-sm mt-0.5" style={{ color: "var(--text2)" }}>{mod.duration}</p>
                    </div>
                    <span
                      className="text-[var(--text3)] text-xs transition-transform duration-300 ml-4 flex-shrink-0"
                      style={{ transform: isOpen ? "rotate(180deg)" : "none" }}
                    >
                      ▼
                    </span>
                  </button>

                  {/* Lessons */}
                  {isOpen && (
                    <div className="border-t" style={{ borderColor: "var(--border)" }}>
                      {mod.lessons.map((lesson, li) => (
                        <div
                          key={li}
                          className="flex items-center gap-3.5 px-5 py-3 border-b last:border-b-0"
                          style={{ borderColor: "var(--border)" }}
                        >
                          {/* Play btn */}
                          <div
                            className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] flex-shrink-0 border"
                            style={{
                              background: lesson.active ? "var(--blue)" : "var(--surface2)",
                              borderColor: lesson.active ? "var(--blue)" : "var(--border2)",
                              color: lesson.active ? "white" : "var(--text2)",
                            }}
                          >
                            ▶
                          </div>
                          <span className="body-sm flex-1" style={{ color: "var(--text)" }}>{lesson.title}</span>
                          {lesson.preview && (
                            <span
                              className="text-[11px] px-2 py-0.5 rounded font-medium"
                              style={{ background: "rgba(37,99,235,0.15)", color: "var(--blue2)" }}
                            >
                              Preview
                            </span>
                          )}
                          <span className="body-sm flex-shrink-0" style={{ color: "var(--text3)" }}>{lesson.duration}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Sticky sidebar */}
          <div
            className="gsap-scale-in rounded-xl border p-7 lg:sticky"
            style={{ background: "var(--surface)", borderColor: "var(--border2)", top: "calc(var(--nav-h) + 20px)" }}
          >
            <p className="h4 mb-5" style={{ color: "var(--text)" }}>Not only video lessons!</p>
            {FEATURES.map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-3 py-3 border-b last:border-b-0 body-sm"
                style={{ borderColor: "var(--border)", color: "var(--text2)" }}
              >
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] flex-shrink-0"
                  style={{ background: "rgba(37,99,235,0.15)", color: "var(--blue2)" }}
                >
                  ✓
                </span>
                {f}
              </div>
            ))}
            <a href="#pricing" className="btn-primary w-full mt-5" style={{ fontSize: "15px", padding: "14px" }}>
              Enroll now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
