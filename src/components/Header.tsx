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
    <header className="bg-red-700 text-white py-4 px-8 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Red Quill</h1>
        <nav className="space-x-6">
          <Link href="/" className="hover:underline transition duration-150">
            Home
          </Link>
          <Link href="/dashboard" className="hover:underline transition duration-150">
            Dashboard
          </Link>
          <Link href="/about" className="hover:underline transition duration-150">
            About
          </Link>

          {user ? <>
          <button onClick={()=>{signOut(auth); router.push("/login") }} className="hover:underline transition duration-150">
                      Logout
                  </button>
                  <Link href="/user/me" className="hover:underline transition duration-150">
                    My Profile
                  </Link>
          </>
            :
            <div>
                <Link href="/login" className="hover:underline transition duration-150"> Login</Link>
                <Link href="/signup" className="hover:underline transition duration-150"> Signup</Link>
            </div>
          }

        </nav>
      </div>
    </header>
  );
}
