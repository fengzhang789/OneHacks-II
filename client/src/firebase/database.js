import { doc, setDoc, getDoc } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// INIT FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyBNQh8U9rl9HSgvYvS5_ujyDXGJHNbM7B4",
  authDomain: "highstart-480cd.firebaseapp.com",
  projectId: "highstart-480cd",
  storageBucket: "highstart-480cd.appspot.com",
  messagingSenderId: "30377976822",
  appId: "1:30377976822:web:00763527e4874fad0d9dd7",
  measurementId: "G-WV79G5EEQJ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// Add a new document in collection "cities"
async function addToDB(coll, userID, json) {
    await setDoc(doc(db, coll, userID), json);
}


async function readFromDB(coll, userID) {
    const docRef = doc(db, coll, userID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return docSnap.data()
        
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }

}


export { addToDB, readFromDB } 