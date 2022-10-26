import { createContext, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { setCookie, parseCookies } from 'nookies';

import { authService } from '../services/auth.service';
import ToastContext from './toastContext';
import { api } from '../services/api';
import { isTokenExpired } from '../util/auth';

const AuthContext = createContext({
    user: null,
    isAuthenticated: false,
    signin: ({ email, password}) => {},
    signin: ({ username, name, email, password }) => {},
    signout: () => {},
    loading: false,
});

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState();

    const [loading, setLoading] = useState(false);

    const isAuthenticated = !!user;

    const { addToast } = useContext(ToastContext);

    const router = useRouter();

    useEffect(() => {
        const { 'inari.token': token } = parseCookies();
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
        setLoading(true);
        await authService.signin({ username, password }).then((res) => {
            const { token, user, refreshToken } = res.data;
            console.log("context login", user, token);
            setCookie(undefined, 'inari.token', token, {
                maxAge: 30 * 24 * 60 * 60, // 30 dias
                path: '/'
            });
            setCookie(undefined, 'inari.refresh-token', refreshToken.id, {
                maxAge: 30 * 24 * 60 * 60, // 30 dias
                path: '/'
            });
            api.defaults.headers['Authorization'] = `Bearer ${token}`;
            setUser(user);
            router.push('/');
        }).catch(err => {
            addToast('error', 'Erro', err.response.data.message);
        }).finally(() => {
            setLoading(false);
        });
    }

    const signup = ({ username, name, email, password }) => {
        setLoading(true);
        authService.signup({ username, name, email, password }).then(res => {
            signin({ username, password });
        }).catch(err => {
            if(err.response && err.response.data) {
                // console.log(err.response);
                addToast('error', 'Erro', err.response.data.message);
            } else {
                addToast('error', 'Erro', "");
            }
        }).finally(() => {
            setLoading(false);
        });
    }

    const signout = () => {
        setUser(null);
        setCookie(undefined, 'inari.token', '', {
            maxAge: -1,
        });
        setCookie(undefined, 'inari.refresh-token', '', {
            maxAge: -1,
        });
        router.push('/signin');
    }

    const context = { signin, signup, user, isAuthenticated, signout, loading }

    return (
        <AuthContext.Provider value={context}>
            { children }
        </AuthContext.Provider>
    );
}

export default AuthContext;