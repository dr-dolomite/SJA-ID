import { DefaultSession, DefaultUser } from "next-auth"
import { JWT, DefaultJWT } from "next-auth/jwt"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      employeeId: string
      role: string
    } & DefaultSession["user"]
  }

  interface User extends DefaultUser {
    employeeId: string
    role: string
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    employeeId: string
    role: string
  }
}