import {
    createContext, useState

} from "react";

export const AuthContext = createContext({
    userId: '',
    email: '',
    username: '',
    accessToken: '',
    isAuthenticated: false,
    //password: authState.password,
    changeAuthState: (authState = {}) => null,
});

export function AuthContextProvider(props) {
    const [authState, setAuthState] = useState({});
    const changeAuthState = (state) => {
        // TODO: Implement persisted authState
        localStorage.setItem('accessToken', state.accessToken); // Needs to be improved/patched

        setAuthState(state)
    }

    const contextData = {
        userId: authState._id,
        email: authState.email,
        username: authState.username,
        accessToken: authState.accessToken,
        isAuthenticated: !!authState.email,
        //password: authState.password,
        changeAuthState,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>
    );
}