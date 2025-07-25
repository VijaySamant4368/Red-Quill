import BlogFull from "@/components/blog-full";
import { getAllBlogs, getBlogById } from "@/firebase/firestore";
import Blog, { BlogProps } from "@/types/Blog";
import {GetStaticPropsContext } from "next";
import { useRouter } from "next/router";


interface BlogData {
    data: {data: Blog}
}

export default function BlogPost(props: BlogData) {
  const router = useRouter();

  // Optional loading state for fallback: true
  if (router.isFallback) {
        return (
            <div className="min-h-screen flex items-center justify-center px-6 bg-transparent">
              <div className="text-white text-lg font-medium animate-pulse custom-effect">
                Loading blog...
            </div>
          </div>
    );
  }

  const blog = props.data.data;

  return <BlogFull blog={blog} />;
}

export async function getStaticPaths() {
    const response = await getAllBlogs()
    const paths = response.map((blog) =>({
        params: { slug: blog.id }, 
    }));
    return {
        paths:  paths,
        fallback: "blocking"
    }
}

export async function getStaticProps(context: GetStaticPropsContext) {
    const {params} = context
        if (!params || typeof params.slug !== "string") {
        return {
            notFound: true,
        };
    }
    // const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`)
    const resopnse = await getBlogById(params.slug)
    // const data = await data.json()
    if (!resopnse)  return {
            notFound: true,
    }
    const data = resopnse.data
    return {
        props: {
            data: {data}
        }, revalidate: 5
    }
}
