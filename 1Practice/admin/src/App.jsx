import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import SignupPage from './components/SignupPage.jsx'
import Loginpage from './components/Loginpage.jsx'
import HomePage from './components/HomePage.jsx'
import AdminPage from './components/AdminPage.jsx'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupPage/>} />
        <Route path="/login" element={<Loginpage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/admin" element={<AdminPage/>} />
      </Routes>
    </Router>
  )
}

export default App
