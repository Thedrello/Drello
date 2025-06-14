import HeroSection from "@/app/components/sections/hero-section"
import Footer from "./components/sections/footer"
import BeforeFooter from "./components/sections/before-footer"
import BlogSection from "./components/sections/blog"
import Features from "./components/sections/features"
import Testiminials from "./components/sections/testimonials"
import Pricing from "./components/sections/pricing"
import NavBar from "./components/sections/nav-bar"

export default function Home() {
  return (
    <main className="min-h-screen bg-white max-w-screen-2xl min-2xl:px-[71px] mx-auto">
      <NavBar />
      <HeroSection />
      <Testiminials />
      <Pricing />
      <Features />
      <BlogSection />
      <BeforeFooter />
      <Footer />
    </main>
  )
}
