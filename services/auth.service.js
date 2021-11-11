import { fetchWrapper } from "../helpers/fetch-wrapper";


const baseUrl = `https://reqres.in/api`;

const login = (credentials) => {
    return fetchWrapper.post(`${baseUrl}/login`, credentials);
}

export const authService = {
    login
};