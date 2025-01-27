import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup'; // Adjust the path as needed
import Login from './pages/Login'; // Adjust the path as needed
import Home from './pages/Home'; // Adjust the path as needed

const App = () => {
  const [auth, setAuth] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/home" element={auth ? <Home /> : <Login setAuth={setAuth} />} />
        <Route path="/" element={<Signup />} /> {/* Default to Signup page */}
        <Route path="*" element={<h2>404 - Not Found</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
