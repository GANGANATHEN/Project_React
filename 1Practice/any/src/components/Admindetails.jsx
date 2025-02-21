// import React from 'react'
import { useNavigate } from 'react-router-dom'

const Admindetails = () => {
    const navigate = useNavigate()
    const users = JSON.parse(localStorage.getItem("users")) || []
  return (
    <div>
        <h2>Admin Details</h2>
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
                user.role === "admin")
                .map(user=>(
                    <tr key={user}>
                        <td>{user.username}</td>
                        <td>{user.password}</td>
                        <td>{user.role}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <button onClick={()=>navigate('/admin')}>Admin</button>
    </div>
  )
}

export default Admindetails