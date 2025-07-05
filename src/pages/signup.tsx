import { signUpUser } from "@/firebase/firebase-auth";
import { useRouter } from "next/router";
import React, { useState } from "react"

export default function  signUp() {

    const router = useRouter()

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    })

    function handleChange(e:React.ChangeEvent<HTMLInputElement>){
        setFormData(
            {
                ...formData,
                [e.target.name]: e.target.value
            }
        )
    }

    async function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const response = await signUpUser(formData.email, formData.password, formData.username);
        if (response.success) {
            router.replace("/dashboard")
        } else {
            alert(response.error?.errorMessage)
            console.log(response)
        }
    }

    return(
        <>
        <h1>SIGN UP</h1>
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input name="username" type="text" value={formData.username} onChange={handleChange} required/>
            <label>EMail</label>
            <input name="email" type="email" value={formData.email} onChange={handleChange} required/>
            <label>Password</label>
            <input name="password" type="password" value={formData.password} onChange={handleChange} required/>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}