import { destroyCookie, parseCookies, setCookie } from "nookies";
import { api } from "../services/api";
import { authService } from "../services/auth.service";
import { isTokenExpired } from "../util/auth";

export default function withAuth(func) {
    return async (ctx) => {
        const { ['pb.token']: token, ['pb.refresh-token']: refreshToken } = parseCookies(ctx);
        if (!token || isTokenExpired(token)) {
            if(refreshToken) {
                await authService.refreshToken(refreshToken).then((res) => {
                    console.log(res.data.token, res.data.refreshToken.id);
                    setCookie(ctx, 'pb.token', res.data.token, {
                        maxAge: 30 * 24 * 60 * 60, // 30 dias
                        path: '/'
                    });
                    setCookie(ctx, 'pb.refresh-token', res.data.refreshToken.id, {
                        maxAge: 30 * 24 * 60 * 60, // 30 dias
                        path: '/'
                    });
                    api.defaults.headers['Authorization'] = `Bearer ${token}`;
                }).catch(err => {
                    console.log(err);
                });
            } else {
                return {
                    redirect: {
                        destination: '/',
                        permanent: false
                    }
                }
            }
        }

        return func(ctx)
    }
}