import React from "react";
import Image from "next/image";
import FeaturedCard from "../feature-card";

const Features = () => {
  return (
    <div id="features" className="mt-[20px] md:mt-[80px] lg:mt-[100px] lg:px-[60px] px-5 mb-12 md:mb-0 border-[1px] border-[#D4D4D4] p-12 rounded-[24px] ">
      <div className="text-center justify-center ">
        <h3>FEATURES</h3>
        <div className="flex justify-center items-center flex-col md:flex-row gap-1 text-[32px] m-5">
          <span className="font-medium">DISCOVER</span>
          <Image
            height={100}
            width={100}
            src="/squared-drello.svg"
            alt="squared drello"
            className="h-[50px] w-[100px]"
          />
          <span className="font-medium">KEY FEATURES</span>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-4 container mx-auto grid-cols-1">
        <FeaturedCard
          tagLine="CONTENT CREATION TOOLS"
          image="/girl-kitchen.png"
          title="Create High-Impact Content"
          description="With dRello's intuitive editor, publishing your ideas has never been easier. Engage your audience, showcase your expertise, and earn for the impact you make."
          buttonText="Preview Content Tools"
          position={1}
        />
        <FeaturedCard
          tagLine="JOB MARKETPLACE"
          image="/girl-laptop.png"
          title="Complete Jobs, Earn Rewards"
          description="Choose from a variety of tasks from reviews to feedback surveys that pay you for your time. You pick the tasks that interest you and earn crypto for each one."
          buttonText="Explore Job Opportunities"
          position={2}
        />
        <FeaturedCard
          tagLine="CRYPTO WALLET INTEGRATION"
          image="/girl-blueBg.png"
          title="Get Paid Directly In Crypto"
          description="Earning on dRello is simple. Connect your wallet, see your earnings, and withdraw in Ethereum whenever you're ready."
          buttonText="Preview Content Tools"
          position={1}
        />
      </div>
    </div>
  );
};

export default Features;
