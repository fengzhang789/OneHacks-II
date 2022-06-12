import React from 'react'
import { getAuth,  onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import Navbar from '../components/navbar';

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
const auth = getAuth(app);

function Profile(props) {
    const [user, setStatus] = React.useState(null)
    
    React.useEffect(() => {
       //CHECK IF USER IS LOGGED IN
        onAuthStateChanged(auth, (user) => {
            if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            // const uid = user.uid; //USER ID
            console.log("Returning true")
            setStatus(true)
            } 
            else {
            // User is signed out
            setStatus(false)
            }
        });
    }, [])
    
    
    
    return (
        <>
            <Navbar user={user}/>
            {user ? (
                // LOGGED IN
                <p>You're allowed on this page</p>
            ) : (
                // LOGGED OUT
                <p>YOU ARE NOT AUTHORIZED TO VIEW THIS PAGE</p>
            )}
        </>
    )
    
    
}

export default Profile