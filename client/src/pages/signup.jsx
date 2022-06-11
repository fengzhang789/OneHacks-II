import { Button, Input, InputRightElement, Kbd, InputGroup, IconButton, Tag } from "@chakra-ui/react"
import React from 'react'
import { useState, Link } from "react"
import { loginUser, createUser } from "../firebase/auth"
import Navbar from "../components/navbar"

function Signup() {
    // SUBMIT
    const HandleSubmit = (event) => {
        event.preventDefault();
        alert("Submitted");
        createUser(email, password);
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
    }

    const [email, updateEmail] = useState("")
    const [password, updatePassword] = useState("")

    return (
        <div className = "form-content-right">
            <Navbar />
            <form className= "form" onSubmit={HandleSubmit}>
                <h1 id="login"> Sign Up </h1>

                {/* EMAIL */}
                <label htmlFor = "email" className="form-label"> <u>Email</u> </label>
                <br></br>
                <Input fontSize="1vmax" id="email" className="input" onChange={(e) => updateEmail(e.target.value)} variant='outline' placeholder='Enter Email Here' />

                
                {/* PASSWORD */}
                <label htmlFor = "password" className="form-label"> <u>Password</u> </label>
                <br></br>
                <Input fontSize="1vmax" id="password" className="input" onChange={(e) => updatePassword(e.target.value)} variant='outline' placeholder='Enter Email Here' />
                    
                
                {/* SUBMIT */}
                <Input type="submit" />
                
                {/* <p className="NoAccount">Don't have an account? <Link to="/signup">Sign up here</Link></p>
                <button onClick={handleLogin} class="submitButton">Sign In</button> */}
                
              </form>
          </div>
    )
}

export default Signup