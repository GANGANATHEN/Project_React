// import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminPage = () => {
    const navigate = useNavigate();
    const users = JSON.parse(localStorage.getItem("users")) || [];
  return (
    <div>
        <h3>Welcome Admin</h3>
        <h5>only View users data</h5>
        <div>
            {users.length > 0 ? (
                <table border="1">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            user.role === "user" ? (
                                <tr key={index}>
                                    <td>{user.username}</td>
                                    <td>{user.password}</td>
                                    <td>{user.role}</td>
                                </tr>
                            ) : null
                        ))}
                    </tbody>
                </table>
            ) : <h4>No Users
            </h4>}
        </div>
        <br /><br />
        <button onClick={()=>navigate("/home")}>Home</button>
        <button style={{marginLeft:"20px"}} onClick={()=>navigate("/")}>Sign Up</button>
    </div>
  )
}

export default AdminPage