"use client";

import { signIn } from "next-auth/react";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Form() {
    const router = useRouter();
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        console.log(formData)
       const response = await signIn('credentials', {
        prn: formData.get("prn"),
        password: formData.get("password"),
        redirect: false
       });

       if(!response?.error) {
        router.push('/');
        router.refresh();
       }
       console.log({response})
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="PRN : ">PRN</label>
            <input type="number" name="prn" placeholder="Enter PRN" /> <br />
            <label htmlFor="Password : ">Password</label>
            <input type="password" name="password" placeholder="Enter password" /> <br />
            <button type="submit">Login</button>
        </form>
    )
}