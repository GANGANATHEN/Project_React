import React from 'react'
import { useNavigate } from "react-router-dom";

const Adminpage = () => {
    const navigate = useNavigate()
    const users = JSON.parse(localStorage.getItem("users")) || []
  return (
    <>
        <h1>Admin Page</h1>
        <div>
           {users.length > 0 ? (
               <table>
                   <thead>
                       <tr>
                           <th>Username</th>
                           <th>Password</th>
                           <h1>Admin</h1>
                       </tr>
                   </thead>
                   <tbody>
                        {users.map((user, index) => (
                            user.role === "user" ? (
                                <h1>Users</h1>,
                                <tr key={index}>
                                    <td>{user.username}</td>
                                    <td>{user.password}</td>
                                    <td>{user.role}</td>
                                </tr>
                            ) : null
                        ))}
                    </tbody>
               </table>
           ) : (
               <h2>No users</h2>
           )}
        </div>
        <button onClick={()=>navigate("/home")}>Home</button>
        <button onClick={()=>navigate("/login")}>Login</button>
        <button onClick={()=>navigate("/signup")}>Signup</button>
    </>
  )
}

export default Adminpage