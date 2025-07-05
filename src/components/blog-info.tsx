import Blog, { BlogLists } from "@/types/Blog"
import Link from "next/link"

export default function BlogInfo({blogLists}: BlogLists){
  console.log("To render")
  console.table(blogLists)
    return (
      <ul className="flex flex-col gap-y-6">
        {blogLists.map((blog_info) => (
          <li key={blog_info.id} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col space-y-2">
              <Link href={`/user/${blog_info.userId}`} className="text-blue-700 font-semibold hover:underline">
                <div className="text-gray-700 text-sm">User: {blog_info.username || blog_info.userId}</div>
              </Link>
              <Link href={`/blog/${blog_info.id}`} className="text-blue-700 font-semibold hover:underline">
                {blog_info.title}
              </Link>
            </div>
          </li>
        ))}
      </ul>
  )
}