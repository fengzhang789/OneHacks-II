import { Input } from "@chakra-ui/react"
import React from 'react'
import { useState } from "react"
import Navbar from "../components/navbar"
import "../stylesheets/login.css"
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom"
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

function Signup() {
    const navigate = useNavigate()

    // SUBMIT
    const HandleSubmit = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                // const user = userCredential.user;
                navigate("/setup")
                // ...
            })
            .catch((error) => {
                alert(error);
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // ..
            });
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
    }

    const [email, updateEmail] = useState("")
    const [password, updatePassword] = useState("")

    return (
        <div className = "form-content-right">
            <Navbar />
            <form className= "form" onSubmit={HandleSubmit}>
                <h1 class="loginForm"> <b>Sign Up</b> </h1>

                {/* EMAIL */}
                <label htmlFor = "email" className="form-label"> <b>Email</b> </label>
                <br></br>
                <Input fontSize="1vmax" id="email" className="inputForm" onChange={(e) => updateEmail(e.target.value)} variant='outline' placeholder='Enter Email Here' />

                
                {/* PASSWORD */}
                <label htmlFor = "password" className="form-label"> <b>Password</b> </label>
                <br></br>
                <Input fontSize="1vmax" id="password" type="password" className="inputForm" onChange={(e) => updatePassword(e.target.value)} variant='outline' placeholder='Enter Email Here' />
                    
                
                {/* SUBMIT */}
                <Input type="submit" backgroundColor="#44c7c0" className="submitForm"/>
                
                {/* <p className="NoAccount">Don't have an account? <Link to="/signup">Sign up here</Link></p>
                <button onClick={handleLogin} class="submitButton">Sign In</button> */}
                
              </form>
          </div>
    )
}

export default Signup