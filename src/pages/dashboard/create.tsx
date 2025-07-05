import { addBlog } from "@/firebase/firestore";
import React, { FormEvent, useState, useContext, useEffect } from "react";
import { UserContext } from "../_app";
import { useRouter } from "next/router";

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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form
        onSubmit={handleSubmission}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800">Create a Blog</h2>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Blog Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter blog title"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Blog Content</label>
          <textarea
            name="body"
            value={formData.body}
            onChange={handleChange}
            rows={5}
            className="w-full border border-gray-300 rounded px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your blog here..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
        >
          {isSending? "Adding blog": "Submit"}
        </button>
      </form>
    </div>
  );
}
