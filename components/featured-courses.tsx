import { CourseCard } from "./course-card"

const featuredCourses = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp",
    instructor: "Dr. Angela Yu",
    rating: 4.7,
    reviewCount: 234567,
    price: 84.99,
    originalPrice: 199.99,
    duration: "65 hours",
    students: 850000,
    level: "Beginner",
    category: "Web Development",
    image: "/placeholder.svg?height=225&width=400",
  },
  {
    id: "2",
    title: "Machine Learning A-Z: Python & R",
    instructor: "Kirill Eremenko",
    rating: 4.5,
    reviewCount: 156789,
    price: 94.99,
    originalPrice: 199.99,
    duration: "44 hours",
    students: 720000,
    level: "Intermediate",
    category: "Data Science",
    image: "/placeholder.svg?height=225&width=400",
  },
  {
    id: "3",
    title: "React - The Complete Guide",
    instructor: "Maximilian Schwarzmüller",
    rating: 4.6,
    reviewCount: 198765,
    price: 89.99,
    originalPrice: 199.99,
    duration: "48 hours",
    students: 650000,
    level: "Intermediate",
    category: "Frontend",
    image: "/placeholder.svg?height=225&width=400",
  },
  {
    id: "4",
    title: "AWS Certified Solutions Architect",
    instructor: "Stephane Maarek",
    rating: 4.8,
    reviewCount: 87654,
    price: 99.99,
    originalPrice: 199.99,
    duration: "27 hours",
    students: 450000,
    level: "Advanced",
    category: "Cloud Computing",
    image: "/placeholder.svg?height=225&width=400",
  },
]

export function FeaturedCourses() {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-black text-foreground mb-4">Featured Courses</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular courses, carefully selected by our expert instructors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </section>
  )
}
