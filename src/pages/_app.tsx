import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useContext, useEffect, useState, createContext } from "react";
import { auth } from "@/firebase/firebase";
import { onAuthStateChanged, User } from "firebase/auth";

// export const UserContext = createContext<User | undefined | null>(undefined)

interface AuthContextType {
  user: User | null;
  loading: boolean;
}

export const UserContext = createContext<AuthContextType>({
  user: null,
  loading: true
});

export default function App({ Component, pageProps }: AppProps) {

  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            setUser(user)
            setLoading(false)
          } else {
            // User is signed out
            setUser(null)
            setLoading(false)
          }
      });
  }, [])

  return (
    <UserContext.Provider value={{ user, loading }}>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header/>
        <main className="flex-grow px-6 py-8">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </UserContext.Provider>
  );
}
