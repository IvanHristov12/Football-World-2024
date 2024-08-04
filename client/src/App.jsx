import { Routes, Route } from "react-router-dom"


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

function App() {
    return (

        <div className="bg-white">
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/forum" element={<ForumCatalogue />} > 
                    <Route path="createpost" element={<CreatePost />} /> 
                </Route>


                <Route path="*" element={<NotFound />} />
                
            </Routes>

            <Footer />
        </div>
    )
}

export default App
