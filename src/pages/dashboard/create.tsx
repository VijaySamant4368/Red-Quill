import { addBlog } from "@/firebase/firestore";
import React, { FormEvent, useState, useContext, useEffect } from "react";
import { UserContext } from "../_app";
import { useRouter } from "next/router";
import { Layout } from "@/components/layout";

export default function createBlog() {
  const {user, loading} = useContext(UserContext)
  const router = useRouter();
  useEffect(() =>{
    if (!user && !loading) {
      router.replace("/login")
    }
  }, [user, router] )

  const [formData, setFormData] = useState({
    id: "-1",
    title: '',
    body: '',
    userId: user? user.uid : "",
    username: user? user.displayName : ""
  });

  const [isSending, setIsSending] = useState<boolean>(false)

  async function handleSubmission(e: FormEvent) {
    if (!isSending){
      e.preventDefault();
      setIsSending(true)
      await addBlog(formData);
      router.push("/dashboard");
      setIsSending(false);
    }
  }

  function handleChange(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  return (
  <>
  <Layout title="Create a blog"/>
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-transparent">
      <form
        onSubmit={handleSubmission}
        className="w-full max-w-2xl bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-xl text-white space-y-6 custom-effect"
      >
        <h1 className="text-3xl font-bold text-center">Create New Blog</h1>

        <div className="space-y-2">
          <label className="block text-sm text-white/80">Title</label>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={formData.title}
            required
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="Enter blog title"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm text-white/80">Body</label>
          <textarea
            name="body"
            onChange={handleChange}
            value={formData.body}
            required
            rows={6}
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="Write your blog content..."
          />
        </div>

        <button
          type="submit"
          disabled={isSending}
          className="w-full py-2 px-4 bg-pink-500 hover:bg-pink-600 transition-colors text-white font-semibold rounded-lg shadow-md disabled:opacity-50"
        >
          {isSending ? "Publishing..." : "Publish"}
        </button>
      </form>
    </div>
  </>
);
}
