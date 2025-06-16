import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function PricingCard() {
  return (
    <div className="w-full bg-[url('/Dash.png')] bg-cover bg-no-repeat min-h-[300px] md:h-[360px] md:w-[590px]">
      <Card className="border-none shadow-none bg-transparent h-full">
        <CardContent className="p-4 md:p-6 lg:p-8 h-full">
          <div className="flex flex-row items-start md:items-center gap-4 md:gap-6 h-full">
            <div className="space-y-2 md:space-y-4 text-left flex-1">
              <p className="px-3 md:px-4 w-fit py-2 md:py-[10px] rounded-full border-[#525252] text-sm lg:text-base leading-[120%] text-[#525252] border-2 bg-white">
                PRICING TIER
              </p>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-yellow-800">
                Choose Your Plan
              </h2>
              <p className="text-muted-foreground text-sm md:text-base lg:text-lg pr-2">
                Whether you&apos;re a solo creator or a brand manager, dRello
                has options that work for you. Enjoy fair, transparent rewards
                that let you control how you earn and grow.
              </p>
            </div>
            <div className="relative w-[100px] md:w-[180px] lg:w-[220px] aspect-square shrink-0">
              <Image
                src="/Media2.png"
                alt="Pricing illustration"
                className="w-full h-full object-contain rounded-lg"
                width={500}
                height={500}
                priority
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
