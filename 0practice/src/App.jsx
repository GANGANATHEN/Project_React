import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Signuppage from "./pages/Signuppage.jsx"
import Loginpage from "./pages/Loginpage.jsx"
import Adminpage from "./pages/Adminpage.jsx"
import Homepage from "./pages/Homepage.jsx"
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signuppage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/admin" element={<Adminpage />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </Router>
  )
}

export default App
