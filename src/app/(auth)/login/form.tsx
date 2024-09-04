"use client";

import { signIn } from "next-auth/react";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Form() {
    const router = useRouter();
    
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        
        const response = await signIn('credentials', {
            prn: formData.get("prn") as string,
            password: formData.get("password") as string,
            redirect: false
        });

        if (!response?.error) {
            router.push('/');
            router.refresh();
        } else {
            console.error(response.error); // Log the error
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="prn">PRN</label>
            <input type="number" name="prn" placeholder="Enter PRN" required /> <br />
            
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Enter password" required /> <br />
            
            <button type="submit">Login</button>
        </form>
    );
}
