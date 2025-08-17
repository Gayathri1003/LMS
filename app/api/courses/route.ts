import { type NextRequest, NextResponse } from "next/server"

// Mock course data
const mockCourses = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp",
    subtitle: "Learn HTML, CSS, JavaScript, Node, React, MongoDB and more!",
    description: "This course was designed for complete beginners with zero programming experience...",
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
    originalPrice: 199.99,
    rating: 4.7,
    reviewCount: 234567,
    students: 850000,
    duration: "65 hours",
    lectures: 383,
    level: "BEGINNER" as const,
    language: "English",
    category: "Web Development",
    image: "/placeholder.svg?height=225&width=400",
    lastUpdated: "12/2023",
    whatYouWillLearn: [
      "Build 16 web development projects for your portfolio",
      "Learn the latest technologies, including Javascript, React, Node",
      "After the course you will be able to build ANY website you want",
    ],
    curriculum: [
      {
        id: "section_1",
        title: "Front-End Web Development",
        lectures: 12,
        duration: "2hr 18min",
        lessons: [
          { id: "lesson_1", title: "What is Web Development?", duration: "8:12", preview: true },
          { id: "lesson_2", title: "How Does the Internet Work?", duration: "12:45" },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Machine Learning A-Z: Python & R",
    subtitle: "Learn to create Machine Learning Algorithms in Python and R",
    description: "Master Machine Learning on Python & R...",
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
    originalPrice: 199.99,
    rating: 4.5,
    reviewCount: 156789,
    students: 720000,
    duration: "44 hours",
    lectures: 320,
    level: "INTERMEDIATE" as const,
    language: "English",
    category: "Data Science",
    image: "/placeholder.svg?height=225&width=400",
    lastUpdated: "11/2023",
    whatYouWillLearn: [
      "Master Machine Learning on Python & R",
      "Have a great intuition of many Machine Learning models",
      "Make accurate predictions",
    ],
    curriculum: [
      {
        id: "section_2",
        title: "Data Preprocessing",
        lectures: 10,
        duration: "1hr 45min",
        lessons: [{ id: "lesson_3", title: "Introduction to Machine Learning", duration: "10:15" }],
      },
    ],
  },
]

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const level = searchParams.get("level")
    const search = searchParams.get("search")

    let filteredCourses = [...mockCourses]

    // Apply filters
    if (category && category !== "All") {
      filteredCourses = filteredCourses.filter((course) => course.category === category)
    }

    if (level && level !== "All") {
      filteredCourses = filteredCourses.filter((course) => course.level === level)
    }

    if (search) {
      const searchLower = search.toLowerCase()
      filteredCourses = filteredCourses.filter(
        (course) =>
          course.title.toLowerCase().includes(searchLower) ||
          course.instructor.name.toLowerCase().includes(searchLower),
      )
    }

    return NextResponse.json(filteredCourses)
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
