import { Routes, Route } from "react-router-dom"
import { AuthContextProvider } from "./contexts/AuthContext"

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
import Logout from "./components/logout/Logout"

function App() {

    return (
        <AuthContextProvider>
            <div className="bg-white">
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/forum" element={<ForumCatalogue />} />
                    <Route path="/forum/:postId" element={<ForumPostDetails />} />

                    <Route path="createpost" element={<CreatePost />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />


                    <Route path="*" element={<NotFound />} />

                </Routes>

                <Footer />
            </div >
        </AuthContextProvider>
    )
}

export default App
