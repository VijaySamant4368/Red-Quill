import { useContext, useEffect, useState } from "react";
import { UserContext } from "../_app";
import { useRouter } from "next/router";
import { getUsersBlogs } from "@/firebase/firestore";
import Blog from "@/types/Blog";
import UserProfile from "@/components/userProfile";
import { UserType } from "@/types/User";
import BlogInfo from "@/components/blog-info";

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
        return <h1>Loading user data...</h1>; // ✅ This is correct
    }

    if (!user) return <></>;
    // console.log(myBlogs)

    return(
        // <h1>Hi</h1>
        <div>
            <UserProfile user = {myUser}  />
            <BlogInfo blogLists={myBlogs} />
        </div>
    )

}