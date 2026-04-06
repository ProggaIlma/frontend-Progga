import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Pain from "@/components/sections/Pain";
import Blueprint from "@/components/sections/Blueprint";
import Curriculum from "@/components/sections/Curriculum";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Pain />
        <Blueprint />
        <Curriculum />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
      {/* GSAP scroll triggers — client-only */}
      <ScrollAnimations />
    </>
  );
}
