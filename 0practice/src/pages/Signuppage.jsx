import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Signuppage = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("user");
    const navigate = useNavigate()

    const handleSignup = () => {
        const users = JSON.parse(localStorage.getItem("users")) || []
        users.push({username, password, role})
        localStorage.setItem("users", JSON.stringify(users))
        alert("Signup successfull")
        navigate("/login")
    }
  return (
    <div>
        <h1>Signup Page</h1>
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

        <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
        </select> <br /><br />
        <button onClick={handleSignup}>Signup</button>
    </div>
  )
}

export default Signuppage