"use client"

import { motion, easeOut } from "framer-motion"
import HeroSection from "@/app/components/sections/hero-section"
import Footer from "./components/sections/footer"
import BeforeFooter from "./components/sections/before-footer"
import BlogSection from "./components/sections/blog"
import Features from "./components/sections/features"
import Testimonials from "./components/sections/testimonials"
import NavBar from "./components/sections/nav-bar"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import PricingHeader from "./components/sections/pricing-header"
import HowItWorks from "./components/sections/how-it-works"

export default function Home() {
  type AnimationTransition = {
    duration?: number
    ease?: ((t: number) => number) | string
    [key: string]: any
  }

  const { ref: heroRef, controls: heroControls, transition: heroTransition } = useScrollAnimation('fadeUp') as {
    ref: React.Ref<HTMLDivElement>
    controls: any
    transition: AnimationTransition
  }
  const { ref: featuresRef, controls: featuresControls, transition: featuresTransition } = useScrollAnimation('slideIn') as {
    ref: React.Ref<HTMLDivElement>
    controls: any
    transition: AnimationTransition
  }
  const { ref: testimonialsRef, controls: testimonialsControls, transition: testimonialsTransition } = useScrollAnimation('scaleRotate') as {
    ref: React.Ref<HTMLDivElement>
    controls: any
    transition: AnimationTransition
  }
  const { ref: howItWorksRef, controls: howItWorksControls, transition: howItWorksTransition } = useScrollAnimation('fadeInUp') as {
    ref: React.Ref<HTMLDivElement>
    controls: any
    transition: AnimationTransition
  }
  const { ref: pricingRef, controls: pricingControls, transition: pricingTransition } = useScrollAnimation('slideInRight') as {
    ref: React.Ref<HTMLDivElement>
    controls: any
    transition: AnimationTransition
  }
  const { ref: blogRef, controls: blogControls, transition: blogTransition } = useScrollAnimation('blurFade') as {
    ref: React.Ref<HTMLDivElement>
    controls: any
    transition: AnimationTransition
  }
  const { ref: beforeFooterRef, controls: beforeFooterControls, transition: beforeFooterTransition } = useScrollAnimation('slideFromSide') as {
    ref: React.Ref<HTMLDivElement>
    controls: any
    transition: AnimationTransition
  }

  return (
    <main className="min-h-screen bg-white max-w-screen-2xl min-2xl:px-[71px] mx-auto overflow-hidden">
      <NavBar />
      <motion.div
        ref={heroRef}
        initial={{ opacity: 0, y: 50 }}
        animate={heroControls}
        transition={{
          duration: heroTransition?.duration ?? 0.8,
          ease: typeof heroTransition?.ease === "function" ? heroTransition.ease : easeOut
        }}
      >
        <HeroSection />
      </motion.div>

      {/* Add animation for HowItWorks */}
      <motion.div
        ref={howItWorksRef}
        initial={{ opacity: 0, y: 40 }}
        animate={howItWorksControls}
        transition={{
          duration: howItWorksTransition?.duration ?? 0.8,
          ease: typeof howItWorksTransition?.ease === "function" ? howItWorksTransition.ease : "easeOut",
          type: (howItWorksTransition as any)?.type,
          bounce: (howItWorksTransition as any)?.bounce,
        }}
      >
        <HowItWorks />
      </motion.div>

      <motion.div
        ref={featuresRef}
        initial={{ opacity: 0, x: -100 }}
        animate={featuresControls}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <Features />
      </motion.div>

      <motion.div
        ref={testimonialsRef}
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={testimonialsControls}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <Testimonials />
      </motion.div>

      {/* PricingHeader now slides in from the right */}
      <motion.div
        ref={pricingRef}
        initial={{ opacity: 0, x: 300 }} // Start further right
        animate={pricingControls}
        transition={{
          duration: pricingTransition?.duration ?? 0.8,
          ease: typeof pricingTransition?.ease === "function" ? pricingTransition.ease : "easeOut",
          type: (pricingTransition as any)?.type,
          // bounce removed for smooth slide
        }}
      >
        <PricingHeader />
      </motion.div>

      <motion.div
        ref={blogRef}
        initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
        animate={blogControls}
        transition={{
          duration: blogTransition?.duration ?? 0.8,
          ease: typeof blogTransition?.ease === "function" ? blogTransition.ease : "easeOut",
          type: (blogTransition as any)?.type,
          bounce: (blogTransition as any)?.bounce,
        }}
      >
        <BlogSection />
      </motion.div>

      <motion.div
        ref={beforeFooterRef}
        initial={{ opacity: 0, x: 200 }}
        animate={beforeFooterControls}
        transition={{
          duration: beforeFooterTransition?.duration ?? 0.8,
          ease: typeof beforeFooterTransition?.ease === "function" ? beforeFooterTransition.ease : "easeOut",
          type: (beforeFooterTransition as any)?.type,
          bounce: (beforeFooterTransition as any)?.bounce,
        }}
      >
        <BeforeFooter />
      </motion.div>
      <Footer />
    </main>
  )
}
