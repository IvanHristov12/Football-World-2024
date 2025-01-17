import requester from "./requester"

const BASE_URL = 'http://localhost:3030/users';

export const login = async (email, password) => {
    const authData = await requester.post(`${BASE_URL}/login`, { email, password });

    return authData;
};

export const register = async (username, email, password) => {
    const authData = await requester.post(`${BASE_URL}/register`, { username, email, password });

    return authData;
}

export const logout = () => requester.get(`${BASE_URL}/logout`);