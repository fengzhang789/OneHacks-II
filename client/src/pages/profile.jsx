import React from 'react'
import { getAuth,  onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import Navbar from '../components/navbar';
import { readFromDB } from '../firebase/database';
import profilePicture from '../assets/nouser.png'


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
    const [firstName, setFName] = React.useState(null)
    const [lastName, setLName] = React.useState(null)
    const [type, setType] = React.useState(null)
    
    React.useEffect(() => {
       //CHECK IF USER IS LOGGED IN
        onAuthStateChanged(auth, (user) => {
            if (user) {
                
                const uid = user.uid; //USER ID
                const fetchFromDB = async () => {
                    const data = await readFromDB("user data", uid)

                    console.log(data)
                    
                    setFName(data.firstName)
                    setLName(data.lastName)
                    setType(data.type)
                    setStatus(true)
                }

                fetchFromDB()

                
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
                <div className="profile">
                    <img src={profilePicture} alt="profile"></img>
                    <p>Hi {firstName} {lastName}, {type}</p>
                </div>
                
            ) : (
                // LOGGED OUT
                <p>YOU ARE NOT AUTHORIZED TO VIEW THIS PAGE</p>
            )}
        </>
    )
    
    
}

export default Profile