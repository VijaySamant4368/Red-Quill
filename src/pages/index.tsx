import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "./_app";

export default function Home() {

  const {user} = useContext(UserContext)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-transparent">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold tracking-tight mb-6 text-white">
          Welcome to <span className="text-pink-400">Red</span>
          <span className="custom-hover">Q</span>
          <span className="custom-hover">u</span>
          <span className="custom-hover">i</span>
          <span className="custom-hover">l</span>
          <span className="custom-hover">l</span>
        </h1>
        <p className="text-lg text-white/80 font-light max-w-xl mx-auto leading-relaxed">
          Red Quill is a lightweight, blogging platform built with{" "}
          <span className="text-pink-300">Next.js</span>,{" "}
          <span className="text-pink-300">TypeScript</span>, and{" "}
          <span className="text-pink-300">Tailwind CSS</span>. It’s powered by{" "}
          <span className="text-pink-300">Firebase Firestore</span> for fast and scalable real-time data.
        </p>

      </div>

      <div className="bg-white/10 backdrop-blur-md shadow-xl border border-white/20 rounded-2xl p-8 max-w-lg w-full text-white space-y-4 custom-effect">
        <h3 className="text-2xl font-semibold">Quick Navigation</h3>
        <ul className="space-y-3">
          {!user && 
            <li>
              <Link href="/login" className="hover:text-pink-300 transition-colors">
                🔐 Login
              </Link>
            </li>
          }
          {!user && 
            <li>
              <Link href="/signup" className="hover:text-pink-300 transition-colors">
                📝 Sign Up
              </Link>
            </li>
          }
          <li>
            <Link href="/about" className="hover:text-pink-300 transition-colors">
              📘 About
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="hover:text-pink-300 transition-colors">
              📊 Dashboard
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
