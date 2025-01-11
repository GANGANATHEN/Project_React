import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Signup from './components/SignupPage'
import Login from './components/LoginPage'
import Home from './components/HomePage'
import Admin from './components/AdminPage'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  )
}

export default App
