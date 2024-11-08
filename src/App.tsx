import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/header/Header.tsx";
import HomePage from "./pages/HomePage.tsx";
import Footer from "./components/footer/Footer.tsx";
import SingleProductPage from "./pages/SingleProductPage.tsx";
import CartPage from "./pages/CartPage.tsx";
import CategoryPage from "./pages/CategoryPage.tsx";


function App() {
    return (
        <BrowserRouter>
            <div className='app'>
                <Header />
                <div className='main'>
                    <div className="container">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path='/products/:productId' element={<SingleProductPage />} />
                            <Route path='/cart' element={<CartPage />} />
                            <Route path='/products/category/:category' element={<CategoryPage />} />
                        </Routes>
                    </div>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App
