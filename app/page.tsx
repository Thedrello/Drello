"use client"

import { motion } from "framer-motion"
import HeroSection from "@/app/components/sections/hero-section"
import Footer from "./components/sections/footer"
import BeforeFooter from "./components/sections/before-footer"
import BlogSection from "./components/sections/blog"
import Features from "./components/sections/features"
import Testimonials from "./components/sections/testimonials"
import NavBar from "./components/sections/nav-bar"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import PricingHeader from "./components/sections/pricing-header"

export default function Home() {
  const { ref: heroRef, controls: heroControls } = useScrollAnimation()
  const { ref: featuresRef, controls: featuresControls } = useScrollAnimation()
  const { ref: testimonialsRef, controls: testimonialsControls } = useScrollAnimation()
  const { ref: pricingRef, controls: pricingControls } = useScrollAnimation()
  const { ref: blogRef, controls: blogControls } = useScrollAnimation()
  const { ref: beforeFooterRef, controls: beforeFooterControls } = useScrollAnimation()
  const { ref: footerRef, controls: footerControls } = useScrollAnimation()

  return (
    <main className="min-h-screen bg-white max-w-screen-2xl min-2xl:px-[71px] mx-auto ">
      <NavBar />

      {/* Hero Section - Fade up with stagger */}
      <motion.div
        ref={heroRef}
        initial={{ opacity: 0, y: 100 }}
        animate={heroControls}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <HeroSection />
      </motion.div>

      {/* Features - Slide in alternating */}
      <motion.div
        ref={featuresRef}
        initial={{ opacity: 0, x: -100 }}
        animate={featuresControls}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <Features />
      </motion.div>

      {/* Testimonials - Scale with rotation */}
      <motion.div
        ref={testimonialsRef}
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={testimonialsControls}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          scale: { type: "spring", stiffness: 100 },
          rotate: { duration: 0.6 },
        }}
      >
        <Testimonials />
      </motion.div>

      {/* Pricing - Bounce up */}
      <motion.div
        ref={pricingRef}
        initial={{ opacity: 0, y: 150 }}
        animate={pricingControls}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          type: "spring",
          bounce: 0.4,
        }}
      >
        <PricingHeader />
      </motion.div>

      {/* Blog - Blur fade in */}
      <motion.div
        ref={blogRef}
        initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
        animate={blogControls}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <BlogSection />
      </motion.div>

      {/* Before Footer - Slide from sides */}
      <motion.div
        ref={beforeFooterRef}
        initial={{ opacity: 0, x: 200 }}
        animate={beforeFooterControls}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <BeforeFooter />
      </motion.div>
        <Footer />
     
    </main>
  )
}
