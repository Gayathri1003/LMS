import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, password } = await request.json()

    // Validate input
    if (!firstName || !lastName || !email || !password) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ message: "Invalid email format" }, { status: 400 })
    }

    if (password.length < 6) {
      return NextResponse.json({ message: "Password must be at least 6 characters long" }, { status: 400 })
    }

    // For demo purposes, we'll allow any new email except a few test cases
    const existingEmails = ["existing@example.com", "test@example.com"]
    if (existingEmails.includes(email)) {
      return NextResponse.json({ message: "User already exists with this email" }, { status: 409 })
    }

    const newUser = {
      id: `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      email,
      firstName,
      lastName,
      avatar: "/placeholder.svg?height=64&width=64",
      role: "STUDENT" as const,
    }

    // Generate mock JWT token
    const token = `mock_token_${newUser.id}_${Date.now()}`

    console.log("[v0] New user registered:", { email, firstName, lastName })

    return NextResponse.json({
      user: newUser,
      token,
      message: "User registered successfully",
    })
  } catch (error) {
    console.error("[v0] Registration error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
