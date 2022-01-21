import { fetchWrapper } from 'helpers';

const baseUrl = ``;

const getAll = () => {
    return fetchWrapper.get(baseUrl);
}

const getById = (id) => {
    return fetchWrapper.get(`${baseUrl}/${id}`);
}

const create = (params) => {
    return fetchWrapper.post(baseUrl, params);
}

const update = (id, params) => {
    return fetchWrapper.put(`${baseUrl}/${id}`, params);
}

const _delete = (id) => {
    return fetchWrapper.delete(`${baseUrl}/${id}`);
}

export const userService = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};