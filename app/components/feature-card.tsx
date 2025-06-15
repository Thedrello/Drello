import React from 'react'
import Image from "next/image"

interface FeatureCardProps {
    tagLine: string
    image: string
    title: string
    description: string
    buttonText: string
    position?: number
}

const FeaturedCard = ({
    tagLine,
    image,
    title,
    description,
    buttonText,
    position
}: FeatureCardProps) => {
    return (
        <section className={`
            bg-[#FFFAED] 
            border-[1px] 
            border-[#D4D4D4] 
            ${position === 2 ? 'pb-[26px]' : 'pt-[26px]'}
            relative 
            rounded-[24px]
            w-full
            max-w-[95%]
            mx-auto
            sm:max-w-[85%]
            md:max-w-none
        `}>
            <h3 className={`
                px-3 sm:px-[16px]
                mb-4 md:mb-11
                w-fit 
                py-2 sm:py-[10px]
                rounded-full 
                border-[#525252]
                ml-2 md:ml-4
                text-sm sm:text-[16px]
                leading-[120%]
                text-[#525252]
                border-2
                
                ${position === 2 && "bg-white rounded-full absolute z-20 top-3 sm:top-5"}
            `}>
                {tagLine}
            </h3>
            <div className={`
                flex 
                flex-col 
                gap-4 sm:gap-6
                relative 
                justify-between
                ${position === 2 ? 'flex-col-reverse' : 'flex-col'}
            `}>
                <h1 className="
                    text-bold 
                    text-xl sm:text-[24px]
                    leading-[140%]
                    max-w-[85%] sm:max-w-[65%]
                    px-3
                ">
                    {title}
                </h1>
                <p className={`
                    text-sm sm:text-[16px]
                    leading-[156%]
                    text-[#404040]
                    px-3
                    ${position === 2 && "order-first"}
                `}>
                    {description}
                </p>
                <Image
                    height={300}
                    width={400}
                    src={image}
                    alt={title}
                    className='aspect-video relative w-full object-cover'
                />
            </div>
            <button className='
                px-3 sm:px-4
                py-1.5 sm:py-2
                text-sm sm:text-base
                rounded-full
                leading-[140%]
                bg-[#fdc316]
                font-bold
                absolute
                bottom-3 sm:bottom-4
                right-3 sm:right-4
                z-20
                hover:bg-[#fdc316]/90
                transition-colors
            '>
                {buttonText}
            </button>
        </section>
    )
}

export default FeaturedCard