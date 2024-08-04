import Header from "./components/header/Header"
import Home from "./components/home/Home"
import { Routes, Route } from "react-router-dom"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import AboutUs from "./components/aboutus/AboutUs"
import PrivacyPolicy from "./components/privacyPolicy/PrivacyPolicy"
import Footer from "./components/footer/Footer"

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
                
            </Routes>
            
            <Footer />
        </div>
    )
}

export default App
