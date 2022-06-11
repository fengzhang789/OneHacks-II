import Navbar from "./components/navbar"
import React from "react"


function App() {
  const [info, setData] = React.useState({message: "Processing..."});
  
  function callBackend() {
      fetch("http://localhost:5000/api", {info: "message"})
      .then((res) => {
      return res.json()
      })
      
      .then((data) => setData(data));
  }
  
  callBackend()

  return (
      <div>
        <Navbar />
        <p>{info.message}</p>
      </div>
  )
}

export default App;
