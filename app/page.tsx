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
  const { ref: heroRef, controls: heroControls, transition: heroTransition } = useScrollAnimation('fadeUp')
  const { ref: featuresRef, controls: featuresControls, transition: featuresTransition } = useScrollAnimation('slideIn')
  const { ref: testimonialsRef, controls: testimonialsControls, transition: testimonialsTransition } = useScrollAnimation('scaleRotate')
  const { ref: pricingRef, controls: pricingControls, transition: pricingTransition } = useScrollAnimation('bounce')
  const { ref: blogRef, controls: blogControls, transition: blogTransition } = useScrollAnimation('blurFade')
  const { ref: beforeFooterRef, controls: beforeFooterControls, transition: beforeFooterTransition } = useScrollAnimation('slideFromSide')

  return (
    <main className="min-h-screen bg-white max-w-screen-2xl min-2xl:px-[71px] mx-auto overflow-hidden">
      <NavBar />

      <motion.div
        ref={heroRef}
        initial={{ opacity: 0, y: 100 }}
        animate={heroControls}
        transition={heroTransition}
      >
        <HeroSection />
      </motion.div>

      <motion.div
        ref={featuresRef}
        initial={{ opacity: 0, x: -100 }}
        animate={featuresControls}
        transition={featuresTransition}
      >
        <Features />
      </motion.div>

      <motion.div
        ref={testimonialsRef}
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={testimonialsControls}
        transition={testimonialsTransition}
      >
        <Testimonials />
      </motion.div>

      <motion.div
        ref={pricingRef}
        initial={{ opacity: 0, y: 150 }}
        animate={pricingControls}
        transition={pricingTransition}
      >
        <PricingHeader />
      </motion.div>

      <motion.div
        ref={blogRef}
        initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
        animate={blogControls}
        transition={blogTransition}
      >
        <BlogSection />
      </motion.div>

      <motion.div
        ref={beforeFooterRef}
        initial={{ opacity: 0, x: 200 }}
        animate={beforeFooterControls}
        transition={beforeFooterTransition}
      >
        <BeforeFooter />
      </motion.div>
      <Footer />
    </main>
  )
}
