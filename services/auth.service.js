// import { fetchWrapper } from "../helpers/fetch-wrapper";

import { api } from "./api";

const baseUrl = `http://localhost:4000/auth`;

const signin = ({ username, password }) => {
    console.log('signin');
    return api.post(`${baseUrl}/signin`, { username, password });
}

const me = () => {
    return api.get(`${baseUrl}/me`);
}

const create = (credentials) => {
    return api.post(`${baseUrl}/signup`, credentials);
}

export const authService = {
    signin,
    me,
    create
};