"use client";
import { useEffect } from "react";

export default function ScrollAnimations() {
  useEffect(() => {
    // Dynamically import GSAP to keep it client-only
    Promise.all([
      import("gsap"),
      import("gsap/ScrollTrigger"),
    ]).then(([{ gsap }, { ScrollTrigger }]) => {
      gsap.registerPlugin(ScrollTrigger);

      // ── Hero (immediate, no scroll trigger) ──
      const heroTl = gsap.timeline({ delay: 0.15 });
      heroTl
        .to(".hero-anim-badge",  { opacity: 1, duration: 0.55, ease: "power2.out" })
        .to(".hero-anim-h1",     { opacity: 1, y: 0, duration: 0.7,  ease: "power3.out" }, "-=0.25")
        .to(".hero-anim-sub",    { opacity: 1, y: 0, duration: 0.65, ease: "power3.out" }, "-=0.45")
        .to(".hero-anim-ctas",   { opacity: 1, y: 0, duration: 0.6,  ease: "power3.out" }, "-=0.4")
        .to(".hero-anim-video",  { opacity: 1, scale: 1, duration: 0.9, ease: "power3.out" }, "-=0.35");

      // ── Helper: batch scroll-triggered elements ──
      const scrollFadeUp = (selector: string, vars: gsap.TweenVars = {}) => {
        gsap.utils.toArray<HTMLElement>(selector).forEach((el) => {
          const delay = parseFloat(el.getAttribute("data-delay") ?? "0") * 0.1;
          gsap.to(el, {
            opacity: 1, y: 0, duration: 0.75, delay, ease: "power3.out",
            ...vars,
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          });
        });
      };

      const scrollFadeIn = (selector: string) => {
        gsap.utils.toArray<HTMLElement>(selector).forEach((el) => {
          gsap.to(el, {
            opacity: 1, duration: 0.65, ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" },
          });
        });
      };

      const scrollSlide = (selector: string, fromX: number) => {
        gsap.utils.toArray<HTMLElement>(selector).forEach((el) => {
          gsap.to(el, {
            opacity: 1, x: 0, duration: 0.85, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
          });
        });
      };

      const scrollScaleIn = (selector: string) => {
        gsap.utils.toArray<HTMLElement>(selector).forEach((el) => {
          gsap.to(el, {
            opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.3)",
            scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
          });
        });
      };

      // Apply to all sections (excluding hero — those fire immediately above)
      scrollFadeUp(".gsap-fade-up:not(.hero *)");
      scrollFadeIn(".gsap-fade-in:not(.hero *)");
      scrollSlide(".gsap-slide-left", -50);
      scrollSlide(".gsap-slide-right", 50);
      scrollScaleIn(".gsap-scale-in:not(.hero *)");

      // Blueprint dots spring in
      gsap.utils.toArray<HTMLElement>(".bp-dot-anim").forEach((dot, i) => {
        gsap.from(dot, {
          scale: 0, duration: 0.5, delay: i * 0.12, ease: "back.out(2)",
          scrollTrigger: { trigger: dot, start: "top 90%", toggleActions: "play none none none" },
        });
      });

      // Parallax on hero glow
      gsap.to(".hero-glow-blob", {
        yPercent: 35, ease: "none",
        scrollTrigger: {
          trigger: "section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Nav border on scroll
      ScrollTrigger.create({
        start: "top top",
        onUpdate: (self) => {
          const nav = document.querySelector<HTMLElement>("nav");
          if (nav) {
            nav.style.borderBottomColor =
              self.progress > 0 ? "var(--border2)" : "var(--border)";
          }
        },
      });

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    });
  }, []);

  return null;
}
