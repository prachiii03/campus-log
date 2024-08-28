// next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
    interface Session {
        id: string;  // Add custom id field
    }

    interface User {
        id: string;  // Add custom id field for user
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: string;  // Add custom id field for JWT token
    }
}
