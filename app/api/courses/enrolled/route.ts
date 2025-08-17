import { type NextRequest, NextResponse } from "next/server"

// Mock enrolled courses data
const mockEnrolledCourses = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp",
    subtitle: "Learn HTML, CSS, JavaScript, Node, React, MongoDB and more!",
    instructor: {
      id: "inst_1",
      name: "Dr. Angela Yu",
      avatar: "/placeholder.svg?height=64&width=64",
      title: "Lead Instructor at App Brewery",
      rating: 4.7,
      students: 850000,
      courses: 12,
    },
    price: 84.99,
    rating: 4.7,
    reviewCount: 234567,
    students: 850000,
    duration: "65 hours",
    lectures: 383,
    level: "BEGINNER" as const,
    language: "English",
    category: "Web Development",
    image: "/placeholder.svg?height=120&width=200",
    enrolledDate: "Jan 15, 2024",
    progress: 65,
    completedLessons: 249,
    totalLessons: 383,
    lastWatched: "Introduction to React Hooks",
    timeSpent: "45h 30m",
    status: "IN_PROGRESS" as const,
  },
  {
    id: "2",
    title: "Machine Learning A-Z",
    subtitle: "Learn to create Machine Learning Algorithms in Python and R",
    instructor: {
      id: "inst_2",
      name: "Kirill Eremenko",
      avatar: "/placeholder.svg?height=64&width=64",
      title: "Data Scientist",
      rating: 4.5,
      students: 720000,
      courses: 8,
    },
    price: 94.99,
    rating: 4.5,
    reviewCount: 156789,
    students: 720000,
    duration: "44 hours",
    lectures: 320,
    level: "INTERMEDIATE" as const,
    language: "English",
    category: "Data Science",
    image: "/placeholder.svg?height=120&width=200",
    enrolledDate: "Feb 3, 2024",
    progress: 30,
    completedLessons: 96,
    totalLessons: 320,
    lastWatched: "Linear Regression Theory",
    timeSpent: "22h 15m",
    status: "IN_PROGRESS" as const,
  },
]

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization")

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    // In real app, get user's enrolled courses from database
    return NextResponse.json(mockEnrolledCourses)
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
