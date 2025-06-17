import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function RewardsCard() {
  return (
    <div className="w-full bg-[url('/Dash1.png')] bg-cover bg-no-repeat min-h-[300px] md:h-[360px] md:w-[590px] overflow-hidden mb-8 rounded-3xl">
      <Card className="bg-reward-green border-none shadow-none h-full">
        <CardContent className="p-4 md:p-6 lg:p-8 h-full">
          <div className="flex flex-row items-start md:items-center gap-4 md:gap-6 h-full">
            <div className="space-y-2 md:space-y-4 flex-1">
              <p className="px-3 md:px-4 w-fit py-2 md:py-[10px] rounded-full border-[#525252] text-sm lg:text-base leading-[120%] text-[#525252] border-2">
                REWARDS EXPLANATION
              </p>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-green-800">
                Get Rewarded For Every Action.
              </h2>
              <p className="text-muted-foreground text-sm md:text-base lg:text-lg pr-2">
                From completing tasks to publishing content, dRello rewards
                every action that builds value. Track your earnings and cash out
                in Ethereum with no hassle.
              </p>
            </div>
            <div className="relative w-[120px] md:w-[200px] lg:w-[250px] aspect-square shrink-0 mt-10">
              <Image
                src="/Media1.png"
                alt="Rewards illustration"
                className="w-full h-full object-contain rounded-lg"
                fill
                sizes="(max-width: 768px) 120px,
                       (max-width: 1024px) 200px,
                       250px"
                priority
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}