import { Button, Input, InputRightElement, Kbd, InputGroup, IconButton, Tag } from "@chakra-ui/react"
import React from 'react'
import { useState, Link } from "react"
import { loginUser, createUser } from "../firebase/auth"
import Navbar from "../components/navbar"
import '../stylesheets/login.css'

function Login() {

    const [email, updateEmail] = useState("")
    const [password, updatePassword] = useState("")

    // SUBMIT
    const HandleSubmit = (event) => {
        event.preventDefault();
        loginUser(email, password);
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
    }

    
    return (
        <div className = "form-content-right">
            <Navbar />
            <form className="form" onSubmit={HandleSubmit}>
                <h1 class="loginForm"> <b>Log In</b></h1>

                {/* EMAIL */}
                <label htmlFor = "email"  className="form-label"> <b>Email</b> </label>
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

export default Login