import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white min-h-screen antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
