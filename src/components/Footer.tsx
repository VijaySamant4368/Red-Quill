export default function Footer() {
  return (
    <footer className="bg-white/10 backdrop-blur-md text-center text-white/70 text-sm py-6 mt-12 shadow-inner border-t border-white/20 custom-effect">
      © {new Date().getFullYear()} <span className="font-semibold text-white">Red Quill</span>. All rights reserved.
    </footer>

  );
}
