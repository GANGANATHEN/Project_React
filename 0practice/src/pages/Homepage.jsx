import React from 'react'
import { useNavigate } from "react-router-dom";

const Homepage = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h1>Home Page</h1>
        <button onClick={()=>navigate("/login")}>Login</button>
        <button onClick={()=>navigate("/")}>Signup</button>
    </div>
    
  )
}

export default Homepage