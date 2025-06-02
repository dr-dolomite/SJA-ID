import { z } from "zod"
import { UserRole } from "@/app/generated/prisma"

// Employee ID format validation (######-####)
const employeeIdRegex = /^\d{6}-\d{4}$/

export const signupSchema = z.object({
  employeeId: z
    .string()
    .min(1, "Employee ID is required")
    .regex(employeeIdRegex, "Invalid employee ID format. Use format: 403950-0000"),
  firstName: z
    .string()
    .min(1, "First name is required")
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "First name can only contain letters and spaces"),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Last name can only contain letters and spaces"),
  role: z.nativeEnum(UserRole, {
    errorMap: () => ({ message: "Please select a valid role" })
  })
})

export const signinSchema = z.object({
  employeeId: z
    .string()
    .min(1, "Employee ID is required")
    .regex(employeeIdRegex, "Invalid employee ID format"),
  password: z
    .string()
    .min(1, "Password is required")
})

export const passwordResetRequestSchema = z.object({
  employeeId: z
    .string()
    .min(1, "Employee ID is required")
    .regex(employeeIdRegex, "Invalid employee ID format")
})

export const passwordResetConfirmSchema = z.object({
  token: z
    .string()
    .min(1, "Reset token is required"),
  newPassword: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(100, "Password must be less than 100 characters")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Password must contain at least one lowercase letter, one uppercase letter, and one number"),
  confirmPassword: z
    .string()
    .min(1, "Please confirm your password")
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"]
})

export type SignupFormData = z.infer<typeof signupSchema>
export type SigninFormData = z.infer<typeof signinSchema>
export type PasswordResetRequestData = z.infer<typeof passwordResetRequestSchema>
export type PasswordResetConfirmData = z.infer<typeof passwordResetConfirmSchema>