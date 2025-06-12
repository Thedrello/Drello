import HeroSection from "@/app/components/sections/hero-section"
import Footer from "./components/sections/footer"
import BeforeFooter from "./components/sections/before-footer"
import BlogSection from "./components/sections/blog"
import Features from "./components/sections/features"
import Testiminials from "./components/sections/testimonials"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <Testiminials />
      <Features />
      <BlogSection />
      <BeforeFooter />
      <Footer />
    </main>
  )
}
