import requester from "./requester"

const BASE_URL = 'http://localhost:3030/data/comments'

const create = (postId, text) => requester.post(BASE_URL, { postId, text });

const getAll = (postId) => {
    const params = new URLSearchParams({
        where: `postId="${postId}"`
    });

    return requester.get(`${BASE_URL}?${params.toString()}`);

}

const commentsAPI = {
    create,
    getAll
};

export default commentsAPI;