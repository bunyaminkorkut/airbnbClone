import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signOut } from "firebase/auth";
import { addDoc, collection, doc, getFirestore, query, setDoc, } from "firebase/firestore";
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

export const getDocs = () => {
  getDocs(query(collection(db, 'translateApp')))
}


export default db;
export { auth, provider };

export const logOut = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}

export const AddHome = async ({photos}) => {
    
      let country = Object.keys(countries)[Math.floor(Math.random() * (Object.keys(countries).length))]
      let city = countries[country][Math.floor(Math.random() * countries[country].length)]
    addDoc(collection(db, "homes"), {
      id: photos.id,
      src: photos.src.tiny,
      title: photos.alt,
      price: (Math.floor(Math.random() * 100) * 100),
      typeOfPlace: ['allPlace', 'share', 'private'][Math.floor(Math.random() * 3)],
      bedrooms: Math.floor(Math.random() * 9),
      beds: Math.floor(Math.random() * 9),
      baths: Math.floor(Math.random() * 9),
      typeOfHome: ['home', 'apartment', 'guest', 'hotel'][Math.floor(Math.random() * 4)],
      facilities: ['wifi', 'kitchen', 'washing_machine', 'air_conditioning', 'dryer', 'heating'].slice(Math.floor(Math.random() * 5)),
      instantBook: [true, false][Math.floor(Math.random() * 2)],
      selfEnter: [true, false][Math.floor(Math.random() * 2)],
      freeCancel: [true, false][Math.floor(Math.random() * 2)],
      accessibility: ['steplessEnter', '81cm', 'disabledParking', 'steplessWat'].slice(Math.floor(Math.random() * 4)),
      superHost: [true, false][Math.floor(Math.random() * 2)],
      airbnbPlus: [true, false][Math.floor(Math.random() * 2)],
      language: ['turkish', 'english', 'french', 'japanese'][Math.floor(Math.random() * 4)],
      country: country,
      city: city,
    })
      .then(docRef => {
        console.log("Document has been added successfully");
      })
      .catch(error => {
        console.log(error);
      })
    // await setDoc(doc(db, "homes", photos.id), );
  }




