import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import Image from "next/image";

interface BlogCardProps {
  title: string;
  description: string;
  authorName: string;
  imageUrl: string;
}

export default function BlogCard({
  title,
  description,
  imageUrl,
}: BlogCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="space-y-2">
        <div className="px-[16px] mb-8 w-fit py-[10px] rounded-full border-[#525252] ml-3 text-[16px] leading-[120%] text-[#525252] border-2">
          POST
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
        <button className="px-4 py-2 rounded-full leading-[140%] bg-[#fdc316] font-bold bottom-4 right-4 w-fit">
          Create Blog
        </button>
      </CardHeader>
      <CardContent className="px-5 pb-0">
        <div className="relative aspect-[16/9]">
          <Image
            src={imageUrl}
            alt="Blog post thumbnail"
            fill
            className="object-contain"
          />
          
        </div>
      </CardContent>
      <h2 className="pl-20 pb-2 font-bold">The Science of thinking logically</h2>
      <CardFooter className="pl-20">
      
        <div className="flex items-start gap-3">
          <Image
            src="/micson.png"
            alt="Micheal Thompson"
            width={32}
            height={32}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-black-200">
              Micheal Thompson
            </span>
            <div className=" flex items-center">
              <span className="text-xs  text-[#A3A3A3]">@micson</span>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}