import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedCourses } from "@/components/featured-courses"
import { CategoriesSection } from "@/components/categories-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturedCourses />
        <CategoriesSection />
      </main>
      <Footer />
    </div>
  )
}
