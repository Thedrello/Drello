"use client"

import { useEffect } from "react"
import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

export const useScrollAnimation = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.2, // Trigger when 20% of element is visible
    triggerOnce: false, // Remove triggerOnce to allow repeated animations
  })

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        filter: "blur(0px)",
      })
    } else {
      // Reset animation when element is out of view
      controls.start({
        opacity: 0,
        x: getInitialX(),
        y: getInitialY(),
        scale: getInitialScale(),
        rotate: getInitialRotate(),
        filter: getInitialFilter(),
      })
    }
  }, [controls, inView])

  return { ref, controls }
}

// Helper functions to match initial states from components
const getInitialX = () => 0
const getInitialY = () => 100
const getInitialScale = () => 0.8
const getInitialRotate = () => -5
const getInitialFilter = () => "blur(10px)"
