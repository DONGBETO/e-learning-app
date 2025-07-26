import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../utils/auth';

const Navbar = ({ loggedIn, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();       // Supprime le user du localStorage
    onLogout();     // Met à jour l'état dans App.jsx
    navigate('/login'); // Redirige vers login
  };

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          e-learning
        </Link>

        <div className="space-x-4 text-sm">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Accueil</Link>
          {loggedIn ? (
            <>
              <Link to="/" className="text-gray-700 hover:text-blue-600">Mes Cours</Link>
              <button
                onClick={handleLogout}
                className="text-red-600 hover:underline ml-4"
              >
                Déconnexion
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-700 hover:text-blue-600">Sign in</Link>
              <Link to="/register" className="text-gray-700 hover:text-blue-600">Sign up</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
