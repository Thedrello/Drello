import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import PricingCard from "../pricing-card";
import RewardsCard from "../reward-card";
export default function PricingHeader() {
  return (
    <div className="w-full px-4 py-8 md:py-12 lg:py-16 ">
      <Card className="border-none shadow-none grid md:grid-cols-2">
        <CardContent className="p-0">
          <div className="gap-8 items-center">
            <div className="space-y-4">
              <p className="px-[16px]  w-fit py-[10px] rounded-full border-[#525252] text-[16px] leading-[120%] text-[#525252] border-2">
                PRICING & REWARD STRUCTURE
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                FLEXIBLE REWARDS DESIGNED FOR CREATORS AND BRANDS.
              </h1>
              <p className="text-muted-foreground max-w-lg">
                dRello&apos;s rewards structure is simple. Creators earn for
                completing jobs, and brands get the engagement they need. Choose
                the plan that fits your goals.
              </p>
            </div>

            <Image
              src="/darker.png"
              alt="Creator illustration"
              className="w-full h-full object-contain"
              width={1000}
              height={1000}
            />
          </div>
        </CardContent>
        <CardContent className=" p-0  md:p-8 lg:p-12">
          <RewardsCard />
          <PricingCard />
        </CardContent>
      </Card>
    </div>
  );
}