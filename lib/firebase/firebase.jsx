'use client'
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signOut } from "firebase/auth";
import { addDoc, collection, doc, getDocs, getFirestore, query, setDoc, } from "firebase/firestore";
import countries from '../../countries.json'
const firebaseConfig = {
  apiKey: "AIzaSyC-ROElgYLLFDu6iYF_4MjiaAUZe0GO5r8",
  authDomain: "airbnb-clone-90453.firebaseapp.com",
  projectId: "airbnb-clone-90453",
  storageBucket: "airbnb-clone-90453.appspot.com",
  messagingSenderId: "312358733101",
  appId: "1:312358733101:web:dd44d785ef8a07ad083fa4",
  measurementId: "G-KETJM0B3DG"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app);
const provider = new GoogleAuthProvider();



export default db;
export { auth, provider };

export const logOut = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}

export async function getPhotos() {
  let photos = []
  const querySnapshot = await getDocs(collection(db, "homes"));
  querySnapshot.forEach((doc) => {
    photos.push(doc.data());
  })
  return photos
}



