'use client';

import { FormEvent } from "react";
enum professionType{
    "student",
    "faculty",
    "nonTeachingStaff"
}
export default function Form() {

    const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            console.log(e);
            const formData = new FormData(e.currentTarget);
            console.log(formData)
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                body: JSON.stringify({
                    profession: professionType.student,
                    studentId: formData.get('studentId'),
                    firstName: formData.get('firstName'),
                    middleName: formData.get('middleName'),
                    lastName: formData.get('lastName'),
                    email: formData.get('email'),
                    currentStudingYear: formData.get('currentStudingYear'),
                    currentSemister: formData.get('currentSemister'),
                })
            })

            console.log(res)
        } catch (error) {
            console.log({error})
        }
    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="">PRN : </label>
            <input type="number" name="studentId" placeholder="Enter PRN" /> <br />
            <label htmlFor="">firstName</label>
            <input type="text" name="firstName" /> <br />
            <label htmlFor="">middleName</label>
            <input type="text" name="middleName" /> <br />
            <label htmlFor="">lastName</label>
            <input type="text" name="lastName" /> <br />
            <label htmlFor="">Email</label>
            <input type="email" name="email" /> <br />
            <label htmlFor="">currentStudingYear</label>
            <input type="text" name="currentStudingYear" /> <br />
            <label htmlFor="">currentSemister</label>
            <input type="text" name="currentSemister" /> <br />
            <button type="submit" >Register</button>
        </form>
    )
}