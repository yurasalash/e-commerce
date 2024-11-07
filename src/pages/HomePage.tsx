
import Sidebar from "../components/sidebar/Sidebar.tsx";
import {useAppSelector} from "../app/hooks.ts";
import ProductsList from "../features/products/ProductsList.tsx";
import {selectAllProducts} from "../features/products/productSlice.ts";


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