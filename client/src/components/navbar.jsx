import { Button, Input, InputRightElement, Kbd, InputGroup, IconButton, Tag } from "@chakra-ui/react"
import React from 'react'
import { useState } from "react"
import './navbar.css'
import { SearchIcon } from '@chakra-ui/icons'
import {Link} from "react-router-dom"


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
                {/* TITLE */}
                 <Tag fontSize="1.25vmax" id="nameinside"><a href="/">Name here</a></Tag>

                {/* SEARCH BAR */}
                <InputGroup>
                    <InputRightElement fontSize="1.25vmax" marginRight="3%" pointerEvents='none' children={<Kbd>Enter</Kbd>} />
                    <Input marginLeft="10%" fontSize="1vmax" className="input" id="searchJob" onChange={(e) => updateJob(e.target.value)} variant='outline' placeholder='Search for a Job' />
                </InputGroup>
                
                <IconButton type="submit" marginRight="8%" aria-label='Search database' icon={<SearchIcon />} />

                {/* LOGIN AND SIGNUP */}
                <Link to="login" fontSize="1vmax" paddingRight="2%" paddingLeft="2%" id="login"><Button>Login</Button></Link>
                <Link to="/signup" fontSize="1vmax" paddingRight="2%" paddingLeft="2%" id="signup"><Button>Sign Up</Button></Link>
            </form> 
            
        </div>
    )
}

export default Navbar;