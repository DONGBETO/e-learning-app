import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { saveUser } from '../utils/auth';
import CryptoJS from 'crypto-js';


const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

 const handleSubmit = (e) => {
  e.preventDefault();
  if (email && password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Vérifie si l'email existe déjà
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      alert('Cet utilisateur existe déjà.');
      return;
    }

    // Hash du mot de passe
    const hashedPassword = CryptoJS.SHA256(password).toString();

    const newUser = { email, password: hashedPassword };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Compte créé avec succès ! Veuillez vous connecter.');
    navigate('/login');
  } else {
    alert('Veuillez remplir tous les champs.');
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f1f5f9] px-4">
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row w-full max-w-4xl">
        
        {/* Partie gauche */}
        <div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-10 flex flex-col justify-center items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/906/906175.png"
            alt="Digital illustration"
            className="w-32 mb-6"
          />
          <h2 className="text-2xl font-bold mb-2 text-center">One click to go all digital.</h2>
        </div>

        {/* Partie droite */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign up</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
            >
              Sign up
            </button>
          </form>

          <p className="text-sm text-gray-600 mt-6 text-center">
            Already a member?{' '}
            <Link to="/login" className="text-blue-600 hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
