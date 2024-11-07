import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/header/Header.tsx";
import HomePage from "./pages/HomePage.tsx";
import Footer from "./components/footer/Footer.tsx";


function App() {
    return (
        <BrowserRouter>
            <Header />
            <div className='app'>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                </div>
            </div>
            <Footer />
        </BrowserRouter>
    )
}

export default App
