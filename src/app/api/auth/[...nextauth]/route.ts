import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/db";

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
            async authorize(credentials, req) {
                try {
                    const user = await prisma.student.findFirst({
                        where: {
                            prn: credentials?.prn,
                        },
                    });


                    if (user) {
                        return {
                            id: user.prn,
                            name: user.name,
                        };
                    }

                    return null;
                } catch (error) {
                    console.log("Error: " + error);
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            console.log("JWT Callback:", { token, user });
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            console.log("Session Callback:", { session, token });
            if (token) {
                session.id = token.id;
            }
            return session;
        },
    },
});

export { handler as GET, handler as POST };
