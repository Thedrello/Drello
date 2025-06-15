"use client"

import { useEffect, useRef } from "react"
import { useAnimation } from "framer-motion"
import { useInView } from "framer-motion"

export function useScrollAnimation(threshold = 0.1) {
  const ref = useRef(null)
  const controls = useAnimation()
  const inView = useInView(ref, {
    amount: threshold,
    once: true, // Animation triggers only once
  })

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotate: 0,
        filter: "blur(0px)",
      })
    }
  }, [controls, inView])

  return { ref, controls, inView }
}
