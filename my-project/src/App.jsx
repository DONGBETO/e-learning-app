import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Home from './Pages/Home';
import CourseDetail from './Pages/CourseDetail';
import Navbar from './Pages/components/Navbar';
import { isLoggedIn } from './utils/auth';

function App() {
  const [loggedIn, setLoggedIn] = useState(isLoggedIn());

  // Écoute des changements du localStorage (ex: logout dans un autre onglet)
  useEffect(() => {
    const handleStorageChange = () => setLoggedIn(isLoggedIn());
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <>
      <Navbar onLogout={() => setLoggedIn(false)} loggedIn={loggedIn} />
      <Routes key={loggedIn ? 'auth' : 'guest'}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login onLogin={() => setLoggedIn(true)} />} />
        <Route path="/" element={loggedIn ? <Home /> : <Navigate to="/login" />} />
        <Route path="/courses/:id" element={loggedIn ? <CourseDetail /> : <Navigate to="/login" />} />
      </Routes>
    </>
  );
}

export default App;
