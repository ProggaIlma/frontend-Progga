"use client";
import Badge from "@/components/ui/Badge";
import Countdown from "@/components/ui/Countdown";
import SunMoonBgIcon from "../icons/SunMonBg";
import { CheckIcon } from "@/components/icons/CheckIcon";
import { useTheme } from "@/hooks/useTheme";
import { HexagonIcon } from "../icons/HexagonIcon";
const FEATURES = [
  "6h of videos – Step-by-step deep work strategies.",
  "Templates & Trackers – Stay on track effortlessly.",
  "Live Q&As – Expert guidance & accountability.",
  "Exclusive Community – Connect with others.",
];

export default function Pricing() {
  const { theme } = useTheme();
  return (
    <section id="pricing" className="section-py" style={{ background: "var(--bg)" }}>
      <div className="container">
       

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Left — what you get */}
          <div className="gsap-fade-up md:col-span-2 rounded-xl border p-9 flex flex-col justify-center" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <div className="mb-6">
              <Badge>Introducting</Badge>{" "}
            </div>

            <h2 className="h2 mb-3" style={{ color: "var(--headtext)" }}>
              The Deep Work Blueprint
            </h2>
            <p className="body-normal mb-7" style={{ color: "var(--text)" }}>
              What extra you will get if you enroll now
            </p>

            <div className="flex flex-col gap-4">
              {["Bonus: 1:1 coaching session to boost focus.", "Discount: Save 30% when you enroll now!"].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="relative w-[32px] h-[32px] rounded-full flex items-center justify-center transition-all">
                    <div className="absolute inset-0 flex items-center justify-center" style={theme === "light" ? { color: "var(--neutral-200)" } : { color: "#282d33" }}>
                      <SunMoonBgIcon size={32} withBorder={true} />
                    </div>
                    <HexagonIcon
                      className="relative z-10 w-[16px] h-[16px] transition-colors text-primary"
                    />
                  </div>
                  <span className="body-sm" style={{ color: "var(--text2)", top: "5px", position: "relative" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — price card */}
          <div
            className="gsap-scale-in md:col-span-1 rounded-xl border p-9 flex flex-col"
            style={{
              borderColor: "transparent",
              background: `
    linear-gradient(var(--surface), var(--surface)) padding-box, 
    linear-gradient(135deg, #2466F2 0%, rgba(36,102,242,0) 35%, rgba(36,102,242,0) 65%, #2466F2 100%) border-box
  `,
            }}
          >
            {/* Price row */}
            <div className="flex items-center justify-between gap-3 mb-2">
              <div>
                <span className="font-semibold h1" style={{ color: "var(--text)" }}>
                  $349
                </span>
                <span className="relative h4 pl-2" style={{ color: "var(--text2)" }}>
                  $500
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 80 80" preserveAspectRatio="none" style={{ pointerEvents: "none" }}>
                    <line x1="10" y1="20" x2="100" y2="60" stroke="#ff1818" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
                  </svg>
                </span>
              </div>
              <div>
                <span className="text-body-sm px-5 py-2 rounded-md" style={{ background: "var(--blue)", color: "white" }}>
                  30% off
                </span>
              </div>
            </div>

            {/* Timer */}
            <p className="text-body-normal mb-6 mt-6" style={{ color: "var(--text)" }}>
              30% off until{" "}
              <span style={{ color: "var(--text)" }}>
                <Countdown initialSeconds={4 * 86400 + 2 * 3600 + 41 * 60 + 17} />
              </span>
            </p>

            {/* Features */}
            <div className="flex flex-col">
              {FEATURES.map((f, i) => (
                <div key={i} className="flex items-center gap-3 py-3  text-body-sm " style={{ color: "var(--text2)" }}>
                  <div className="relative w-[32px] h-[32px] rounded-full flex items-center justify-center transition-all">
                    <div className="absolute inset-0 flex items-center justify-center" style={theme === "light" ? { color: "var(--neutral-200)" } : { color: "#282d33" }}>
                      <SunMoonBgIcon size={32} withBorder={true} />
                    </div>
                    <CheckIcon
                      className="relative z-10 w-[16px] h-[16px] transition-colors text-primary"
                    />
                  </div>
                  {f}
                </div>
              ))}
            </div>
            <a href="#" className="btn-primary mt-6" style={{ fontSize: "16px", padding: "15px" }}>
              Enroll now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
