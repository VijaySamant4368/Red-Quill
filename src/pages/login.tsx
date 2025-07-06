import { Layout } from "@/components/layout";
import { logInUser } from "@/firebase/firebase-auth";
import { useRouter } from "next/router";
import React, { useState } from "react"

export default function  logIn() {

    const router = useRouter()

    const [formData, setFormData] = useState({
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
        const response = await logInUser(formData.email, formData.password);
        if (response.success) {
            router.replace("/dashboard")
        } else {
            alert(response.error?.errorMessage)
            // console.log(response)
        }
    }

    return(
      <>
      <Layout title={"Login"}/>
      <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-transparent">
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-xl border border-white/20 text-white w-full max-w-md space-y-6 custom-effect"
      >
        <h1 className="text-3xl font-bold text-center">Log In</h1>
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-white/80">
            Email
          </label>
          <input
            name="email"
            type="email"
            onChange={handleChange}
            value={formData.email}
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="you@example.com"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium text-white/80">
            Password
          </label>
          <input
            name="password"
            type="password"
            onChange={handleChange}
            value={formData.password}
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="••••••••"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-pink-500 hover:bg-pink-600 transition-colors text-white font-semibold rounded-lg shadow-md"
        >
          Sign In
        </button>
      </form>
    </div>
    </>
    )
}