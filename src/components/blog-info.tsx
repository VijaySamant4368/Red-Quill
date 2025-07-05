import Blog, { BlogLists } from "@/types/Blog"
import Link from "next/link"

export default function BlogInfo({blogLists}: BlogLists){
  // // console.log("To render")
  // // console.table(blogLists)
    return (
    <ul className="flex flex-col gap-y-6">
      {blogLists.map((blog_info) => (
        <li
          key={blog_info.id}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow text-white custom-effect"
        >
          <div className="flex flex-col space-y-2">
            <Link
              href={`/user/${blog_info.userId}`}
              className="text-white/80 hover:text-pink-300 text-sm font-medium transition-colors"
            >
              User: {blog_info.username || blog_info.userId}
            </Link>
            <Link
              href={`/blog/${blog_info.id}`}
              className="text-xl font-semibold hover:text-pink-400 transition-colors"
            >
              {blog_info.title}
            </Link>
          </div>
        </li>
      ))}
    </ul>  )
}