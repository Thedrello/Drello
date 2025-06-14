import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function PricingCard() {
  return (
    <div className="w-full">
      <Card className="bg-pricing-orange border-none shadow-none">
        <CardContent className="p-6 md:p-8 lg:p-12">
          <div className="grid grid-cols-[1fr,auto] md:gap-8 gap-3  place-items-center items-center">
            <div className="space-y-4">
              <p className="px-[16px]  w-fit py-[10px] rounded-full border-[#525252] text-[16px] leading-[120%] text-[#525252] border-2 bg-white">
                PRICING TIER
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-800">
                Choose Your Plan
              </h2>
              <p className="text-muted-foreground md:max-w-lg text-xs md:text-lg">
                Whether you&apos;re a solo creator or a brand manager, dRello
                has options that work for you. Enjoy fair, transparent rewards
                that let you control how you earn and grow.
              </p>
            </div>
            <div className="relative lg:w-[200px] w-[100px] aspect-square">
              <Image
                src="/jean-yellow.png"
                alt="Pricing illustration"
                className="w-full h-full object-cover rounded-lg"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}