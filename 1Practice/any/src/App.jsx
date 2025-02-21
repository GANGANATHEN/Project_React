import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Signuppage from "./components/Signuppage"
import Loginpage from "./components/Loginpage"
import Adminpage from "./components/Adminpage"
import Homepage from "./components/Homepage"
import Admindetails from "./components/Admindetails"
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signuppage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/admin" element={<Adminpage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/apass" element={<Admindetails />} />
      </Routes>
    </Router>
  )
}

export default App
