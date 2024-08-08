import * as request from './requester';

const BASE_URL = 'http://localhost:3030/jsonstore/posts';

export const getAll = async () => {
    return await request.get(BASE_URL);
}

export const getOne = async (postId) => request.get(`${BASE_URL}/${postId}`);

const postAPI = {
    getAll,
    getOne
}

export default postAPI