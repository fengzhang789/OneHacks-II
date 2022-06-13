import React from 'react'
import { getAuth,  onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { Button, Input, Text } from "@chakra-ui/react"
import "../stylesheets/setup.css"
import { addToDB } from '../firebase/database';
import { useNavigate } from 'react-router-dom';

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



function Setup() {

    const [user, setStatus] = React.useState(null);
    const [selectedChoice, setChoice] = React.useState(null);
    const [uid, setUID] = React.useState(null);
    const [firstName, setFName] = React.useState(null);
    const [lastName, setLName] = React.useState(null);

    const navigate = useNavigate();
    
    React.useEffect(() => {
       //CHECK IF USER IS LOGGED IN
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setStatus(true);
                setUID(user.uid);
            } 
            else {
                setStatus(false);
            }
        });
    }, [])

    //CHOICE CLICK
    const Handleclick = (e) => {
        console.log(e.target)
        //UNHIGHLIGHTS ALL
        for (let i=0; i < document.getElementsByClassName(e.target.className).length; i++) {
            document.getElementsByClassName(e.target.className)[i].style.backgroundColor = "#e2e8f0"
        }
        //HIGHLIGHTS ONE SELECTED
        e.target.style.backgroundColor = "#44c7c0";
        setChoice(e.target.id)
    }

    //HANDLE SUBMIT
    const HandleSubmit = () => {
        if (firstName === null || lastName === null) {
            alert("You must enter your name")
        }

        else if (selectedChoice === "employer" || selectedChoice === "student" ) {
            console.log(firstName, lastName)
            console.log(uid)

            document.getElementById("FName").value = ""
            document.getElementById("LName").value = ""
            
            //ADDING TO DATABASE
            addToDB("user data", uid, {
                type: selectedChoice,
                user: uid,
                firstName: firstName,
                lastName: lastName
            })
            navigate("/profile")
            
        }
        
        else {
            alert("You must select a choice before continuing!")
        }
    }


    return (
        <>
            {user ? (
                // LOGGED IN
                <>
                <Text color="#44c7c0" id="welcometext" className="choice">Welcome! We're happy to have you. We just have a few questions to start...</Text>

                <h1 className="choice">1. How are you using our platform?</h1>
                <div className="btncontainer">
                    <Button fontSize="2vmax" id="employer" padding="2.5% 3%" className="btnchoice" onClick={(e) => Handleclick(e)}>Employer</Button>
                    <Button fontSize="2vmax" id="student" padding="2.5% 3%" className="btnchoice" onClick={(e) => Handleclick(e)}>Student</Button>
                </div>


                <h1 className="choice">2. What is your name?</h1>
                <div>
                    <Input fontSize="1.5vmax" padding="2.5% 3%" id="FName" className="namesField" placeholder="First Name" onChange={(e) => setFName(e.target.value)}/>
                    <Input fontSize="1.5vmax" padding="2.5% 3%" id="LName" className="namesField" placeholder='Last Name' onChange={(e) => setLName(e.target.value)}/>
                </div>


                <div id="submitButtonContainer">
                    <Button fontSize="2vmax" bg="#44c7c0" id="submitButton" onClick={HandleSubmit}>Submit</Button>
                </div>
                </>
                

            ) : (
                // LOGGED OUT
                <p>You must first sign up to view this page!</p>
            )}
        </>
        
        
    )
}

export default Setup