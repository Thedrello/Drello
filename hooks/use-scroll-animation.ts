"use client"

import { useEffect } from "react"
import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

type AnimationType =
  | 'fadeUp'
  | 'slideIn'
  | 'scaleRotate'
  | 'bounce'
  | 'blurFade'
  | 'slideFromSide'
  | 'fadeInUp'       
  | 'slideInRight'    

export const useScrollAnimation = (type: AnimationType) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  })

  const getInitialState = (type: AnimationType) => {
    switch (type) {
      case 'fadeUp':
        return { opacity: 0, y: 50 }
      case 'slideIn':
        return { opacity: 0, x: -100 }
      case 'scaleRotate':
        return { opacity: 0, scale: 0.8, rotate: -5 }
      case 'bounce':
        return { opacity: 0, y: 150 }
      case 'blurFade':
        return { opacity: 0, filter: "blur(10px)", y: 50 }
      case 'slideFromSide':
        return { opacity: 0, x: 200 }
      case 'fadeInUp': 
        return { opacity: 0, y: 60 }
      case 'slideInRight': 
        return { opacity: 0, x: 200 }
      default:
        return { opacity: 0 }
    }
  }

  const getFinalState = (type: AnimationType) => {
    switch (type) {
      case 'fadeUp':
        return { opacity: 1, y: 0 }
      case 'slideIn':
        return { opacity: 1, x: 0 }
      case 'scaleRotate':
        return { opacity: 1, scale: 1, rotate: 0 }
      case 'bounce':
        return { opacity: 1, y: 0 }
      case 'blurFade':
        return { opacity: 1, filter: "blur(0px)", y: 0 }
      case 'slideFromSide':
        return { opacity: 1, x: 0 }
      case 'fadeInUp': // For HowItWorks
        return { opacity: 1, y: 0 }
      case 'slideInRight': // For PricingHeader
        return { opacity: 1, x: 0 }
      default:
        return { opacity: 1 }
    }
  }

  const getTransition = (type: AnimationType) => {
    switch (type) {
      case 'scaleRotate':
        return {
          duration: 1,
          ease: "easeOut",
          scale: { type: "spring", stiffness: 100 },
          rotate: { duration: 0.8 }
        }
      case 'bounce':
        return {
          duration: 1,
          type: "spring",
          bounce: 0.8
        }
      case 'blurFade':
        return {
          duration: 1.5,
          ease: "easeOut"
        }
      case 'fadeInUp':
        return {
          duration: 0.8,
          ease: "easeOut"
        }
      case 'slideInRight':
        return {
          duration: 0.8,
          ease: "easeOut",
          type: "tween"
        }
      default:
        return {
          duration: 1,
          ease: "easeOut"
        }
    }
  }

  useEffect(() => {
    if (inView) {
      controls.start(getFinalState(type))
    } else {
      controls.start(getInitialState(type))
    }
  }, [controls, inView, type])

  return { ref, controls, transition: getTransition(type) }
}
