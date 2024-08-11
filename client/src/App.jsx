import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import { AuthContext } from "./contexts/AuthContext"

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import AboutUs from "./components/aboutus/AboutUs"
import PrivacyPolicy from "./components/privacyPolicy/PrivacyPolicy"
import Footer from "./components/footer/Footer"
import NotFound from "./components/notFound/NotFound"
import ForumCatalogue from "./components/forum/ForumCatalogue"
import CreatePost from "./components/forum/createPost/createPost"
import ForumPostDetails from "./components/forum/forumDetails/ForumPostDetails"

function App() {
    // TODO: Remove this from App component
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
            <div className="bg-white">
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/forum" element={<ForumCatalogue />} />
                    <Route path="/forum/:postId" element={<ForumPostDetails />} />

                    <Route path="createpost" element={<CreatePost />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />


                    <Route path="*" element={<NotFound />} />

                </Routes>

                <Footer />
            </div >
        </AuthContext.Provider>
    )
}

export default App
