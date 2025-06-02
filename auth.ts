import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { prisma } from "@/lib/prisma"
import { signinSchema } from "@/lib/validations/auth"
import bcrypt from "bcryptjs"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        employeeId: { label: "Employee ID", type: "text", placeholder: "403950-0000" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          // Validate credentials using Zod
          const validatedCredentials = signinSchema.parse(credentials)

          // Find user in database
          const user = await prisma.user.findUnique({
            where: {
              employeeId: validatedCredentials.employeeId,
            },
            select: {
              id: true,
              employeeId: true,
              password: true,
              firstName: true,
              lastName: true,
              role: true,
              active: true,
            },
          })

          if (!user) {
            return null
          }

          // Check if user is active
          if (!user.active) {
            return null
          }

          // Verify password
          const isPasswordValid = await bcrypt.compare(
            validatedCredentials.password,
            user.password
          )

          if (!isPasswordValid) {
            return null
          }

          // Return user object
          return {
            id: user.id.toString(),
            employeeId: user.employeeId,
            name: `${user.firstName} ${user.lastName}`,
            role: user.role,
          }
        } catch (error) {
          console.error("Authentication error:", error)
          return null
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: parseInt(process.env.SESSION_MAX_AGE || "86400"), // 24 hours
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.employeeId = user.employeeId
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub!
        session.user.employeeId = token.employeeId as string
        session.user.role = token.role as string
      }
      return session
    },
  },
  pages: {
    signIn: "/auth/login",
  },
})