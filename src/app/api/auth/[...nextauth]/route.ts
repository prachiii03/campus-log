import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/db";
import bcrypt from 'bcryptjs';

const handler = NextAuth({
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/login",
    },
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                prn: { label: "PRN", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                try {
                    const user = await prisma.student_details.findFirst({
                        where: {
                            prn_no: credentials?.prn ? parseInt(credentials.prn) : 0,
                        },
                    });

                    if (user && credentials) {
                        const match = await bcrypt.compare(credentials.password, user.password);
                        if (match) {
                            // Return only the fields needed
                            return {
                                id: user.student_id.toString(),
                                name: user.username,
                                email: user.email,
                                department: user.department_id,
                                prn: user.prn_no ? user.prn_no.toString() : null,
                            };
                        }
                    }
                    return null; // If no match, return null
                } catch (error) {
                    console.error("Authorization Error:", error);
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                // Add user information to the token
                token.id = user.id;
                token.prn = user.prn;
                token.department = user.department;
                token.username = user.name;
                token.email = user.email;
            }
            console.log("JWT : " + { token })
            return token;
        },
        async session({ session, token }) {
            // Add token information to the session

            session.user.id = token.id as string;
            session.user.prn = token.prn as string;
            session.user.department = token.department as string;
            session.user.username = token.username as string;
            console.log("Session : " + { session })
            return session;
        },
    },
});

export { handler as GET, handler as POST };

