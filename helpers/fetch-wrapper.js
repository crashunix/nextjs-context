const get = async (url) => {
    const requestOptions = {
        method: 'GET'
    };
    return await fetch(url, requestOptions).then(handleResponse);
}

const post = async (url, body) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };
    return await fetch(url, requestOptions).then(handleResponse);
}

const put = async (url, body) => {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };
    return await fetch(url, requestOptions).then(handleResponse);
}

const _delete = async (url) => {
    const requestOptions = {
        method: 'DELETE'
    };
    return await fetch(url, requestOptions).then(handleResponse);
}


const handleResponse = (response) => {
    return response.text().then(text => {
        const data = text && JSON.parse(text);

        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

export const fetchWrapper = {
    get,
    post,
    put,
    delete: _delete
};