import NextAuth from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            prn: string | null;
            department: string;
            username: string;
            email: string;
        };
    }

    interface User {
        id: string;
        prn: string | null;
        name: string;
        department: string;
        email: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: string;
        prn: string | null;
        department: string;
        username: string;
        email: string;
    }
}
