import React from 'react';
import ReactDOM from 'react-dom/client';
import './stylesheets/index.css';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login"
import Profile from "./pages/profile"
import Setup from './pages/setup';
import SignUp from './pages/signup';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <React.StrictMode>

    
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/setup" element={<Setup />} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
    
      </BrowserRouter>
      

    </React.StrictMode>
  </ChakraProvider>
);


