import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Signup from './components/SignupPage'
import Login from './components/LoginPage'
import Home from './components/HomePage'
import Admin from './components/AdminPage'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/admin" component={Admin} />
      </Routes>
    </Router>
  )
}

export default App
