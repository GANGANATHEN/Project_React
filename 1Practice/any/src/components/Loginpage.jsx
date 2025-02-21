// import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Loginpage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || []
    const user = users.find((u)=>u.username === username && u.password === password)
    if(user){
      if(user.role === "admin"){
        navigate("/admin")
      }else{
        navigate("/home")
      }
    }else{
      alert("Invalid Credentials")
    }
  }
  return (
    <div>
      <h2>Login Page</h2>
      <label>UserName </label>
      <input 
        type="text" 
        placeholder="Username"
        onChange={(e)=>setUsername(e.target.value)}/> <br /> <br />
      <label>Password </label>
      <input 
        type="password" 
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}/> <br /> <br />
      <button onClick={(handleLogin)}>Login</button>
      <button style={{marginLeft:"20px"}} onClick={()=>navigate("/")}>Sign UP</button>
    </div>
  )
}

export default Loginpage