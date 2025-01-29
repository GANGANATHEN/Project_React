import AddUserForm from './forms/AddUserForm.jsx'
import UserTable from './tables/UserTable.jsx'
import { useState } from 'react'

function App() {

    const usersData = [
      { id: 1, name: 'Tania', username: 'floppydiskette' },
      { id: 2, name: 'Craig', username: 'siliconeidolon' },
      { id: 3, name: 'Ben', username: 'benisphere' },
    ]
    const addUser = (user) => {
      user.id = users.length + 1
      setUsers([...users, user])
    }
    const deleteUser = (id) => {
      setUsers(users.filter((user) => user.id !== id))
    }
    const [users, setUsers] = useState(usersData)
  return (
    <>
      <div className="container">
        <h1>CRUD App with Hooks</h1>
        <div className="flex-row">
          <div className="flex-large">
            <h2>Add user</h2>
            <AddUserForm addUser={addUser}/>
          </div>
          <div className="flex-large">
            <h2>View user</h2>
            <UserTable deleteUser={deleteUser} users={users}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
