// import { fetchWrapper } from "../helpers/fetch-wrapper";

import { api } from "./api";
import { getApiClient } from "./axios";

const baseUrl = `http://localhost:4000`;

const create = ({ title, content }) => {
    return api.post(`${baseUrl}/pages`, { title, content });
}

const getBySlug = (slug) => {
    console.log("getBySlug");
    return api.get(`${baseUrl}/pages/${slug}`);
}

export const pagesService = {
    create,
    getBySlug,
};