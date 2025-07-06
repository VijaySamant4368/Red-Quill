import BlogInfo from "@/components/blog-info";
import { Layout } from "@/components/layout";
import UserProfile from "@/components/userProfile";
import { getAllUsers, getUsersBlogs } from "@/firebase/firestore";
import { getUserById } from "@/lib/user";
import { GetStaticPropsContext } from "next";
import { useRouter } from "next/router";

export default function UserDetails(props: any) {
  const router = useRouter();

  // Optional loading state for fallback: true
  if (router.isFallback) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-transparent">
        <p className="text-white text-lg font-medium animate-pulse custom-effect">
          Loading user...
        </p>
      </div>
    )
  }

  const blogs = props.data;
  const user = props.userData;

  return (
      <>
      <Layout title={`${user?.username || "User"}'s Profile`} />
      <div className="min-h-screen px-4 py-12 bg-transparent flex flex-col items-center space-y-8">
        <UserProfile user={user} />
        <div className="w-full max-w-4xl">
          <BlogInfo blogLists={blogs} />
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
    const response = await getAllUsers()
    const paths = response.map((blog) =>({
        params: { userId: blog.userId }, 
    }));
    return {
        paths:  paths,
        fallback: "blocking"
    }
}

export async function getStaticProps(context: GetStaticPropsContext) {
    const {params} = context;
    if (!params  || typeof params.userId !== "string")    return;
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
          }, revalidate: 5
    }
}