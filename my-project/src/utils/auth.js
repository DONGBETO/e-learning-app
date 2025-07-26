
export const isLoggedIn = () => {
    return !!localStorage.getItem('user');
}

export const login = (email) => {
    localStorage.setItem('user', JSON.stringify({email}));
}

export const logout = () => {
    localStorage.removeItem('user');
}