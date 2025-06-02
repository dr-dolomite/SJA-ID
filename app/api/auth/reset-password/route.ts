import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { passwordResetRequestSchema, passwordResetConfirmSchema } from "@/lib/validations/auth"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

// POST: Request password reset (generate token)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = passwordResetRequestSchema.parse(body)
    
    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { employeeId: validatedData.employeeId },
      select: {
        id: true,
        employeeId: true,
        firstName: true,
        lastName: true,
        active: true,
      },
    })
    
    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      )
    }
    
    if (!user.active) {
      return NextResponse.json(
        { error: "Account is deactivated" },
        { status: 400 }
      )
    }
    
    // Generate JWT token for password reset
    const resetToken = jwt.sign(
      { 
        employeeId: user.employeeId,
        userId: user.id,
        type: "password_reset" 
      },
      process.env.JWT_SECRET || "fallback-secret",
      { expiresIn: "1h" } // Token expires in 1 hour
    )
    
    // In a real application, you would send this token via email
    // For now, we'll return it in the response
    return NextResponse.json(
      {
        message: "Password reset token generated",
        token: resetToken, // In production, send via email instead
        employeeId: user.employeeId,
        name: `${user.firstName} ${user.lastName}`,
      },
      { status: 200 }
    )
    
  } catch (error) {
    console.error("Password reset request error:", error)
    
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

// PUT: Reset password with token
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = passwordResetConfirmSchema.parse(body)
    
    // Verify the JWT token
    let decoded: any
    try {
      decoded = jwt.verify(
        validatedData.token,
        process.env.JWT_SECRET || "fallback-secret"
      )
    } catch (jwtError) {
      return NextResponse.json(
        { error: "Invalid or expired reset token" },
        { status: 400 }
      )
    }
    
    // Check if token is for password reset
    if (decoded.type !== "password_reset") {
      return NextResponse.json(
        { error: "Invalid token type" },
        { status: 400 }
      )
    }
    
    // Find the user
    const user = await prisma.user.findUnique({
      where: { employeeId: decoded.employeeId },
      select: {
        id: true,
        employeeId: true,
        active: true,
      },
    })
    
    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      )
    }
    
    if (!user.active) {
      return NextResponse.json(
        { error: "Account is deactivated" },
        { status: 400 }
      )
    }
    
    // Hash the new password
    const hashedPassword = await bcrypt.hash(validatedData.newPassword, 12)
    
    // Update the user's password
    await prisma.user.update({
      where: { id: user.id },
      data: { 
        password: hashedPassword,
        updatedAt: new Date(),
      },
    })
    
    return NextResponse.json(
      { message: "Password reset successfully" },
      { status: 200 }
    )
    
  } catch (error) {
    console.error("Password reset confirm error:", error)
    
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