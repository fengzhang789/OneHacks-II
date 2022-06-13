import Navbar from "./components/navbar"
import React from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";

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



function App() {
  const [info, setData] = React.useState({message: "Processing..."});
  const [loggedIn, setStatus] = React.useState(null)

  function callBackend() {
      fetch("http://localhost:5000/api")
      .then((res) => res.json())
      .then((data) => setData(data));
  }
  
  

  React.useEffect(() => {
    callBackend()

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
      <div>
        <Navbar user={loggedIn}/>
        <p>{typeof info}</p>
      </div>
  )
}

export default App;
