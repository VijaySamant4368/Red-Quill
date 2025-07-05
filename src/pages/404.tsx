import Link from "next/link";

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-5xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </p>
        <p className="text-gray-600 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="text-blue-600 hover:underline text-lg"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
