import Badge from "@/components/ui/Badge";
import Image from "next/image";

const PAIN_PHOTOS = ["/pain1.png", "/pain2.png", "/pain3.png"];

const SIDE_IMGS = ["/side1.png", "/side2.png", "/side3.png"];

export default function Pain() {
  return (
    <section className="section-py" style={{ background: "var(--bg)" }}>
      <div className="container text-center">
        {/* Badge */}
        <div className="gsap-fade-in flex justify-center mb-6">
          <Badge>Are Distractions Holding You Back?</Badge>
        </div>

        {/* Headline */}
        <h1 className="h1 gsap-fade-up max-w-[700px] mx-auto mb-10">
          If you struggle to focus, feel overwhelmed by endl
          <span style={{ color: "var(--text3)" }}>ess tasks, or procrastinate instead of making progress, you&apos;re not alone.</span>
        </h1>

        {/* Pain photos */}
        <div className="gsap-fade-in flex justify-center gap-3 flex-wrap mb-20">
          {PAIN_PHOTOS.map((src, i) => (
            <div key={i} className="w-[120px] h-[120px] rounded-2xl overflow-hidden border" style={{ borderColor: "var(--border2)", background: "var(--surface)" }}>
              <Image src={src} alt="student" width={100} height={100} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Bottom two-col layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Left photo */}
          <div className="hidden lg:block gsap-slide-left rounded-[20px] max-h-[642px] overflow-hidden lg:min-h-full" style={{ border: "1px solid var(--border)" }}>
            <Image src="/front1.png" alt="focused work" width={365} height={440} className="w-full h-full object-cover" style={{ minHeight: "300px" }} />
          </div>

          {/* Right dark panel */}
          <div className="gsap-slide-right gap-10 rounded-[20px] overflow-hidden flex flex-col p-10 min-h-[340px]" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
            {/* Top row: No worries pill (left) + Avatars (right) */}
            <div className="flex flex-col sm:flex-row items-start justify-start sm:justify-between gap-4">
              {/* No worries pill */}

              <Badge>No worries</Badge>

              {/* Avatars + label */}
              <div className="flex flex-col sm:items-end gap-2">
                <div className="flex sm:items-center">
                  {PAIN_PHOTOS.map((src, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full overflow-hidden border-2 flex-shrink-0"
                      style={{
                        borderColor: "var(--surface)",
                        marginLeft: i === 0 ? 0 : "-10px",
                        zIndex: PAIN_PHOTOS.length - i,
                        position: "relative",
                      }}
                    >
                      <img src={src} alt="student" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-right" style={{ color: "var(--text2)" }}>
                  Join with 5K other students
                </p>
              </div>
            </div>

            {/* Body: text left, side images right */}
            <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-start gap-4 pt-12">
              {/* Text */}
              <div className="flex flex-col text-left pr-10">
                <p className="text-body-normal mb-4 pr-3" style={{ color: "var(--text3)" }}>
                  The ability to concentrate deeply is the ultimate productivity hack
                </p>
                <p className="font-medium leading-tight pr-3" style={{ color: "var(--text)", fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
                  And fortunately it&apos;s a skill you can train &amp; develop.
                </p>
              </div>

              {/* Side images */}
              <div className="flex flex-row sm:flex-col  gap-3 flex-shrink-0">
                {SIDE_IMGS.map((src, i) => (
                  <div key={i} className="w-[118px] h-[120px] rounded-xl overflow-hidden" style={{ border: "1px solid var(--border2)" }}>
                    <Image src={src} alt="student" width={118} height={120} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
