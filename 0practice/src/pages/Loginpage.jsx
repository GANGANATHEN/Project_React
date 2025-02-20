import React, { use } from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Loginpage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const handleLoginpage = () => {
      const users = JSON.parse(localStorage.getItem("users")) || []
      const user = users.find(
        (u) => u.username === username && u.password === password 
      )
      if(user){
        if(user.role === "admin"){
          navigate("/admin")
        }else{
          navigate("/home")
        }
      }else{
        alert("Invalid user")
      }
    }
  return (
    <div>
        <h1>Login Page</h1>
        <label>User Name  </label>
        <input 
        type="text" 
        placeholder="Enter your name"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}/><br /><br />
        <label>Password  </label>
        <input 
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e)=> setPassword(e.target.value)} /><br /><br />
        <button onClick={handleLoginpage}>Login</button>
        <button style={{ marginLeft: "20px" }} onClick={()=>navigate("/")}>Signup</button>
    </div>
  )
}

export default Loginpage