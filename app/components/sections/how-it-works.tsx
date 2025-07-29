"use client";
import { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";

export default function HowItWorks() {
  useEffect(() => {
    // Fade-in animation for the cards
    gsap.fromTo(
      ".card",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: "power2.out" }
    );

    // Scaling animation for the arrow icons
    gsap.fromTo(
      ".arrow-icon",
      { scale: 0 },
      { scale: 1, duration: 0.5, ease: "back.out(1.7)", stagger: 0.2, delay: 1 }
    );
  }, []);

  return (
    <section
      id="hiw"
      className="mt-[20px] md:mt-[80px] lg:mt-[100px] lg:px-[60px] px-5 mb-12 md:mb-0 border-[1px] border-[#D4D4D4] p-12 rounded-[24px] flex flex-col items-center justify-center "
    >
      <div className="flex flex-col items-center text-center mb-9 md:mb-6">
        <h1 className="text-base md:text-xl text-[#A3A3A3] uppercase mb-2 font-normal">
          How it Works
        </h1>

        <div className="lg:flex justify-center items-center flex-col gap-1 text-[32px] m-5 hidden">
          <div className="flex">
            <span className="font-medium">HOW</span>
            <Image
              height={100}
              width={100}
              src="/squared-drello.svg"
              alt="squared drello"
              className="h-[50px] w-[100px]"
            />
            <span className="font-medium">
              WORKS, YOUR NEW <br />
            </span>
          </div>
          <p> WAY TO EARN ONLINE</p>
        </div>
        {/* Mobile Layout */}
        <div className="flex justify-center items-center flex-col text-[20px] m-5 lg:hidden">
          <div className="flex">
            <span className="font-normal">HOW</span>
            <Image
              height={100}
              width={100}
              src="/squared-drello.svg"
              alt="squared drello"
              className="h-[40px] w-[100px]"
            />
            <span className="font-normal">WORKS, YOUR</span>
          </div>
          <p> NEW WAY TO EARN ONLINE</p>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto">
        {/* Mobile Layout */}
        <div className="block md:hidden space-y-4">
          <div className="card relative w-[343px] min-h-[442px] overflow-hidden rounded-2xl">
            <Image
              src="/Card-blue.png"
              alt="Create Content Background"
              width={343}
              height={442}
              className="object-cover w-full h-full absolute"
              sizes="(max-width: 768px) 100vw"
            />
            <div className="relative flex flex-col justify-between pl-8 pt-[74px]">
              <div>
                <h2 className="text-xl font-extrabold mb-[35px] text-[#171717]">
                  Create Content That <br /> Matters
                </h2>
                <p className="font-normal text-[#262626] text-sm leading-relaxed max-w-[280px]">
                  Share your thoughts, publish insightful posts, and showcase
                  your expertise because here, your content doesn&apos;t just
                  get seen; it makes an impact.
                </p>
              </div>
            </div>
          </div>

          {/* Orange card - Mobile */}
          <div className="card relative w-full overflow-hidden rounded-2xl max-h-[163px]">
            <Image
              src="/Card-orange.png"
              alt="Engage With Jobs Background"
              width={343}
              height={163}
              className="object-cover absolute"
              sizes="(max-width: 768px) 100vw"
            />
            <div className="relative inset-0 p-4 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-extrabold mb-2">
                  Engage With <br /> Rewarding Jobs
                </h2>
                <p className="font-normal text-[#737373] text-sm leading-relaxed max-w-[280px]">
                  Get paid for completing tasks like product reviews, feedback
                  surveys, or social shares.
                </p>
              </div>
            </div>
          </div>

          {/* Green card - Mobile */}
          <div className="card relative w-full overflow-hidden rounded-2xl max-h-[163px]">
            <Image
              src="/Card-green.png"
              alt="Watch Earnings Background"
              width={343}
              height={163}
              className="object-cover absolute"
              sizes="(max-width: 768px) 100vw"
            />
            <div className="relative inset-0 p-4 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-extrabold leading-7 mb-2">
                  Watch Your <br /> Earnings Grow
                </h2>
                <p className="font-normal text-[#737373] text-sm leading-relaxed max-w-[280px]">
                  Every view, share, or completed task towards you a financial
                  reward to your wallet.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tablet and Desktop Layout */}
        <div className="relative hidden md:flex md:grid-cols-2 gap-4 lg:gap-6 h-[400px] md:h-[500px] lg:h-[570px] w-fit max-w-[1200px] mx-auto justify-center ">
          {/* Blue card - Desktop */}
          <div className="card relative w-full h-full overflow-hidden rounded-2xl min-w-[447px]">
            <Image
              src="/blue-card.png"
              alt="Create Content Background"
              className="object-cover absolute w-full h-full"
              sizes="(max-width: 1024px) 50vw, 33vw"
              width={447}
              height={576}
            />
            <div className="relative z-10 flex flex-col justify-between p-5 lg:p-7 lg:pt-[97px] pt-[74px]">
              <div>
                <h2 className="text-xl md:text-2xl lg:text-[28px] font-extrabold leading-7 lg:leading-8 mb-4 lg:mb-[94px] text-[#171717]">
                  Create Content That <br /> Matters
                </h2>
                <p className="font-normal text-[#262626] text-sm md:text-base lg:text-lg leading-relaxed max-w-[280px] lg:max-w-[400px]">
                  Share your thoughts, publish insightful posts, and showcase
                  your expertise because here, your content doesn&apos;t just
                  get seen; it makes an impact. Whether you&apos;re sparking a
                  conversation, your voice reaches far.
                </p>
              </div>
            </div>
          </div>

          {/* Right column with two stacked cards */}
          <div className="flex flex-col gap-4 lg:gap-6 h-full min-w-[736px]">
            {/* Orange card - Desktop */}
            <div className="card relative w-full flex-1 overflow-hidden rounded-2xl max-w-[736px]">
              <Image
                src="/orange-card.png"
                alt="Engage With Jobs Background"
                className="object-cover absolute w-full h-full"
                sizes="(max-width: 1024px) 50vw, 33vw"
                width={736}
                height={280}
              />
              <div className="relative p-5 lg:p-7 flex flex-col justify-between lg:pt-[50px]">
                <div>
                  <h2 className="text-lg md:text-xl lg:text-2xl font-extrabold leading-6 lg:leading-7 mb-3 lg:mb-4 text-[#171717]">
                    Engage With Rewarding <br/> Jobs
                  </h2>
                  <p className="font-normal text-[#000000] text-xs md:text-sm lg:text-base leading-relaxed max-w-[480px]">
                    Get paid for completing tasks like product reviews, feedback
                    surveys, or social shares. You&apos;re in control of the
                    jobs you take on and the earnings you make.
                  </p>
                </div>
              </div>
            </div>

            {/* Green card - Desktop */}
            <div className="card relative w-full flex-1 overflow-hidden rounded-2xl">
              <Image
                src="/green-card.png"
                alt="Watch Earnings Background"
                width={736}
                height={280}
                className="object-cover w-full h-full absolute"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
              <div className="relative p-5 lg:p-7 flex flex-col justify-between lg:pt-[50px]">
                <div>
                  <h2 className="text-lg md:text-xl lg:text-2xl font-extrabold leading-6 lg:leading-7 mb-3 lg:mb-4 text-[#171717]">
                    Watch Your Earnings<br/> Grow
                  </h2>
                  <p className="font-normal text-[#000000] text-xs md:text-sm lg:text-base leading-relaxed max-w-[480px]">
                    Every view, share, or completed task towards you a financial
                    reward to your wallet. Building value for brands means
                    building value for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
