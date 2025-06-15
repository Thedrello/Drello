"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  username: string;
  time: string;
  content: string;
  image: string;
  isActive?: boolean;
  isAnotherHovered?: boolean;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
  onClick?: () => void;
}

export function TestimonialCard({
  name,
  username,
  time,
  content,
  image,
  isActive = false,
  isAnotherHovered = false,
  onHoverStart,
  onHoverEnd,
  onClick,
}: TestimonialCardProps) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isActive && !isAnotherHovered) {
      const timer = setTimeout(() => setShowContent(true), 50);
      return () => clearTimeout(timer);
    } else {
      setShowContent(false);
    }
  }, [isActive, isAnotherHovered]);

  return (
    <div
      onClick={onClick}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      className={cn(
        "relative h-[766px] w-full transition-all border md:border-0 border-gray-600/30 overflow-hidden duration-500 cursor-pointer ",
        isActive && !isAnotherHovered ? "w-full" : "lg:w-1/2",
        !isActive && "hover:w-full"
      )}
    >
      <div className={cn("rounded-3xl overflow-hidden bg-[#FFF0F1] h-full")}>
        <div className={cn(
              "object-cover transition-transform duration-500 ease-in-out relative w-full lg:h-[600px] h-[750px]",
              isActive ? "md:scale-85 md:translate-y-[-10%]" : "md:scale-100 md:translate-y-0",
            )}>
          <Image
            src={image}
            width={1000}
            height={1900}
            alt={name}
            className={cn(
              "h-full w-full md:object-cover object-contain",
              isActive ? "md:object-contain" : "md:object-cover"
            )}
          />
        </div>
        <div
          id="down"
          className={cn(
            "absolute bottom-0 left-0 right-0 p-6 min-h-[45%] overflow-hidden py-24 transition-all duration-500 ease-in-out bg-[url('/Vector1.png')] bg-cover bg-no-repeat",
            showContent
              ? "lg:opacity-100 lg:translate-y-0"
              : "lg:opacity-0 lg:translate-y-full"
          )}
        >
          <div className="inline-block px-3 py-1 mb-3 text-[12px] font-medium bg-amber-100 rounded-full">
            CONTENT CREATOR
          </div>
          <div className="space-y-1">
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-gray-600">
              {username} • {time}
            </p>
            <p className="text-gray-700 mt-2">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}