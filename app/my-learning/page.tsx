"use client"

import { useState } from "react"
import { Search, Grid, List, Play, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const learningCourses = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp",
    instructor: "Dr. Angela Yu",
    progress: 65,
    totalLessons: 383,
    completedLessons: 249,
    lastWatched: "Introduction to React Hooks",
    timeSpent: "45h 30m",
    image: "/placeholder.svg?height=120&width=200",
    status: "in-progress",
    category: "Web Development",
    enrolledDate: "Jan 15, 2024",
  },
  {
    id: "2",
    title: "Machine Learning A-Z",
    instructor: "Kirill Eremenko",
    progress: 30,
    totalLessons: 320,
    completedLessons: 96,
    lastWatched: "Linear Regression Theory",
    timeSpent: "22h 15m",
    image: "/placeholder.svg?height=120&width=200",
    status: "in-progress",
    category: "Data Science",
    enrolledDate: "Feb 3, 2024",
  },
  {
    id: "3",
    title: "React - The Complete Guide",
    instructor: "Maximilian Schwarzmüller",
    progress: 100,
    totalLessons: 487,
    completedLessons: 487,
    lastWatched: "Course Completion",
    timeSpent: "67h 45m",
    image: "/placeholder.svg?height=120&width=200",
    status: "completed",
    category: "Frontend",
    enrolledDate: "Dec 10, 2023",
  },
  {
    id: "4",
    title: "Node.js Masterclass",
    instructor: "Andrew Mead",
    progress: 15,
    totalLessons: 200,
    completedLessons: 30,
    lastWatched: "Setting up Node.js",
    timeSpent: "8h 20m",
    image: "/placeholder.svg?height=120&width=200",
    status: "in-progress",
    category: "Backend",
    enrolledDate: "Mar 1, 2024",
  },
]

export default function MyLearningPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("recent")

  const filteredCourses = learningCourses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = filterStatus === "all" || course.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "in-progress":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4" />
      case "in-progress":
        return <Play className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl font-bold mb-2">My Learning</h1>
          <p className="text-muted-foreground">Track your progress and continue your learning journey</p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search your courses..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex gap-2">
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Courses</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Recently Accessed</SelectItem>
                <SelectItem value="progress">Progress</SelectItem>
                <SelectItem value="title">Title A-Z</SelectItem>
                <SelectItem value="enrolled">Recently Enrolled</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex border rounded-md">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="rounded-r-none"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="rounded-l-none"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Course Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">4</div>
              <div className="text-sm text-muted-foreground">Total Courses</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">1</div>
              <div className="text-sm text-muted-foreground">Completed</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">3</div>
              <div className="text-sm text-muted-foreground">In Progress</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-600">143h</div>
              <div className="text-sm text-muted-foreground">Total Time</div>
            </CardContent>
          </Card>
        </div>

        {/* Courses */}
        <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
          {filteredCourses.map((course) => (
            <Card key={course.id} className={viewMode === "list" ? "overflow-hidden" : "overflow-hidden"}>
              {viewMode === "grid" ? (
                <>
                  <div className="relative">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-32 object-cover"
                    />
                    <Badge className={`absolute top-2 right-2 ${getStatusColor(course.status)}`}>
                      {getStatusIcon(course.status)}
                      <span className="ml-1 capitalize">{course.status.replace("-", " ")}</span>
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2 line-clamp-2">{course.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{course.instructor}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>
                          {course.completedLessons}/{course.totalLessons} lessons
                        </span>
                      </div>
                      <Progress value={course.progress} />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{course.progress}% complete</span>
                        <span>{course.timeSpent} spent</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        {course.status === "completed" ? "Review" : "Continue"}
                      </Button>
                      <Button variant="outline" size="sm" className="bg-transparent">
                        Details
                      </Button>
                    </div>
                  </CardContent>
                </>
              ) : (
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-20 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold">{course.title}</h3>
                          <p className="text-sm text-muted-foreground">{course.instructor}</p>
                        </div>
                        <Badge className={getStatusColor(course.status)}>
                          {getStatusIcon(course.status)}
                          <span className="ml-1 capitalize">{course.status.replace("-", " ")}</span>
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 mb-2">
                        <div className="flex-1">
                          <Progress value={course.progress} className="h-2" />
                        </div>
                        <span className="text-sm text-muted-foreground">{course.progress}%</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>
                          {course.completedLessons}/{course.totalLessons} lessons • {course.timeSpent}
                        </span>
                        <span>Enrolled: {course.enrolledDate}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm">{course.status === "completed" ? "Review" : "Continue"}</Button>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No courses found matching your criteria.</p>
            <Button variant="outline" className="mt-4 bg-transparent" onClick={() => setSearchQuery("")}>
              Clear Search
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
