import { Layout } from "@/components/layout";
import Link from "next/link";

export default function PageNotFound() {
  return (
    <>
    <Layout title="Page Not Found" />
    <div className="min-h-screen flex items-center justify-center px-4 bg-transparent">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/20 text-white text-center space-y-4 custom-effect">
        <h1 className="text-6xl font-extrabold text-pink-500">404</h1>
        <p className="text-2xl font-semibold">Page Not Found</p>
        <p className="text-white/70">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block mt-4 px-5 py-2 rounded-lg bg-pink-500 hover:bg-pink-600 transition-colors text-white font-medium"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
    </>
  );
}
