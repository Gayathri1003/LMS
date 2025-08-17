"use client"

import { useState } from "react"
import { Search, Filter, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CourseCard } from "@/components/course-card"

const allCourses = [
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
  {
    id: "5",
    title: "Python for Data Science and Machine Learning",
    instructor: "Jose Portilla",
    rating: 4.6,
    reviewCount: 145678,
    price: 79.99,
    originalPrice: 199.99,
    duration: "25 hours",
    students: 380000,
    level: "Intermediate",
    category: "Data Science",
    image: "/placeholder.svg?height=225&width=400",
  },
  {
    id: "6",
    title: "Complete Node.js Developer Course",
    instructor: "Andrew Mead",
    rating: 4.7,
    reviewCount: 98765,
    price: 89.99,
    originalPrice: 199.99,
    duration: "35 hours",
    students: 290000,
    level: "Intermediate",
    category: "Backend",
    image: "/placeholder.svg?height=225&width=400",
  },
]

const categories = ["All", "Web Development", "Data Science", "Frontend", "Backend", "Cloud Computing"]
const levels = ["All", "Beginner", "Intermediate", "Advanced"]
const durations = ["All", "0-2 Hours", "3-6 Hours", "7-17 Hours", "17+ Hours"]

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedLevel, setSelectedLevel] = useState("All")
  const [selectedDuration, setSelectedDuration] = useState("All")
  const [sortBy, setSortBy] = useState("popularity")
  const [showFilters, setShowFilters] = useState(false)

  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory
    const matchesLevel = selectedLevel === "All" || course.level === selectedLevel

    return matchesSearch && matchesCategory && matchesLevel
  })

  return (
    <div className="min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="bg-card py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-center mb-8">All Courses</h1>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search courses..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="lg:hidden">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>

            {/* Filters */}
            <div className={`grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 ${showFilters ? "block" : "hidden lg:grid"}`}>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger>
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  {levels.map((level) => (
                    <SelectItem key={level} value={level}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedDuration} onValueChange={setSelectedDuration}>
                <SelectTrigger>
                  <SelectValue placeholder="Duration" />
                </SelectTrigger>
                <SelectContent>
                  {durations.map((duration) => (
                    <SelectItem key={duration} value={duration}>
                      {duration}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity">Most Popular</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">{filteredCourses.length} courses found</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Clear Filters
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No courses found matching your criteria.</p>
              <Button
                variant="outline"
                className="mt-4 bg-transparent"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("All")
                  setSelectedLevel("All")
                  setSelectedDuration("All")
                }}
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
