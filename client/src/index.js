import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login"
import Signup from "./pages/signup"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <React.StrictMode>

    
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
    
      </BrowserRouter>

    </React.StrictMode>
  </ChakraProvider>
);


