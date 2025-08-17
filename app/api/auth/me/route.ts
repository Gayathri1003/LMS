import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization")

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const token = authHeader.substring(7)

    // In real app, verify JWT token and get user from database
    // For mock, extract user ID from token
    const userId = token.split("_")[2]

    // Mock user data
    const user = {
      id: userId,
      email: "john@example.com",
      firstName: "John",
      lastName: "Smith",
      avatar: "/placeholder.svg?height=64&width=64",
      role: "STUDENT" as const,
    }

    return NextResponse.json(user)
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
