import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4 transition-colors duration-300">
          Welcome to <span className="text-red-500">Red</span>
          <span className="custom-hover">Q</span>
          <span className="custom-hover">u</span>
          <span className="custom-hover">i</span>
          <span className="custom-hover">l</span>
          <span className="custom-hover">l</span>
        </h1>
        <p className="text-lg text-gray-600 font-light max-w-xl mx-auto">
          Built with Next.js, TypeScript & Tailwind CSS. <br />
          Uses <code>{`{JSON}`}</code> Placeholder for API fetching.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 max-w-lg w-full">
        <h3 className="text-xl font-semibold mb-4">Quick Navigation</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <Link href="/dashboard" className="text-blue-600 hover:underline">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-blue-600 hover:underline">
              About Me
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
