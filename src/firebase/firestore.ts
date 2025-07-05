import Blog from "@/types/Blog";
import { db_firestore } from "./firebase";

import { collection, addDoc, getDocs, setDoc, doc, getDoc, query, where } from "firebase/firestore"; 
import { UserType } from "@/types/User";

export async function addBlog(data:Blog){
    try {
      const docRef = await addDoc(collection(db_firestore, "blogs"), {
        data
    });

    await setDoc(doc(db_firestore, "blogs", docRef.id), {
      data:{
        ...data,
        id: docRef.id
      }
    });
      console.log("Document written with ID: ", docRef.id);
      console.table(data)
    } catch (e) {
      console.error("Error adding document: ", e);
    }
}

export async function getAllBlogs() {
  const querySnapshot = await getDocs(collection(db_firestore, "blogs"));
  console.log("Total documents:", querySnapshot.size);
  const docs:Array<Blog> = []
  querySnapshot.forEach((doc:any) => {
    // doc.data() is never undefined for query doc snapshots
    const data:Blog = doc.data().data
    data.id = doc.id
    docs.push(data)
  });
  return docs
}

export async function getBlogById(blogId:string) {
    const docRef = doc(db_firestore, "blogs", blogId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return docSnap.data()    
    } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
        return null
    }
}

export async function getUsersBlogs(userId:string) {
  const blogsRef = collection(db_firestore, "blogs");
  const q = query(blogsRef, where("data.userId", "==", userId)); 
  const querySnapshot = await getDocs(q);
  // const querySnapshot = await getDocs(blogsRef);
  const blogs:Blog[] = []
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
     const data = doc.data().data;
     data.id = doc.id
     blogs.push(data);
  });
  console.log("userId", "==", userId)
  return blogs;
}



export async function getAllUsers(): Promise<UserType[]> {
  const usersRef = collection(db_firestore, "users");
  const querySnapshot = await getDocs(usersRef);
  const users: UserType[] = [];
  querySnapshot.forEach((doc) => {
    const user = doc.data() as UserType;
    users.push(user);
  });

  // console.log("✅ Found users:", users.length);
  // console.table(users)
  return users;
}