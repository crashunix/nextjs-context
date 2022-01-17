import { createContext, useContext, useEffect, useState } from 'react'
import Router from 'next/router';
import { setCookie, parseCookies } from 'nookies';

import { authService } from '../services/auth.service';
import ToastContext from './toastContext';
import { api } from '../services/api';
import { isTokenExpired } from '../util/auth';

const AuthContext = createContext({
    user: null,
    isAuthenticated: false,
    signin: ({ username, password}) => {},
    signout: () => {},
});

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState();

    const isAuthenticated = !!user;

    const { addToast } = useContext(ToastContext);

    useEffect(() => {
        const { 'pb.token': token } = parseCookies();
        if(token) {
            authService.me().then((res) => {
                console.log();
                setUser(res.data);
            }).catch(err => {
                console.log("Erro ao logar", token);
            });
        }
    }, []);

    const signin = async ({ username, password }) => {
        await authService.signin({ username, password }).then((res) => {
            const { token, user, refreshToken } = res.data;
            console.log("context login", user, token);
            setCookie(undefined, 'pb.token', token, {
                maxAge: 30 * 24 * 60 * 60, // 30 dias
                path: '/'
            });
            setCookie(undefined, 'pb.refresh-token', refreshToken.id, {
                maxAge: 30 * 24 * 60 * 60, // 30 dias
                path: '/'
            });
            api.defaults.headers['Authorization'] = `Bearer ${token}`;
            setUser(user);
            Router.push('/portal');
        }).catch(err => {
            addToast('error', 'Erro', "Erro ao logar");
        });
    }

    const signout = () => {
        setUser(null);
        setCookie(undefined, 'pb.token', '', {
            maxAge: -1,
        });
        setCookie(undefined, 'pb.refresh-token', '', {
            maxAge: -1,
        });
        Router.push('/');
    }

    const context = { signin, user, isAuthenticated, signout }

    return (
        <AuthContext.Provider value={context}>
            { children }
        </AuthContext.Provider>
    );
}

export default AuthContext;