// auth.js
import CryptoJS from 'crypto-js';


export const getUsers = () => {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : [];
};

export const saveUser = (email, password) => {
  const users = JSON.parse(localStorage.getItem('users') || '[]');

  const exists = users.some((u) => u.email === email);
  if (exists) return false;

  const hashedPassword = CryptoJS.SHA256(password).toString();
  users.push({ email, password: hashedPassword });

  localStorage.setItem('users', JSON.stringify(users));
  return true;
};


export const login = (email, password) => {
  const users = getUsers();
  const found = users.find(u => u.email === email && u.password === password);
  if (found) {
    localStorage.setItem('user', JSON.stringify({ email }));
    return true;
  }
  return false;
};

export const isLoggedIn = () => {
  return !!localStorage.getItem('user');
};

export const logout = () => {
  localStorage.removeItem('user');
};
