import Badge from "@/components/ui/Badge";
import Countdown from "@/components/ui/Countdown";

const FEATURES = [
  "6h of videos – Step-by-step deep work strategies.",
  "Templates & Trackers – Stay on track effortlessly.",
  "Live Q&As – Expert guidance & accountability.",
  "Exclusive Community – Connect with others.",
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-py" style={{ background: "var(--bg2)" }}>
      <div className="container">
        <div className="text-center mb-14">
          <div className="gsap-fade-in flex justify-center mb-6">
            <Badge>Pricing</Badge>
          </div>
          <h2 className="h2 gsap-fade-up">Simple, Transparent Pricing</h2>
          <p className="body-normal mt-3 gsap-fade-up" style={{ color: "var(--text2)" }}>
            One payment. Lifetime access. No subscriptions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[860px] mx-auto items-stretch">
          {/* Left — what you get */}
          <div
            className="gsap-fade-up rounded-xl border p-9 flex flex-col"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="badge-dot badge-dot--pulse" />
              <span className="body-sm" style={{ color: "var(--text2)" }}>Introducing</span>
            </div>

            <h3 className="h3 mb-3" style={{ color: "var(--text)" }}>The Deep Work Blueprint</h3>
            <p className="body-sm mb-7" style={{ color: "var(--text2)" }}>
              What extra you will get if you enroll now
            </p>

            <div className="flex flex-col gap-4 mt-auto">
              {[
                "Bonus: 1:1 coaching session to boost focus.",
                "Discount: Save 30% when you enroll now!",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(37,99,235,0.15)", color: "var(--blue2)" }}
                  >
                    ✓
                  </span>
                  <span className="body-sm" style={{ color: "var(--text2)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — price card */}
          <div
            className="gsap-scale-in rounded-xl border p-9 flex flex-col glow-blue"
            style={{ background: "var(--surface)", borderColor: "var(--blue)" }}
          >
            {/* Price row */}
            <div className="flex items-center gap-3 mb-2">
              <span
                className="font-semibold"
                style={{ fontFamily: "var(--font-sf-display)", fontSize: "clamp(36px,5vw,52px)", lineHeight: "115%", color: "var(--text)" }}
              >
                $349
              </span>
              <span className="h4 line-through" style={{ color: "var(--text3)" }}>$500</span>
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-md"
                style={{ background: "var(--blue)", color: "white" }}
              >
                30% off
              </span>
            </div>

            {/* Timer */}
            <p className="body-sm mb-6" style={{ color: "var(--text2)" }}>
              30% off until{" "}
              <span className="font-semibold" style={{ color: "var(--text)" }}>
                <Countdown initialSeconds={4 * 86400 + 2 * 3600 + 41 * 60 + 17} />
              </span>
            </p>

            {/* Features */}
            <div className="flex flex-col border-t" style={{ borderColor: "var(--border)" }}>
              {FEATURES.map((f, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 py-3 border-b body-sm last:border-b-0"
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
            </div>

            <a
              href="#"
              className="btn-primary mt-6"
              style={{ fontSize: "16px", padding: "15px" }}
            >
              Enroll now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
