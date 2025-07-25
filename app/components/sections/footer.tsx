import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="relative bg-footer text-white pt-12 pb-32 px-4 md:px-6 lg:px-[72px] min-h-[450px] lg:bg-[url('/Footer.png')] bg-[url('/Mobile.png')] bg-cover bg-no-repeat">
      <div className="max-w-7xl mx-auto">
        <div className="lg:col-span-3 mb-8 lg:mb-0 flex w-full justify-start">
            <Image
              src="/footer-logo.svg"
              alt="Drello Logo"
              width={200}
              height={50}
              className="w-[255px] h-[55px] mx-auto lg:mx-0"
            />
           </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 text-center lg:text-left">
          
          <div className="lg:col-span-3 flex flex-col justify-center lg:items-start mt-5">
            
            <h2 className="text-2xl font-semibold mb-6 lg:hidden">
              Contact Us
            </h2>
            <div className="flex gap-6 mb-8">
              <Link href="#" className="hover:opacity-80">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <Twitter className="w-6 h-6" />
              </Link>
            </div>
            <div className="flex flex-col gap-4 w-full max-w-[300px] mb-12">
              <Input
                type="email"
                placeholder="placeholder@gmail.com"
                className="bg-transparent border-white/20 text-white placeholder:text-white/50"
              />
              <Button className="bg-[#FFB800] hover:bg-[#FFB800]/90 text-black font-medium w-full">
                Get Started
              </Button>
            </div>
          </div>

          <div className="lg:col-span-3 mb-8 lg:mb-0">
            <h3 className="text-2xl lg:text-lg font-semibold mb-6 lg:mb-4">
              Find Job
            </h3>
            <nav className="flex flex-col gap-4 lg:gap-2">
              <Link href="#" className="hover:text-white/80">
                Discover blog writers
              </Link>
              <Link href="#" className="hover:text-white/80">
                Browse blogs
              </Link>
              <Link href="#" className="hover:text-white/80">
                Privacy policy
              </Link>
              <Link href="#" className="hover:text-white/80">
                Terms of service
              </Link>
            </nav>
          </div>

          <div className="lg:col-span-3 mb-8 lg:mb-0">
            <h3 className="text-2xl lg:text-lg font-semibold mb-6 lg:mb-4">
              Find People
            </h3>
            <nav className="flex flex-col gap-4 lg:gap-2">
              <Link href="#" className="hover:text-white/80">
                Sign Up
              </Link>
              <Link href="#" className="hover:text-white/80">
                Learn More
              </Link>
            </nav>
          </div>

          <div className="lg:col-span-3 mb-8 lg:mb-0">
            <h3 className="text-2xl lg:text-lg font-semibold mb-6 lg:mb-4">
              Explore
            </h3>
            <nav className="flex flex-col gap-4 lg:gap-2">
              <Link href="#" className="hover:text-white/80">
                Home
              </Link>
              <Link href="#" className="hover:text-white/80">
                Blog
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
