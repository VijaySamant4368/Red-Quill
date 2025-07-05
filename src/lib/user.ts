
import { db_firestore } from '@/firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';


export async function getUserById(uid: string) {
    try {
        const userRef = doc(db_firestore, 'users', uid);
        const docSnap = await getDoc(userRef);

        if (docSnap.exists()) {
            // Document exists, return user data
            return docSnap.data();
        } else {
            // console.log('No user found with this UID!:', uid);
            return null;
        }
    } catch (error) {
        // console.error('Error getting user by UID: ', error);
        return null;
    }
}