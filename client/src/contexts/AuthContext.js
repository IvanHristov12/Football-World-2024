import { createContext } from "react";

export const AuthContext = createContext({
    userId: '',
    email: '',
    username: '',
    accessToken: '',
    isAuthenticated: false,
    //password: authState.password,
    changeAuthState: (authState = {}) => null,
});