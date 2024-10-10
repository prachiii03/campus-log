// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import prisma from "@/lib/db";
// import bcrypt from 'bcryptjs';

// const handler = NextAuth({
//     session: {
//         strategy: "jwt",
//         maxAge: 24 * 60 * 60, // 24 hours session expiry
//     },
//     pages: {
//         signIn: "/login",
//     },
//     providers: [
//         CredentialsProvider({
//             name: "credentials",
//             credentials: {
//                 prn: { label: "PRN", type: "text" },
//                 password: { label: "Password", type: "password" },
//             },
//             async authorize(credentials) {
//                 try {
//                     const user = await prisma.student_details.findFirst({
//                         where: {
//                             prn_no: credentials?.prn ? parseInt(credentials.prn) : 0,
//                         },
//                     });

//                     if (user && credentials) {
//                         const match = await bcrypt.compare(credentials.password, user.password);
//                         if (match) {
//                             return {
//                                 id: user.student_id.toString(),
//                                 name: user.username,
//                                 email: user.email,
//                                 department: user.department_id,
//                                 prn: user.prn_no ? user.prn_no.toString() : null,
//                                 username: user.username
//                             };
//                         }
//                     }
//                     return null;
//                 } catch (error) {
//                     console.error("Authorization Error:", error);
//                     return null;
//                 }
//             },
//         }),
//     ],
//     callbacks: {

//         async session({ session, user }) {
//             console.log("Session Callback triggered");
//             if (user) {
//                 session.user.id = user.id;
//                 session.user.prn = user.prn;
//                 session.user.department = user.department;
//                 session.user.username = user.username;
//                 session.user.email = user.email + "d";
//                 console.log("Modified Session Email:", session.user.email);
//             } else {
//                 console.error("Token is undefined in session callback");
//             }
//             console.log("Returning session:", session);
//             return session;
//         },
//     },
// });

// export { handler as GET, handler as POST };



import NextAuth from "next-auth/next";
import { authOptions } from "./options";

const handler = NextAuth(authOptions)


export { handler as GET, handler as POST };