import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-10">
        <section>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Red Quill</h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>Red Quill</strong> is a minimalist blog platform built using{" "}
            <span className="text-blue-600 font-medium">Next.js</span>,{" "}
            <span className="text-blue-600 font-medium">TypeScript</span>, and{" "}
            <span className="text-blue-600 font-medium">Tailwind CSS</span>. It uses{" "}
            <span className="text-blue-600 font-medium">Firebase Firestore</span> as a backend to manage blog content.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            Users can view blog posts, create their own, and navigate through a simple, responsive UI. This app is designed as a modern full-stack learning project with room for advanced features like editing, authentication, and image support.
          </p>
        </section>

        <hr className="border-gray-300" />

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">👤 About the Developer</h2>
          <p className="text-gray-700 text-base mb-4">
            Hi! I'm the developer of Red Quill — passionate about clean, scalable web apps built with cutting-edge frameworks.
            This project blends frontend and backend technologies into a real-world blog application.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
            {/* 
            <a
              href="https://your-portfolio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Portfolio
            </a> 
            */}
          </div>
        </section>
      </div>
    </div>
  );
}
