import Blog from "@/types/Blog"

export default function BlogFull({ blog }: { blog: Blog }) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-md p-8 space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">{blog?.title}</h1>
        <p className="text-lg text-gray-700 leading-relaxed">{blog?.body}</p>
        <hr />
        <p className="text-sm text-gray-500">Written by User #{blog.userId}</p>
      </div>
    </div>
  );
}
