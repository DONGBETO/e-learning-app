import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../utils/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      login(email);
      navigate('/');
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
            alt="Login illustration"
            className="w-32 mb-6"
          />
          <h2 className="text-2xl font-bold mb-2 text-center">Welcome back!</h2>
          <p className="text-sm text-center opacity-80">Connect to home page</p>
        </div>

        {/* Partie droite */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign in</h2>
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
              Login
            </button>
          </form>

          <p className="text-sm text-gray-600 mt-6 text-center">
            Not registered?{' '}
            <Link to="/register" className="text-blue-600 hover:underline">Create an account</Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;
