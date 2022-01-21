// import { fetchWrapper } from "../helpers/fetch-wrapper";

import { api } from "./api";

const baseUrl = ``;

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