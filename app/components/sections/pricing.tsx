import PricingHeader from "./pricing-header";

export default function Pricing() {
  return (
    <section className="mx-auto md:w-[1293px] md-h-[852px] w-full px-4 mt-[20px] md:mt-[80px] lg:mt-[100px] mb-12 md:mb-0 bg-background py-12">
      <div className="container border border-gray-600/30 mx-auto rounded-2xl">
        <PricingHeader />
      </div>
    </section>
  );
}