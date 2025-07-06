import { useContext, useEffect, useState } from "react";
import { UserContext } from "../_app";
import { useRouter } from "next/router";
import { getUsersBlogs } from "@/firebase/firestore";
import Blog from "@/types/Blog";
import UserProfile from "@/components/userProfile";
import { UserType } from "@/types/User";
import BlogInfo from "@/components/blog-info";
import { Layout } from "@/components/layout";

export default function myProfile(){
    const {user, loading} = useContext(UserContext);
    const [myUser, setMyUser] = useState<UserType | null>(null)
    const router = useRouter();
    const [myBlogs, setMyBlogs] = useState<Blog[]>([])

    
    useEffect(()=>{
        
        if (loading) return; // ✅ wait until Firebase finishes checking
        
        if (!user) {
            router.replace("/login"); // ✅ uncomment if redirect needed
            return;
        }
        setMyUser({
            userId: user.uid,
            email: user.email,
            username: user.displayName,
            password: ""
        })
        const getMyBlogs = async ()=>{
            const myblogs = await getUsersBlogs(user.uid);
            setMyBlogs(myblogs);
        }
        getMyBlogs();
        
    }, [user, router, loading])
    
    if (loading) {
        return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-transparent">
        <p className="text-white text-lg font-medium animate-pulse custom-effect">
          Loading profile...
        </p>
      </div>
        )
    }

    if (!user) return <></>;
    // // console.log(myBlogs)

    return(
        <>
        <Layout title="My Profile" />
    <div className="min-h-screen px-4 py-12 bg-transparent flex flex-col items-center space-y-8">
      <UserProfile user={myUser} />
      <div className="w-full max-w-4xl">
        <BlogInfo blogLists={myBlogs} />
      </div>
    </div>
    </>
    )

}