import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function RewardsCard() {
  return (
    <div className="w-full bg-[url('/Dash1.png')] bg-cover bg-no-repeat md:h-[360px] md:w-[590px] overflow-hidden mb-8">
      <Card className="bg-reward-green border-none shadow-none">
        <CardContent className="p-6 md:p-6 lg:p-8">
          <div className="grid md:flex grid-cols-[1fr,auto] lg:gap-8 ga-3 items-center">
            <div className="space-y-4">
              <p className="px-[16px]  w-fit py-[10px] rounded-full border-[#525252] lg:text-[16px] text-[14px] leading-[120%] text-[#525252] border-2">
                REWARDS EXPLANATION
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-green-800">
                Get Rewarded For Every Action.
              </h2>
              <p className="text-muted-foreground max-w-lg lg:tex-lg text-xs">
                From completing tasks to publishing content, dRello rewards
                every action that builds value. Track your earnings and cash out
                in Ethereum with no hassle.
              </p>
            </div>
            <div className="relative lg:w-[200px] w-[100px] aspect-square">
              <Image
                src="/Media1.png"
                alt="Rewards illustration"
                className="w-full h-full object-cover rounded-lg md:w-[253.63px] md:h-[201px]"
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