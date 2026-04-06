"use client"
const FOOTER_LINKS = [
  { label: "Terms & conditions", href: "#" },
  { label: "Refund policy",      href: "#" },
  { label: "Pricing",            href: "#pricing" },
  { label: "Support",            href: "#" },
];

const AVATARS = [
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&q=80",
];

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{ background: "var(--bg)", borderColor: "var(--border)", paddingTop: "60px", paddingBottom: "40px" }}
    >
      <div className="container">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
          {/* Brand */}
          <div className="gsap-fade-up">
            <h2
              className="h2"
              style={{ fontFamily: "var(--font-sf-display)", fontWeight: 500, lineHeight: "1.1", color: "var(--text)" }}
            >
              The Deep<br />Work Blueprint
            </h2>
            <p className="body-sm mt-3" style={{ color: "var(--text2)" }}>
              Master Focus &amp; Get More Done in Less Time
            </p>
          </div>

          {/* Students card */}
          <div
            className="gsap-scale-in flex items-center justify-between gap-6 rounded-xl px-6 py-4 min-w-[260px]"
            style={{ background: "var(--blue)" }}
          >
            <div>
              <div className="flex">
                {AVATARS.map((src, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full overflow-hidden border-2"
                    style={{ borderColor: "var(--blue)", marginLeft: i === 0 ? 0 : "-8px" }}
                  >
                    <img src={src} alt="student" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p className="body-sm mt-2 font-medium text-white">Join with 5K other students</p>
            </div>
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0"
              style={{ background: "rgba(255,255,255,0.2)", fontSize: "16px" }}
            >
              →
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t" style={{ borderColor: "var(--border)" }} />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6">
          <p className="body-sm" style={{ color: "var(--text)" }}>
            © Copyright 2024, All Rights Reserved
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            {FOOTER_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="body-sm no-underline transition-colors"
                style={{ color: "var(--text)" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--text)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text2)")}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
