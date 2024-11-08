
import Sidebar from "../components/sidebar/Sidebar.tsx";
import {useAppSelector} from "../app/hooks.ts";
import {selectAllProducts} from "../features/products/productSlice.ts";
import ProductsList from "../components/productsList/ProductsList.tsx";


const HomePage = () => {
    const products = useAppSelector(selectAllProducts)

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