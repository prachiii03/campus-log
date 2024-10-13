import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            prn: string;
            department: string;
            username: string;
            email: string;
            current_semester: string;
            profession: string;
            currentGPA: number;
            activeBacklogs: number
        } & DefaultSession['user']
    }

    interface User {
        id: string;
        prn: string;
        name: string;
        department: string;
        email: string;
        username: string;
        current_semester: string;
        profession: string;
        currentGPA: number;
        activeBacklogs: number
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: string;
        prn: string;
        department: string;
        username: string;
        email: string;
        name: string;
        current_semester: string;
        profession: string;
        currentGPA: number;
        activeBacklogs: number
    }
}
