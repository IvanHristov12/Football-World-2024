import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/posts';

export const getAll = async () => {
    return await request.get(BASE_URL);
}

export const getOne = async (postId) => request.get(`${BASE_URL}/${postId}`);

export const create = (postData) => request.post(`${BASE_URL}`, postData);

export const remove = (postId) => request.del(`${BASE_URL}/${postId}`);

export const update = (postId, postData) => request.put(`${BASE_URL}/${postId}`, postData);

const postAPI = {
    getAll,
    getOne,
    create,
    remove,
    update
}

export default postAPI