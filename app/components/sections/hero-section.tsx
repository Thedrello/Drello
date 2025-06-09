"use client"
import Image from "next/image"
import { motion } from "framer-motion"

export default function HeroSection() {
  // Animation settings for the cards
  const cardAnimations = [
    {
      initial: { x: 20, y: -10, rotate: 5 },
      animate: { x: 30, y: -15, rotate: 8 },
    },
    {
      initial: { x: 0, y: 0, rotate: 0 },
      animate: { x: 10, y: -5, rotate: 2 },
    },
    {
      initial: { x: -20, y: 20, rotate: -5 },
      animate: { x: -30, y: 25, rotate: -8 },
    },
  ]

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between">
      {/* Left Column - Text Content */}
      <div className="w-full md:w-1/2 mb-12 md:mb-0 pr-0 md:pr-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
          CREATE, CONNECT
          <br />
          AND EARN.
        </h1>
        <p className="text-gray-600 text-lg mb-10 max-w-md">
          Where creators and brands come together. Complete simple tasks, publish content, and get rewarded with crypto
          for every interaction
        </p>

        {/* User Post Example */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 max-w-md">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="Profile"
                width={32}
                height={32}
                className="rounded-full"
              />
            </div>
            <div>
              <p className="text-sm font-medium">Miracle Davison</p>
              <p className="text-xs text-gray-500">@miracle • 2m ago</p>
            </div>
          </div>
          <h3 className="font-bold text-lg mb-2">Tesla's AI-Powered Transformation in Electric Vehicles</h3>
          <p className="text-sm text-gray-600 mb-3">
            Explore Tesla's journey from its inception to the groundbreaking enhancements in autonomous driving
            technology and AI integration.
          </p>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
              1.5k
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              3.5k
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              5k
            </div>
          </div>
          <div className="flex mt-4 space-x-2">
            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Replies 12</span>
            <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">Negeria</span>
            <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">Custom</span>
          </div>
        </div>
      </div>

      {/* Right Column - Floating Cards */}
      <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px]">
        {/* Profile Card */}
        <motion.div
          className="absolute top-0 left-0 w-64 md:w-72 rounded-xl shadow-lg overflow-hidden z-30 bg-transparent"
          initial={cardAnimations[0].initial}
          animate={cardAnimations[0].animate}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            duration: 3,
          }}
        >
          <Image
            src="/profile-hero.png"
            alt="Profile Background"
            width={300}
            height={400}
            className="w-full h-48 object-cover rounded-t-xl"
          />
        </motion.div>

        {/* Jobs Card */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 md:w-72 bg-white rounded-xl shadow-lg overflow-hidden z-20"
          initial={cardAnimations[1].initial}
          animate={cardAnimations[1].animate}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            duration: 3.5,
            delay: 0.2,
          }}
        >
          <Image
            src="/job-img.png"
            alt="Profile Background"
            width={300}
            height={400}
            className="w-full h-48 object-cover rounded-t-xl"
          />
        </motion.div>

        {/* Digital Detox Card */}
        <motion.div
          className="absolute top-1/2 right-1/3 w-64 md:w-72 bg-white rounded-xl shadow-lg overflow-hidden z-10"
          initial={cardAnimations[2].initial}
          animate={cardAnimations[2].animate}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            duration: 4,
            delay: 0.4,
          }}
        >
         <Image
            src="/blog-img.png"
            alt="Profile Background"
            width={300}
            height={400}
            className="w-full h-[275.7px] object-cover rounded-t-xl"
          />
        </motion.div>
      </div>
    </section>
  )
}
