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
    return <div className="p-8 text-center">Loading blog...</div>;
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
        fallback: false
    }
}

export async function getStaticProps(context: GetStaticPropsContext) {
    const {params} = context
    // const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`)
    const resopnse = await getBlogById(params.slug)
    // const data = await data.json()
    const data = resopnse.data
    return {
        props: {
            data: {data}
        },
    }
}
