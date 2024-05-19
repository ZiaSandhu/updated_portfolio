// lib/firebase.js
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db,storage } from "./firebaseConfig";
import { ref, getDownloadURL } from 'firebase/storage';

export async function fetchDataFirebase(collectionName) {
  const data = [];
  const querySnapshot = await getDocs(collection(db, collectionName));
  querySnapshot.forEach(doc => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}

export async function getMultipleCollections() {
  const portfolioRef = collection(db, 'portfolio');
  const servicesRef = collection(db, 'services');
  const skillRef = collection(db, 'skills');
  // const userRef = collection(db, 'user');

  const [portfolioSnapshot, servicesSnapshot, skillSnapshot] = await Promise.all([
    getDocs(portfolioRef),
    getDocs(servicesRef),
    getDocs(skillRef),
    // getDocs(userRef),
  ]);

  const portfolioItems = portfolioSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  const servicesItems = servicesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  const skillItems = skillSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  // const userItem = userSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

  return { portfolioItems, servicesItems, skillItems };
}

export async function contactForm(formData){
  await addDoc(collection(db, 'contacts'), formData);
}

export async function downloadCv() {
    const fileRef = ref(storage, 'Resume.pdf'); 
    console.log("🚀 ~ downloadCv ~ fileRef:", fileRef)

    try {
      const url = await getDownloadURL(fileRef);

      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'ZiaUrRehman.pdf'); // Optionally set the file name
      link.setAttribute('target', '_blank'); // Optionally set the file name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
}
