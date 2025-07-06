// import { getDatabase, ref, set } from "firebase/database";
// import {database} from "@/firebase/firebase"

// export function writeUserData(userId:number, name:String, email:String, imageUrl:String) {
// //   const db = getDatabase();
//   set(ref(database, 'users/' + userId), {
//     username: name,
//     email: email,
//     profile_picture : imageUrl
//   });
// }

// export default function Temp(){
//     writeUserData(1, "temp", "tempor@ry", "https://example.com/image1")
//     return(
//         <div>
//             <h1>
//                 Sending?Sent data to Firebase
//             </h1>
//         </div>
//     )
// }