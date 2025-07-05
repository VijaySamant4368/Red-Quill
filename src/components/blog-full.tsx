import Blog from "@/types/Blog"

export default function BlogFull({ blog }: { blog: Blog }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-transparent">
      <div className="max-w-3xl w-full bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 space-y-6 border border-white/20 text-white custom-effect">
        <h1 className="text-4xl font-extrabold tracking-tight">{blog?.title}</h1>
        <p className="text-lg leading-relaxed text-white/90">{blog?.body}</p>
        <hr className="border-white/30" />
        <p className="text-sm text-white/60 italic">Written by User #{blog.userId}</p>
      </div>
    </div>
  );
}
