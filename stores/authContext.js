import Router from 'next/router';
import { createContext, useContext, useEffect, useState } from 'react'
import { authService } from '../services/auth.service';
import ToastContext from './toastContext';

const AuthContext = createContext({
    user: null,
    login: () => {},
    logout: () => {},
    isLoggedIn: false
})

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { addToast } = useContext(ToastContext);

    useEffect(() => {
        const localUser = JSON.parse(localStorage.getItem('user'));
        if (localUser) {
            setUser(JSON.parse(user))
            setIsLoggedIn(true)
        }
    }, [])

    const login = (credentials) => {
        setIsLoading(true);
        authService.login(credentials).then(usr => {
            console.log(usr);
            setUser(usr);
            setIsLoggedIn(true);
            localStorage.setItem('user', JSON.stringify(usr));
            Router.push('/');
        }).catch(error => {
            console.log(error, 'aaaaaaaaaaaaaa');
            addToast('error', 'Erro', 'Usuário não encontrado');
        }).finally(() => {
            setIsLoading(false);
        })
    }

    const logout = () => {
        setUser(null);
        setIsLoggedIn(false);
        localStorage.removeItem('user');
    }

    const context = { user, logout, login, isLoggedIn, isLoading }

    return (
        <AuthContext.Provider value={context}>
            { children }
        </AuthContext.Provider>
    );
}

export default AuthContext;