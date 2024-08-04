import Header from "./components/header/Header"
import Home from "./components/home/Home"
import { Routes, Route } from "react-router-dom"

function App() {
    return (

        <div className="bg-white">
            <Header />
            <Home />
        </div>
    )
}

export default App
