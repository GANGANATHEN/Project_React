// import React from 'react'
import { useNavigate } from 'react-router-dom'

const Adminpage = () => {
  
  const users = JSON.parse(localStorage.getItem("users")) || []
  const navigate = useNavigate()
  return (
    <div>
      <h2>Admin Page</h2>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.filter(user=>
            user.role === "user") 
            .map(user=>(
            <tr key={user.username}>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.role}</td>
            </tr>
            )
          )}
        </tbody>
      </table>
      <button onClick={()=>navigate("/apass")}>Admin Details</button>
    </div>
  )
}

export default Adminpage