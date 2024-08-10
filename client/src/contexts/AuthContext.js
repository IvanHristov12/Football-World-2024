import { createContext } from "react";

export const AuthContext = createContext({
    email: ``,
    accessToken: ``,
    isAuthenticated: false,
    //password: authState.password,
    changeAuthState: (authState = {}) => null,
});