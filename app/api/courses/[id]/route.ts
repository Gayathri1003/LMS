import { type NextRequest, NextResponse } from "next/server"

// Mock course data (same as in courses/route.ts - in real app this would be in a shared service)
const mockCourses = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp",
    subtitle: "Learn HTML, CSS, JavaScript, Node, React, MongoDB and more!",
    description:
      "This course was designed for complete beginners with zero programming experience, as well as for existing programmers looking for a career change.\n\nThe course is taught by the lead instructor at the App Brewery, London's leading Programming Bootcamp.\n\nBy the end of this course, you will be fluently programming in HTML, CSS, Javascript, Node.js, React, MongoDB and more.",
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
    image: "/placeholder.svg?height=400&width=600",
    preview: "/placeholder.svg?height=400&width=600",
    lastUpdated: "12/2023",
    whatYouWillLearn: [
      "Build 16 web development projects for your portfolio, ready to apply for junior developer jobs.",
      "Learn the latest technologies, including Javascript, React, Node and even Web3 development.",
      "After the course you will be able to build ANY website you want.",
      "Build fully-fledged websites and web apps for your startup or business.",
      "Work as a freelance web developer.",
      "Master frontend development with React",
      "Master backend development with Node",
      "Learn professional developer best practices.",
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
          { id: "lesson_3", title: "HTML Fundamentals", duration: "15:30" },
          { id: "lesson_4", title: "CSS Basics", duration: "18:22" },
        ],
      },
      {
        id: "section_2",
        title: "Introduction to Javascript ES6",
        lectures: 25,
        duration: "4hr 32min",
        lessons: [
          { id: "lesson_5", title: "Introduction to Javascript", duration: "10:15" },
          { id: "lesson_6", title: "Javascript Variables", duration: "8:30" },
          { id: "lesson_7", title: "Javascript Data Types", duration: "12:45" },
        ],
      },
    ],
  },
]

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const course = mockCourses.find((c) => c.id === params.id)

    if (!course) {
      return NextResponse.json({ message: "Course not found" }, { status: 404 })
    }

    return NextResponse.json(course)
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
