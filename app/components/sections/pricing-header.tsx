import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import PricingCard from "../pricing-card";
import RewardsCard from "../reward-card";

export default function PricingHeader() {
  return (
    <div className="mx-auto w-full px-2 sm:px-4 py-6 md:py-6 lg:py-8 md:bg-[#EBF0EA] rounded-2xl mt-12 md:mt-16 lg:mt-20 xl:mt-24 max-w-screen-2xl" id="pricing">
      <Card className="border-none shadow-none bg-transparent">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 place-items-center">
          <CardContent className="p-0 w-full flex justify-center">
            <div className="flex flex-col items-center gap-4 md:gap-6 max-w-2xl">
              <div className="space-y-3 md:space-y-4 text-center">
                <p className="inline-block px-3 sm:px-4 py-2 rounded-full border-[#525252] text-xs sm:text-sm md:text-base text-[#525252] border-2">
                  PRICING & REWARD STRUCTURE
                </p>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                  FLEXIBLE REWARDS DESIGNED FOR CREATORS AND BRANDS.
                </h1>
                <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto">
                  dRello&apos;s rewards structure is simple. Creators earn for
                  completing jobs, and brands get the engagement they need. Choose
                  the plan that fits your goals.
                </p>
              </div>

              <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[375px] max-w-2xl">
                <Image
                  src="/Media.png"
                  alt="Creator illustration"
                  fill
                  className="object-contain rounded-lg"
                  priority
                />
              </div>
            </div>
          </CardContent>

          <CardContent className="p-0 w-full flex justify-center">
            <div className="flex flex-col items-center gap-4 md:gap-6 w-full max-w-2xl">
              <div className="w-full h-auto scale-[0.85] sm:scale-90 md:scale-95 lg:scale-100 origin-top">
                <RewardsCard />
              </div>
              <div className="w-full h-auto scale-[0.85] sm:scale-90 md:scale-95 lg:scale-100 origin-top">
                <PricingCard />
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}