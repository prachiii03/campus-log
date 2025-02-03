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
                        },
                        include: {
                            department: {
                                select: {
                                    department_name: true // Select department_name instead of just the id
                                }
                            }
                        }
                    });
                    console.log(user)

                    if (!user) {
                        throw new Error("No user found with provided PRN number");
                    }

                    //const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
                    const isPasswordCorrect = credentials.password == user.password;
                    if (!isPasswordCorrect) {
                        throw new Error("Password does not match");
                    }

                    // Return the user object with the department name
                    return {
                        id: user.student_id,
                        prn: user.prn_no.toString(),
                        name: user.first_name,
                        username: `${user.first_name} ${user.last_name}`,
                        email: user.email,
                        department: user.department.department_name, // Use department_name instead of department_id
                        current_semester: user.current_studing_semester,
                        profession: "student",
                        activeBacklogs: user.active_backlogs,
                        currentGPA: user.current_gpa
                    };
                } catch (error) {
                    console.log(error);
                    return null;
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
                token.department = user.department; // Store department_name in token
                token.current_semester = user.current_semester;
                token.profession = user.profession
                token.activeBacklogs = user.activeBacklogs,
                    token.currentGPA = user.currentGPA
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
                session.user.department = token.department; // Store department_name in session
                session.user.email = token.email;
                session.user.current_semester = token.current_semester;
                session.user.profession = token.profession
                session.user.currentGPA = token.currentGPA;
                session.user.activeBacklogs = token.activeBacklogs
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
};
