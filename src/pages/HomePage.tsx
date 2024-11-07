import Slider from "../components/slider/Slider.tsx";
import Sidebar from "../components/sidebar/Sidebar.tsx";
import {useAppSelector} from "../app/hooks.ts";
import ProductsList from "../features/products/ProductsList.tsx";


const HomePage = () => {
    const products = useAppSelector(state => state.products)

    return (
        <div className="home">
            <Sidebar />
            <div>
                <ProductsList products={products} />
            </div>
        </div>
    );
};

export default HomePage;