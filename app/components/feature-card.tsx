import React from 'react'
import Image from "next/image"
interface FeatureCardProps {
    tagLine: string
    image: string
    title: string
    description: string
    buttonText:string
    position?:number
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
    <section className={`bg-[#FFFAED] border-[1px] border-[#D4D4D4] ${position === 2 ? 'pb-[26px]' : 'pt-[26px]'} relative rounded-[24px]`}>
        <h3 className={`px-[16px] mb-8 w-fit py-[10px] rounded-full border-[#525252] ml-3 text-[16px] leading-[120%] text-[#525252] border-2  ${position === 2 && "bg-white rounded-full absolute z-20 top-5"}`}>{tagLine}</h3>
        <div className={`flex flex-col gap-6 relative justify-between   ${position === 2 ? 'flex-col-reverse' : 'flex-col'}`}>
            <h1 className="text-bold text-[24px] leading-[140%] max-w-[65%] px-3 ">{title}</h1>
            <p className={`text-[16px] leading-[156%] text-[#404040] px-3 ${position === 2 && "order-first"}`}>{description}</p>
            <Image 
            height={300}
            width={400}
            src={image}
            alt={title}
            className='aspect-video relative w-full'
            />
        </div>
        <button className='px-4 py-2 rounded-full leading-[140%] bg-[#fdc316]  font-bold absolute bottom-4 right-4 z-20'>{buttonText}</button>
    </section>
  )
}

export default FeaturedCard