"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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
  ];

  return (
    <section className="w-full mx-auto lg:px-0 px-4 py-10 lg:py-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-0">
      {/* Left Column */}
      <div className="w-full lg:w-[774px] flex flex-col items-start">
        <h1 className="text-4xl md:text-5xl lg:text-[64px] font-medium tracking-tight mb-6 leading-[1.1]">
          CREATE,
          CONNECT<br />
          AND EARN.
        </h1>
        <p className="text-[#737373] font-normal text-lg md:text-xl lg:text-[22px] mb-8">
          Where creators and brands come together. Complete simple tasks, publish content, and get rewarded with crypto for every interaction
        </p>
        {/* Main Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 w-full lg:w-[774px] mb-6">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-2">
                <Image
                  src="/profile.pic.svg"
                  alt="Profile"
                  width={1000}
                  height={1000}
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="text-[16px] text-[#404040] font-medium">
                  Miracle Davison
                </p>
                <p className="text-[14px] font-normal text-gray-500">
                  @miracle • 3hrs ago
                </p>
              </div>
            </div>
            <Button className="bg-[#FDC316] font-normal text-[16px] text-white px-4 py-2 rounded-full">
              Apply
            </Button>
          </div>
          <h3 className="text-[24px] font-bold text-[#171717] mb-3">
            Tesla's AI-Powered Transformation in Electric Vehicles
          </h3>
          <p className="text-[16px] text-[#737373] font-normal mb-4">
            Explore Tesla's journey from its inception to the groundbreaking enhancements in autonomous driving technology and AI integration.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            {/* Social Metrics */}
            <div className="flex items-center gap-3 text-sm text-[#A3A3A3]">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1 shrink-0"
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
                <span className="!text-[#525252] text-xs ml-1">1.5k</span>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1 shrink-0"
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
                <span className="!text-[#525252] text-xs ml-1">3.5k</span>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1 shrink-0"
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
                <span className="!text-[#525252] text-xs ml-1">5k</span>
              </div>
            </div>
            {/* Tags */}
            <div className="flex items-center gap-2">
              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                Replies 12
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                Nigeria
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                Custom
              </span>
            </div>
          </div>
        </div>
        {/* Faded Card */}
        <div className="bg-white rounded-xl border border-gray-100 p-6 w-full lg:w-[774px] opacity-40 blur-[2px]">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-2">
                <Image
                  src="/profile.pic.svg"
                  alt="Profile"
                  width={1000}
                  height={1000}
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="text-[16px] text-[#404040] font-medium">
                  Miracle Davison
                </p>
                <p className="text-[14px] font-normal text-gray-500">
                  @miracle • 3hrs ago
                </p>
              </div>
            </div>
            <Button className="bg-[#FDC316] font-normal text-[16px] text-white px-4 py-2 rounded-full">
              Apply
            </Button>
          </div>
        </div>
      </div>

      {/* Right Column - Floating Cards */}
      <div className="hidden lg:block relative" style={{ width: 700, height: 900 }}>
        {/* Top Card */}
        <motion.div
          className="absolute top-0 left-16 w-[600px] h-[270px] rounded-2xl overflow-visible z-10 bg-transparent"
          style={{ rotate: '-7deg' }}
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
            width={600}
            height={270}
            className="w-full h-full object-contain rounded-2xl"
          />
        </motion.div>
        {/* Middle Card */}
        <motion.div
          className="absolute top-[200px] left-0 w-[700px] h-[300px] rounded-2xl overflow-visible z-20 bg-transparent"
          style={{ rotate: '-2deg' }}
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
            alt="Job Card"
            width={700}
            height={300}
            className="w-full h-full object-contain rounded-2xl"
          />
        </motion.div>
        {/* Bottom Card */}
        <motion.div
          className="absolute top-[400px] left-16 w-[650px] h-[340px] rounded-2xl overflow-visible z-30 bg-transparent"
          style={{ rotate: '7deg' }}
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
            alt="Blog Card"
            width={650}
            height={340}
            className="w-full h-full object-contain rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
