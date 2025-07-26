import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Home from './Pages/Home';
import CourseDetail from './Pages/CourseDetail';
import Navbar from './Pages/components/Navbar';
import { isLoggedIn } from './utils/auth';

function App() {
  const loggedIn = isLoggedIn(); // lire une seule fois

  return (
    <>
      <Navbar />
      <Routes key={loggedIn ? 'auth' : 'guest'}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={loggedIn ? <Home /> : <Navigate to="/login" />} />
        <Route path="/courses/:id" element={loggedIn ? <CourseDetail /> : <Navigate to="/login" />} />
      </Routes>
    </>
  );
}

export default App;
