"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // Import icons for hamburger menu

interface NavLinksProps {
  routeName: string;
  route: string;
}

const NavBar = () => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState<string>("/");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks: NavLinksProps[] = [
    { route: "/", routeName: "Home" },
    { route: "#how-it-works", routeName: "How it works" },
    { route: "#pricing", routeName: "Pricing" },
    { route: "#features", routeName: "Community" },
    { route: "#blog", routeName: "FAQ's" },
  ];

  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  const handleRoute = (path: string) => () => {
    router.push(path);
    setActiveLink(path);
    setIsMenuOpen(false); // Close menu after clicking
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-b border-[#E7E5E4] dark:border-neutral-800 sticky z-50 bg-secondary rounded-full top-4">
      <nav className="lg:px-[45px] mx-auto flex items-center md:h-[84px] justify-between h-[45px] px-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/drello-logo.svg"
            alt="Drello"
            width={1000}
            height={1000}
            className="md:w-[121px] md:h-[52px] w-[70px] h-[24px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-row items-center gap-[100px] ml-auto">
          <div>
            <ul className="flex flex-row items-center gap-14">
              {navLinks.map((link) => (
                <li
                  key={link.routeName}
                  className="relative transition-transform duration-300 ease-in-out"
                >
                  <Link
                    href={link.route}
                    className={`nav-link text-sm capitalize hover:cursor-pointer hover:text-[#fdc316] transition-all duration-300 ease-in-out transform hover:scale-105 hover:tracking-wide ${
                      activeLink === link.route
                        ? "text-[#fdc316] font-bold text-[20px]"
                        : "text-[#171717] dark:text-neutral-50 font-normal text-[20px]"
                    }`}
                  >
                    {link.routeName}
                  </Link>
                  <span
                    className={`absolute left-0 bottom-[-1.8rem] w-full h-[6px] bg-[#fdc316] transition-all duration-300 ease-in-out transform rounded-t-2xl ${
                      activeLink === link.route
                        ? "translate-y-0 opacity-100"
                        : "translate-y-1 opacity-0"
                    } hover:translate-y-0 hover:opacity-100`}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-x-[40px]">
            <span className="font-semibold text-[#262626] text-[16px]">
              How It Works
            </span>
            <Button className="bg-[#fdc316] hover:bg-[hsl(45,98%,49%)] rounded-full py-3 gap-x-2 flex justify-center items-center transition duration-300 ease-in-out w-[151px] h-[48px]">
              <span className="font-semibold text-[#262626] text-center text-[16px]">
                Get Started
              </span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden ml-auto p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-[#A3A3A3]" />
          ) : (
            <Menu className="h-6 w-6 text-[#A3A3A3]" />
          )}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-[84px] left-0 right-0 bg-secondary p-4 md:hidden border-b border-[#E7E5E4] shadow-lg">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.routeName}
                  href={link.route}
                  className={`text-[16px] capitalize py-2 px-4 rounded-md transition-colors ${
                    activeLink === link.route
                      ? "text-[#fdc316] font-bold bg-[#fdc316]/10"
                      : "text-[#171717] hover:bg-[#fdc316]/10"
                  }`}
                  onClick={handleRoute(link.route)}
                >
                  {link.routeName}
                </Link>
              ))}
              <Button className="bg-[#fdc316] hover:bg-[hsl(45,98%,49%)] rounded-full py-3 w-full mt-2">
                <span className="font-semibold text-[#262626] text-[16px]">
                  Get Started
                </span>
              </Button>
            </nav>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
