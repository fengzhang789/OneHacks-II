import { Button, Input, InputRightElement, Kbd, InputGroup } from "@chakra-ui/react"
import React from 'react'
import { useState } from "react"
import './navbar.css'

function Navbar() {

    const [job, updateJob] = useState('');
    
    // HANDLE SUBMIT
    const handleSubmit = (e) => {
        e.preventDefault();
        window.alert(job);
        document.getElementById("searchJob").value = "";
    }

    return (
        <div className="navbar-container">
            
            <form className="navbar" onSubmit={handleSubmit}>
                {/* SEARCH BAR */}
                <InputGroup>
                    <InputRightElement fontSize="1.25vmax" marginRight="3%" pointerEvents='none' children={<Kbd>Enter</Kbd>} />
                    <Input fontSize="1vmax" className="input" id="searchJob" onChange={(e) => updateJob(e.target.value)} variant='outline' placeholder='Search for a Job' />
                </InputGroup>
                
                <Button fontSize="1vmax" paddingRight="2%" paddingLeft="2%" className="submit" type="submit">Search</Button>

                {/* LOGIN AND SIGNUP */}
                <Button fontSize="1vmax" paddingRight="2%" paddingLeft="2%" id="login">Login</Button>
                <Button fontSize="1vmax" paddingRight="2%" paddingLeft="2%" id="signup">Sign Up</Button>
            </form> 
            
        </div>
    )
}

export default Navbar;