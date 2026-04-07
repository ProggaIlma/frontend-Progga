"use client";
import Badge from "@/components/ui/Badge";
import { BulbIcon } from "@/components/icons/BulbIcon";
import { CheckIcon } from "@/components/icons/CheckIcon";
import { BrainIcon } from "@/components/icons/BrainIcon";
import { RouteIcon } from "@/components/icons/RouteIcon";
import { useTheme } from "@/hooks/ThemeProvider";
import SunMoonBgIcon from "../icons/SunMonBg";

export default function Blueprint() {
  const { theme } = useTheme();
  const ITEMS = [
    {
      icon: (
        <BulbIcon
          className={`relative z-10 w-[28px] h-[28px] transition-colors 
                  text-primary`}
        />
      ),
      title: "Develop laser-sharp focus & eliminate distractions.",
      desc: "Learn neuroscience-backed techniques to reclaim your attention and work with deep clarity.",
    },
    {
      icon: (
        <CheckIcon
          className={`relative z-10 w-[28px] h-[28px] transition-colors 
                  text-primary`}
        />
      ),
      title: "Master deep work techniques for smarter productivity.",
      desc: "Structured frameworks that let you produce more high-quality work in less time.",
    },
    {
      icon: (
        <BrainIcon
          className={`relative z-10 w-[28px] h-[28px] transition-colors 
                  text-primary`}
        />
      ),
      title: "Overcome procrastination & get more done.",
      desc: "Break the procrastination cycle with proven behavioral systems and accountability loops.",
    },
    {
      icon: (
        <RouteIcon
          className={`relative z-10 w-[28px] h-[28px] transition-colors 
                  text-primary`}
        />
      ),
      title: "Build lasting habits for long-term success.",
      desc: "Create a sustainable productivity system that keeps working for years to come.",
    },
  ];
  return (
    <section id="blueprint" className="section-py" style={{ background: "var(--bg)" }}>
      <div className="container text-center">
        {/* Badge */}
        <div className="gsap-fade-in flex justify-center mb-6">
          <Badge>The Deep Work Blueprint</Badge>
        </div>
        <h2 className="h2 gsap-fade-up max-w-[640px] mx-auto mb-[9rem] text-[var(--headtext)]" >A self-paced, results-driven course designed to help you</h2>

        {/* Timeline */}
        <div className="max-w-[400px] mx-auto text-left">
          {ITEMS.map((item, i) => (
            <div key={i} className="gsap-fade-up relative" style={{ paddingLeft: "0px", paddingBottom: i < ITEMS.length ? "66px" : "0" }} data-delay={i}>
              {/* Vertical line — blue at top fading to transparent */}
              {i < ITEMS.length && (
                <div
                  className="absolute"
                  style={{
                    left: "9px",
                    top: "40px",
                    bottom: "40px",
                    width: "2px",
                    background: "linear-gradient(to bottom, transparent 0%, #2466F2 35%, #2466F2 50%, #4B7FE8 65%, transparent 100%)",
                  }}
                />
              )}

              {/* Blue dot — top left */}
              <div
                className="absolute"
                style={{
                  left: "0px",
                  top: "0px",
                  width: "20px",
                  height: "20px",
                  borderRadius: "99px",
                  background: "#2466F2",
                  zIndex: 1,
                }}
              />
              <div className="flex flex-col items-start gap-4 ml-14 md:ml-[80px] pt-6">
                <div className="relative w-[68px] h-[68px] rounded-full flex items-center justify-center transition-all">
                  <div className="absolute inset-0 z-0 text-[var(--neutral-200)]" style={theme === "light" ? { color: "var(--neutral-200)" } : { color: "#282d33" }}>
                    <SunMoonBgIcon size={64} withBorder={true} />
                  </div>

                  {item.icon}
                </div>

                {/* Title */}
                <p
                  style={{
                    color: "var(--text)",
                    fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)",
                    lineHeight: "1.5",
                    fontWeight: 400,
                    maxWidth: "380px",
                  }}
                >
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
