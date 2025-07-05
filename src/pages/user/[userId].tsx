import BlogInfo from "@/components/blog-info";
import UserProfile from "@/components/userProfile";
import { getAllUsers, getUsersBlogs } from "@/firebase/firestore";
import { getUserById } from "@/lib/user";
import { GetStaticPropsContext } from "next";
import { useRouter } from "next/router";

export default function UserDetails(props: any) {
  const router = useRouter();

  // Optional loading state for fallback: true
  if (router.isFallback) {
    return <div className="p-8 text-center">Loading user...</div>;
  }

  const blogs = props.data;
  const user = props.userData;

  return (
    <div>
      <UserProfile user={user} />
      <BlogInfo blogLists={blogs} />
    </div>
  );
}

export async function getStaticPaths() {
    const response = await getAllUsers()
    const paths = response.map((blog) =>({
        params: { userId: blog.userId }, 
    }));
    return {
        paths:  paths,
        fallback: false
    }
}

export async function getStaticProps(context: GetStaticPropsContext) {
    const {params} = context;
    if (!params)    return;
    const blogs = await getUsersBlogs(params.userId);
    const user = await getUserById(params.userId)
    return {
        props: {
            data: blogs,
            userData: {
              userId: user?.userId,
              email: user?.email,
              username: user?.username,
              password: ""
            }
        },
    }
}