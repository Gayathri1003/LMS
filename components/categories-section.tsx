import Link from "next/link"
import { Code, Palette, BarChart3, Camera, Music, Briefcase, Heart, Wrench } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    name: "Development",
    icon: Code,
    courseCount: 1250,
    color: "text-blue-600",
  },
  {
    name: "Design",
    icon: Palette,
    courseCount: 890,
    color: "text-pink-600",
  },
  {
    name: "Business",
    icon: Briefcase,
    courseCount: 1100,
    color: "text-green-600",
  },
  {
    name: "Marketing",
    icon: BarChart3,
    courseCount: 750,
    color: "text-orange-600",
  },
  {
    name: "Photography",
    icon: Camera,
    courseCount: 420,
    color: "text-purple-600",
  },
  {
    name: "Music",
    icon: Music,
    courseCount: 380,
    color: "text-red-600",
  },
  {
    name: "Health & Fitness",
    icon: Heart,
    courseCount: 290,
    color: "text-rose-600",
  },
  {
    name: "Lifestyle",
    icon: Wrench,
    courseCount: 340,
    color: "text-indigo-600",
  },
]

export function CategoriesSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-black text-foreground mb-4">Top Categories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from hundreds of courses in the most popular categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <Link key={category.name} href={`/category/${category.name.toLowerCase()}`}>
                <Card className="group hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <IconComponent
                      className={`h-12 w-12 mx-auto mb-4 ${category.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                    <h3 className="font-semibold text-sm mb-2 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">{category.courseCount} courses</p>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
