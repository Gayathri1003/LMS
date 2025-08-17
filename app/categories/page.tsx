import Link from "next/link"
import { Code, Palette, BarChart3, Camera, Music, Briefcase, Heart, Wrench } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    name: "Development",
    slug: "development",
    icon: Code,
    courseCount: 1250,
    color: "text-blue-600",
    description: "Learn programming languages, frameworks, and development tools",
  },
  {
    name: "Design",
    slug: "design",
    icon: Palette,
    courseCount: 890,
    color: "text-pink-600",
    description: "Master graphic design, UI/UX, and creative tools",
  },
  {
    name: "Business",
    slug: "business",
    icon: Briefcase,
    courseCount: 1100,
    color: "text-green-600",
    description: "Develop business skills, entrepreneurship, and management",
  },
  {
    name: "Marketing",
    slug: "marketing",
    icon: BarChart3,
    courseCount: 750,
    color: "text-orange-600",
    description: "Learn digital marketing, SEO, and growth strategies",
  },
  {
    name: "Photography",
    slug: "photography",
    icon: Camera,
    courseCount: 420,
    color: "text-purple-600",
    description: "Master photography techniques and photo editing",
  },
  {
    name: "Music",
    slug: "music",
    icon: Music,
    courseCount: 380,
    color: "text-red-600",
    description: "Learn instruments, music theory, and production",
  },
  {
    name: "Health & Fitness",
    slug: "health-fitness",
    icon: Heart,
    courseCount: 290,
    color: "text-rose-600",
    description: "Improve your health, fitness, and wellbeing",
  },
  {
    name: "Lifestyle",
    slug: "lifestyle",
    icon: Wrench,
    courseCount: 340,
    color: "text-indigo-600",
    description: "Personal development and lifestyle improvement",
  },
]

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="font-serif text-4xl font-bold mb-4">All Categories</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore our comprehensive collection of courses across various categories
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((category) => {
          const IconComponent = category.icon
          return (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                <CardContent className="p-6 text-center h-full flex flex-col">
                  <IconComponent
                    className={`h-16 w-16 mx-auto mb-4 ${category.color} group-hover:scale-110 transition-transform duration-300`}
                  />
                  <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{category.description}</p>
                  <p className="text-sm font-medium text-primary">{category.courseCount} courses</p>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
