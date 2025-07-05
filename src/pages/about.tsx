import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-transparent">
      <div className="max-w-4xl w-full bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-2xl border border-white/20 text-white space-y-8 custom-effect">
        <section>
          <h1 className="text-4xl font-extrabold tracking-tight mb-6">
            About <span className="text-pink-400">Red Quill</span>
          </h1>

          <p className="text-white/90 text-lg leading-relaxed">
            <strong className="font-semibold text-white">Red Quill</strong> is a minimalist blogging platform built with{" "}
            <span className="text-pink-300">Next.js</span>,{" "}
            <span className="text-pink-300">TypeScript</span>, and{" "}
            <span className="text-pink-300">Tailwind CSS</span>. It uses{" "}
            <span className="text-pink-300">Firebase Firestore</span> for real-time blog content storage.
          </p>

          <p className="text-white/80 text-lg leading-relaxed mt-4">
            This project follows a <span className="text-pink-400 font-medium">Glassmorphism design theme</span>, featuring
            blurred backgrounds, transparent cards, soft shadows, and clean UI elements — crafted using Tailwind utilities.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mt-10 mb-4">Connect with Me</h2>
          <ul className="space-y-2 text-white/80">
            <li>
              🔗 GitHub:{" "}
              <a
                href="https://github.com/vijaysamant4368"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-300 transition-colors"
              >
                github.com/vijaysamant4368
              </a>
            </li>
            <li>
              🔗 LinkedIn:{" "}
              <a
                href="https://linkedin.com/in/vijaysamant4368"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-300 transition-colors"
              >
                linkedin.com/in/vijaysamant4368
              </a>
            </li>
            {/* 
            <li>
              🌐 Portfolio:{" "}
              <a
                href="https://vijaysamant4368.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-300 transition-colors"
              >
                vijaysamant4368.com
              </a>
            </li>
            */}
          </ul>
        </section>
      </div>
    </div>
  );
}
