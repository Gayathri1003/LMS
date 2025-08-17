"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Filter, Grid, List, Star, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"

// Mock courses data for category
const mockCourses = [
  {
    id: "1",
    title: "Complete React Developer Course",
    instructor: "John Smith",
    price: 89.99,
    originalPrice: 199.99,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.8,
    students: 45000,
    duration: "40 hours",
    level: "Beginner",
    category: "development",
  },
  {
    id: "2",
    title: "Advanced JavaScript Concepts",
    instructor: "Sarah Johnson",
    price: 79.99,
    originalPrice: 149.99,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.7,
    students: 32000,
    duration: "35 hours",
    level: "Advanced",
    category: "development",
  },
  {
    id: "3",
    title: "Node.js Backend Development",
    instructor: "Mike Wilson",
    price: 94.99,
    originalPrice: 179.99,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.6,
    students: 28000,
    duration: "45 hours",
    level: "Intermediate",
    category: "development",
  },
]

export default function CategoryPage() {
  const params = useParams()
  const slug = params.slug as string
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("popularity")
  const [priceRange, setPriceRange] = useState([0, 200])
  const [selectedLevels, setSelectedLevels] = useState<string[]>([])

  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1)

  const handleLevelChange = (level: string, checked: boolean) => {
    if (checked) {
      setSelectedLevels((prev) => [...prev, level])
    } else {
      setSelectedLevels((prev) => prev.filter((l) => l !== level))
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-serif text-4xl font-bold mb-4">{categoryName} Courses</h1>
        <p className="text-lg text-muted-foreground">
          Master {categoryName.toLowerCase()} with courses from industry experts
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filters
              </h3>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Price Range</h4>
                <Slider value={priceRange} onValueChange={setPriceRange} max={200} step={10} className="mb-2" />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>

              {/* Level */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Level</h4>
                <div className="space-y-2">
                  {["Beginner", "Intermediate", "Advanced"].map((level) => (
                    <div key={level} className="flex items-center space-x-2">
                      <Checkbox
                        id={level}
                        checked={selectedLevels.includes(level)}
                        onCheckedChange={(checked) => handleLevelChange(level, checked as boolean)}
                      />
                      <label htmlFor={level} className="text-sm">
                        {level}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full bg-transparent" variant="outline">
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Controls */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">Showing {mockCourses.length} courses</p>
            <div className="flex items-center gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity">Most Popular</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex border rounded-md">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Courses Grid/List */}
          <div className={viewMode === "grid" ? "grid md:grid-cols-2 xl:grid-cols-3 gap-6" : "space-y-4"}>
            {mockCourses.map((course) => (
              <Card key={course.id} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className={`p-0 ${viewMode === "list" ? "flex" : ""}`}>
                  <div className={viewMode === "list" ? "w-64 flex-shrink-0" : ""}>
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                        viewMode === "list" ? "h-32" : "h-48"
                      }`}
                    />
                  </div>
                  <div className="p-6 flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {course.level}
                      </Badge>
                      <div className="text-right">
                        <div className="font-bold text-lg">${course.price}</div>
                        <div className="text-sm text-muted-foreground line-through">${course.originalPrice}</div>
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">By {course.instructor}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{course.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{course.students.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                    <Button className="w-full">Add to Cart</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
