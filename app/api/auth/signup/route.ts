import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { signupSchema } from "@/lib/validations/auth"
import bcrypt from "bcryptjs"
import { auth } from "@/auth"

export async function POST(request: NextRequest) {
  try {
    // Get the current session
    const session = await auth()
    
    // Check if there are any existing users (for initial setup)
    const userCount = await prisma.user.count()
    const isInitialSetup = userCount === 0
    
    // If not initial setup, check if user is authenticated and is an admin
    if (!isInitialSetup) {
      if (!session) {
        return NextResponse.json(
          { error: "Authentication required" },
          { status: 401 }
        )
      }
      
      if (session.user.role !== "ADMIN") {
        return NextResponse.json(
          { error: "Admin access required" },
          { status: 403 }
        )
      }
    }

    const body = await request.json()
    
    // Validate the request body
    const validatedData = signupSchema.parse(body)
    
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { employeeId: validatedData.employeeId }
    })
    
    if (existingUser) {
      return NextResponse.json(
        { error: "User with this employee ID already exists" },
        { status: 400 }
      )
    }
    
    // Hash the default password
    const defaultPassword = process.env.DEFAULT_PASSWORD || "@sjaGuardians"
    const hashedPassword = await bcrypt.hash(defaultPassword, 12)
    
    // Create the user
    const user = await prisma.user.create({
      data: {
        employeeId: validatedData.employeeId,
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        role: validatedData.role,
        password: hashedPassword,
        active: true,
      },
      select: {
        id: true,
        employeeId: true,
        firstName: true,
        lastName: true,
        role: true,
        active: true,
        createdAt: true,
      },
    })
    
    return NextResponse.json(
      {
        message: "User created successfully",
        user,
        defaultPassword, // In production, you might want to send this via email instead
      },
      { status: 201 }
    )
    
  } catch (error) {
    console.error("Signup error:", error)
    
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { error: "Invalid input data", details: error },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}