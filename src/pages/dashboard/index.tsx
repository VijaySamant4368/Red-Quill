import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import BlogInfo from "@/components/blog-info";
import Blog, { BlogProps } from "@/types/Blog";
import { getAllBlogs } from "@/firebase/firestore";
import Link from "next/link";

export default function Dashboard(props: BlogProps) {
  const items = props.items || [];

  return (
        <div className="min-h-screen px-4 py-12 flex justify-center bg-transparent">
      <div className="max-w-4xl w-full space-y-8 bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-xl text-white custom-effect">
        <h1 className="text-4xl font-extrabold tracking-tight">📊 Dashboard</h1>

        <BlogInfo blogLists={items} />

        <div className="text-right">
          <Link
            href="/dashboard/create"
            className="inline-block mt-4 px-5 py-2 bg-pink-500 hover:bg-pink-600 transition-colors text-white font-semibold rounded-lg shadow-md"
          >
            ➕ Create a Blog
          </Link>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const response = await getAllBlogs();
  return {
    props: {
      items: response,
    },
  };
}
