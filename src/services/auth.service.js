// import { fetchWrapper } from "../helpers/fetch-wrapper";

import { api } from "./api";

const baseUrl = `/auth`;

const signin = ({ username, password }) => {
    console.log('signin');
    return api.post(`${baseUrl}/signin`, { username, password });
}

const signup = async ({ username, name, email, password }) => {
    return await api.post(`/users`, { username, name, email, password });
}

const refreshToken = (refreshToken) => {
    console.log('refresh-token');
    return api.post(`${baseUrl}/refresh-token`, { refreshToken });
}

const me = () => {
    return api.get(`${baseUrl}/me`);
}

const create = (credentials) => {
    return api.post(`${baseUrl}/signup`, credentials);
}

export const authService = {
    signin,
    signup,
    me,
    create,
    refreshToken
};