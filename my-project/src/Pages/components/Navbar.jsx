import { Link, useNavigate } from 'react-router-dom';
import { isLoggedIn, logout } from '../../utils/auth';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // cette fonction doit supprimer le user
    navigate('/login');
  };

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          e-Learning
        </Link>

        <div className="space-x-4 text-sm">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Accueil</Link>
          {isLoggedIn() && (
            <>
              <Link to="/mes-cours" className="text-gray-700 hover:text-blue-600">Mes Cours</Link>
              <Link to="/profil" className="text-gray-700 hover:text-blue-600">Profil</Link>
              <button
                onClick={handleLogout}
                className="text-red-600 hover:underline ml-4"
              >
                Déconnexion
              </button>
            </>
          )}
          {!isLoggedIn() && (
            <>
              <Link to="/login" className="text-gray-700 hover:text-blue-600">Se connecter</Link>
              <Link to="/register" className="text-gray-700 hover:text-blue-600">Créer un compte</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
