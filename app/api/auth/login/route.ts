import { type NextRequest, NextResponse } from "next/server"

const mockUsers = [
  {
    id: "1",
    email: "john@example.com",
    password: "password123",
    firstName: "John",
    lastName: "Smith",
    avatar: "/placeholder.svg?height=64&width=64",
    role: "STUDENT" as const,
  },
  {
    id: "2",
    email: "instructor@example.com",
    password: "instructor123",
    firstName: "Dr. Angela",
    lastName: "Yu",
    avatar: "/placeholder.svg?height=64&width=64",
    role: "INSTRUCTOR" as const,
  },
  {
    id: "3",
    email: "admin@example.com",
    password: "admin123",
    firstName: "Admin",
    lastName: "User",
    avatar: "/placeholder.svg?height=64&width=64",
    role: "ADMIN" as const,
  },
]

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ message: "Email and password are required" }, { status: 400 })
    }

    const user = mockUsers.find((u) => u.email === email && u.password === password)

    if (!user) {
      return NextResponse.json({ message: "Invalid email or password" }, { status: 401 })
    }

    // Generate mock JWT token
    const token = `mock_token_${user.id}_${Date.now()}`

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user

    console.log("[v0] User logged in:", { email, role: user.role })

    return NextResponse.json({
      user: userWithoutPassword,
      token,
      message: "Login successful",
    })
  } catch (error) {
    console.error("[v0] Login error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
