import Navbar from "./components/navbar"
import React from "react"
import Login from "./pages/login"



function App() {
  const [info, setData] = React.useState({message: "Processing..."});
  
  function callBackend() {
      fetch("http://localhost:5000/api", {info: "message"})
      .then((res) => res.json())
      .then((data) => setData(data));
  }
  
  callBackend()

  return (
      <div>
        <Navbar />
        <Login />
        <p>{info.message}</p>
      </div>
  )
}

export default App;
