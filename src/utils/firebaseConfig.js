// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkMuYtVKViAC-0iNmEDbH4qa64AKJM0BM",
  authDomain: "ziaportfolio0.firebaseapp.com",
  projectId: "ziaportfolio0",
  storageBucket: "ziaportfolio0.appspot.com",
  messagingSenderId: "615008515416",
  appId: "1:615008515416:web:9e634f53101681bde4612d",
  measurementId: "G-WR2RVBCG3K"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { db,storage };