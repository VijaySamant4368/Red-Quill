import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth, db_firestore} from "./firebase"
import { doc, setDoc } from "firebase/firestore";

export async function signUpUser(email:string, password:string, username:string){
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        // Signed up 
        const user = userCredential.user;
        await updateProfile(user, {
            displayName: username       //Gotta Update after the other things
        });

        //  Firebase Auth is not queryable like Firestore, hence:
        await setDoc(doc(db_firestore, "users", user.uid), {
            userId: user.uid,
            email: user.email,
            username: username,
            createdAt: new Date().toISOString()
        });
        return { user, success: true, error: null };
        
    } catch (error:any) {
        const errorCode = error.code;
        const errorMessage = error.message;
        return { user: null, success: false, error: { errorCode, errorMessage } };
    }
}

export async function logInUser(email:string, password:string){
    try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
        // Signed in 
        const user = userCredential.user;
        return { user, success: true, error: null };
        
    } catch (error:any) {
        const errorCode = error.code;
        const errorMessage = error.message;
        return { user: null, success: false, error: { errorCode, errorMessage } };
    }
}