import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import BlogInfo from "@/components/blog-info";
import Blog, { BlogProps } from "@/types/Blog";
import { getAllBlogs } from "@/firebase/firestore";
import Link from "next/link";

export default function Dashboard(props: BlogProps) {
  const items = props.items || [];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        <BlogInfo blogLists={items} />

        <Link
          href="/dashboard/create"
          className="inline-block mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          ➕ Create a Blog
        </Link>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const response = await getAllBlogs();
  return {
    props: {
      items: response,
    },
  };
}
