import { NextAuthOptions } from "next-auth";
import bcrypt from 'bcryptjs';
import prisma from "@/lib/db";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                prn: { label: "PRN", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials: any): Promise<any> {
                try {
                    const user = await prisma.student_details.findFirst({
                        where: {
                            prn_no: credentials.prn
                        }
                    });

                    if (!user) {
                        throw new Error("No user found with provided PRN number");
                    }

                    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

                    if (!isPasswordCorrect) {
                        throw new Error("Password does not match");
                    }

                    // Return the user object with only the fields you need in the session
                    return {
                        id: user.student_id,
                        prn: user.prn_no.toString(),
                        name: user.first_name,
                        username: `${user.first_name} ${user.last_name}`,
                        email: user.email,
                        department: user.department_id
                    };
                } catch (error) {
                    console.log(error)
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            // If user is available, this is the first sign-in
            if (user) {
                token.id = user.id;
                token.prn = user.prn;
                token.name = user.name;
                token.username = user.username;
                token.email = user.email;
                token.department = user.department;
            }
            return token;
        },
        async session({ session, token }) {
            // Attach the additional fields to the session object
            if (token) {
                session.user.id = token.id;
                session.user.prn = token.prn;
                session.user.name = token.name;
                session.user.username = token.username;
                session.user.department = token.department;
                session.user.email = token.email;
            }
            return session;
        }
    },
    session: {
        strategy: "jwt",
        maxAge: 24 * 60 * 60, // 24 hours
    },
    pages: {
        signIn: '/login'
    },
    secret: process.env.NEXTAUTH_SECRET
}
