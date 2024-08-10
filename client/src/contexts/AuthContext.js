import { createContext } from "react";

export const AuthContext = createContext({
    userId: '',
    email: ``,
    accessToken: ``,
    isAuthenticated: false,
    //password: authState.password,
    changeAuthState: (authState = {}) => null,
});