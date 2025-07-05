import { User } from "firebase/auth";
import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { useContext } from "react";
import { UserContext } from "@/pages/_app";
import { useRouter } from "next/router";


export default function Header() {
  const {user} = useContext(UserContext)
  const router = useRouter()
  return (
    <header className="bg-white/10 backdrop-blur-md shadow-lg border-b border-white/20 text-white py-4 px-8 custom-effect">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
         <h1 className="text-3xl font-bold tracking-wide drop-shadow-md">Red Quill</h1>
        <nav className="space-x-6 text-lg">
          <Link href="/" className="hover:text-pink-300 transition-colors duration-200 font-medium">
            Home
          </Link>
          <Link href="/dashboard" className="hover:text-pink-300 transition-colors duration-200 font-medium">
            Dashboard
          </Link>
          <Link href="/about" className="hover:text-pink-300 transition-colors duration-200 font-medium">
            About
          </Link>

          {user ? <>
          <button onClick={()=>{signOut(auth); router.push("/login") }} className="hover:text-pink-300 transition-colors duration-200 font-medium">
                      Logout
                  </button>
                  <Link href="/user/me" className="hover:text-pink-300 transition-colors duration-200 font-medium">
                    My Profile
                  </Link>
          </>
            :
            <div>
                <Link href="/login" className="hover:text-pink-300 transition-colors duration-200 font-medium"> Login</Link>
                <Link href="/signup" className="hover:text-pink-300 transition-colors duration-200 font-medium"> Signup</Link>
            </div>
          }

        </nav>
      </div>
    </header>
  );
}
