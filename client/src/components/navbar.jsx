import { Button, Input, InputRightElement, Kbd, InputGroup, IconButton, Tag } from "@chakra-ui/react"
import React from 'react'
import { useState } from "react"
import './navbar.css'
import { SearchIcon } from '@chakra-ui/icons'
import { login, createUser } from "../firebase/auth"


function Navbar() {

    const [job, updateJob] = useState('');
    
    // HANDLE SUBMIT
    const handleSubmit = (e) => {
        e.preventDefault();
        window.alert(job);
        document.getElementById("searchJob").value = "";
    }

    const loginRedirect = () => {
        alert('')
    }

    return (
        <div className="navbar-container">
            
            <form className="navbar" onSubmit={handleSubmit}>
                {/* TITLE */}
                <Tag fontSize="1.25vmax" id="Name">Name here</Tag>

                {/* SEARCH BAR */}
                <InputGroup>
                    <InputRightElement fontSize="1.25vmax" marginRight="3%" pointerEvents='none' children={<Kbd>Enter</Kbd>} />
                    <Input marginLeft="10%" fontSize="1vmax" className="input" id="searchJob" onChange={(e) => updateJob(e.target.value)} variant='outline' placeholder='Search for a Job' />
                </InputGroup>
                
                <IconButton type="submit" marginRight="8%" aria-label='Search database' icon={<SearchIcon />} />

                {/* LOGIN AND SIGNUP */}
                <Button fontSize="1vmax" paddingRight="2%" paddingLeft="2%" onClick={loginRedirect} id="login">Login</Button>
                <Button fontSize="1vmax" paddingRight="2%" paddingLeft="2%" id="signup">Sign Up</Button>
            </form> 
            
        </div>
    )
}

export default Navbar;