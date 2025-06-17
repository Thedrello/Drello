"use client";
import React from "react";
import Image from "next/image";

import { useState } from "react";
import { TestimonialCard } from "../testimonialCard";


const testimonials = [
  {
    id: 1,
    name: "Alex Thompson",
    username: "@alex",
    time: "2hrs ago",
    content:
      "With dRello, I finally found a way to earn for my content. It's refreshing to work with brands that value real voices and ideas",
    image: "/User1.png",
  },
  {
    id: 2,
    name: "Miracle Davison",
    username: "@mira",
    time: "3hrs ago",
    content:
      "With dRello, I finally found a way to earn for my content. It's refreshing to work with brands that value real voices and ideas",
    image: "/User-2.png",
  },
  {
    id: 3,
    name: "Jordan Lee",
    username: "@jordan",
    time: "4hrs ago",
    content:
      "With dRello, I finally found a way to earn for my content. It's refreshing to work with brands that value real voices and ideas",
    image: "/User3.png",
  },
];

const Testimonials = () => {
  const [activeId, setActiveId] = useState(2);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="px-8 mt-[20px] md:mt-[80px] lg:mt-[100px] mb-12 md:mb-0  lg:px-[52px] lg:py-[40px] py-4 bg-[url('/Testimonials-bg.png')] bg-cover bg-no-repeat">
      <h3 className=" px-[16px] font-normal w-fit py-[10px] rounded-full border-[#A3A3A3] text-[20px] text-[#525252] border-2">
        TESTIMONIALS
      </h3>
      <div className="flex justify-center flex-col lg:flex-row relative md:mt-[39px] ">
        <div className=" flex flex-col justify-center h-full">
          <Image
            height={1000}
            width={1000}
            src="/squared-testimonial.svg"
            alt="squared drello"
            className="h-[52px] w-[274px] left-0"
          />
          <h1 className="font-medium text-[36px]">SUCCESS STORIES</h1>
          <h3 className="my-2 font-medium text-[20px]">
            REAL STORIES FROM OUR COMMUNITY
          </h3>
          <p className="lg:text-[20px] text-[16px] ">
            dRello empowers creators and brands to connect, collaborate, and
            earn through creative tasks rewarded in cryptocurrency, fostering
            authentic engagement and shared success in the digital space
          </p>
        </div>
        <div className="flex items-center mt-5 lg:mt-0 min-w-[65%] lg:flex-row flex-col w-full lg:w-auto   justify-center gap-6 relative">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              isActive={activeId === testimonial.id}
              isAnotherHovered={
                hoveredId !== null && hoveredId !== testimonial.id
              }
              onHoverStart={() => {
                setHoveredId(testimonial.id);
                setActiveId(testimonial.id);
              }}
              onHoverEnd={() => setHoveredId(null)}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;