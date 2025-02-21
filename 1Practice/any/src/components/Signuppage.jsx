// import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signuppage = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("user")
    const navigate = useNavigate()

    const handleSignup = () => {
        const users = JSON.parse(localStorage.getItem("users")) || []
        users.push({username, password, role})
        localStorage.setItem("users", JSON.stringify(users))
        alert("User registered successfully")
        navigate("/login")
    }
  return (
    <div>
        <h2>SignUp Page</h2>
        <label>Username </label>
        <input
         type="text"
         placeholder="Username"
         onChange={(e)=>setUsername(e.target.value)} /> <br /><br />
        <label>Password </label>
        <input 
         type="password"
         placeholder="Password"
         onChange={(e)=>setPassword(e.target.value)} /> <br /> <br />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
        </select>
        <button style={{marginLeft : "20px"}} onClick={handleSignup}>Sign Up</button>
        <button 
            style={{marginLeft : "20px"}} 
            onClick={()=>navigate("/login")}>Login</button>

    </div>
  )
}

export default Signuppage