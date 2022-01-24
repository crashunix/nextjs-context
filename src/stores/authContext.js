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
    signout: () => {},
    loading: false,
    error: ''
});

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const isAuthenticated = !!user;

    const { addToast } = useContext(ToastContext);

    const router = useRouter();

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

    const signin = async ({ email, password }) => {
        setLoading(true);
        await authService.signin({ email, password }).then((res) => {
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
            setError('');
            router.push('/portal');
        }).catch(err => {
            addToast('error', 'Erro', "Erro ao logar");
            setError(err.response.data.message);
        }).finally(() => {
            setLoading(false);
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
        router.push('/signin');
    }

    const context = { signin, user, isAuthenticated, signout, loading, error }

    return (
        <AuthContext.Provider value={context}>
            { children }
        </AuthContext.Provider>
    );
}

export default AuthContext;