import Badge from "@/components/ui/Badge";

const ITEMS = [
  {
    icon: "💡",
    title: "Develop laser-sharp focus & eliminate distractions.",
    desc: "Learn neuroscience-backed techniques to reclaim your attention and work with deep clarity.",
  },
  {
    icon: "🧠",
    title: "Master deep work techniques for smarter productivity.",
    desc: "Structured frameworks that let you produce more high-quality work in less time.",
  },
  {
    icon: "✅",
    title: "Overcome procrastination & get more done.",
    desc: "Break the procrastination cycle with proven behavioral systems and accountability loops.",
  },
  {
    icon: "🔄",
    title: "Build lasting habits for long-term success.",
    desc: "Create a sustainable productivity system that keeps working for years to come.",
  },
];

export default function Blueprint() {
  return (
    <section className="section-py" style={{ background: "var(--bg)" }}>
      <div className="container text-center">
        {/* Badge */}
        <div className="gsap-fade-in flex justify-center mb-6">
          <Badge>The Deep Work Blueprint</Badge>
        </div>
        <h2 className="h2 gsap-fade-up max-w-[640px] mx-auto mb-16">A self-paced, results-driven course designed to help you</h2>

        {/* Timeline */}
        <div className="max-w-[560px] mx-auto text-left">
          {ITEMS.map((item, i) => (
            <div key={i} className="gsap-fade-up relative" style={{ paddingLeft: "40px", paddingBottom: i < ITEMS.length - 1 ? "56px" : "0" }} data-delay={i}>
              {/* Vertical line — blue at top fading to transparent */}
              {i < ITEMS.length - 1 && (
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
                  top: "4px",
                  width: "20px",
                  height: "20px",
                  borderRadius: "99px",
                  background: "#2466F2",
                  zIndex: 1,
                }}
              />

              {/* Icon circle */}
              <div
                className="flex items-center justify-center mb-5"
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.07)",
                  fontSize: "22px",
                }}
              >
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
          ))}
        </div>
      </div>
    </section>
  );
}
