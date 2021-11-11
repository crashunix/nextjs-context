import Router from 'next/router';
import { createContext, useEffect, useState } from 'react'
import { authService } from '../services/auth.service';

const AuthContext = createContext({
    user: null,
    login: () => {},
    logout: () => {},
    isLoggedIn: false
})

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const localUser = JSON.parse(localStorage.getItem('user'));
        if (localUser) {
            setUser(JSON.parse(user))
            setIsLoggedIn(true)
        }
    }, [])

    const login = (credentials) => {
        authService.login(credentials).then(usr => {
            console.log(usr);
            setUser(usr);
            setIsLoggedIn(true);
            localStorage.setItem('user', JSON.stringify(usr));
            Router.push('/');
        });
    }

    const logout = () => {
        setUser(null);
        setIsLoggedIn(false);
        localStorage.removeItem('user');
    }

    const context = { user, logout, login, isLoggedIn }

    return (
        <AuthContext.Provider value={context}>
            { children }
        </AuthContext.Provider>
    );
}

export default AuthContext;