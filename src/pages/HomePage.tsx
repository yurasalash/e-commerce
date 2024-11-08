
import Sidebar from "../components/sidebar/Sidebar.tsx";
import {useAppDispatch, useAppSelector} from "../app/hooks.ts";
import {fetchProducts, selectAllProducts, selectError, selectStatus} from "../features/products/productSlice.ts";
import ProductsList from "../components/productsList/ProductsList.tsx";
import {useEffect} from "react";
import {statusChanged} from "../features/products/categoriesSlice.ts";


const HomePage = () => {
    const products = useAppSelector(selectAllProducts)
    const status = useAppSelector(selectStatus)
    const error = useAppSelector(selectError)
    const dispatch = useAppDispatch()
    const categories = [
        "beauty",
        "fragrances",
        "furniture",
        "groceries",
        "home-decoration",
        "kitchen-accessories",
        "laptops",
        "mens-shirts",
        "mens-shoes",
        "mens-watches",
        "mobile-accessories",
        "motorcycle",
        "skin-care",
        "smartphones",
        "sports-accessories",
        "sunglasses",
        "tablets",
        "tops",
        "vehicle",
        "womens-bags",
        "womens-dresses",
        "womens-jewellery",
        "womens-shoes",
        "womens-watches"
    ]

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [status, products])
    let content = <></>
    if (status === 'pending') {
        content = <h2>Loading...</h2>
    } else if (status === 'failed') {
        content = <h2>{error}</h2>
    } else if (status === 'success') {
        content = products.length ? <ProductsList products={products} /> : <h2>There is no</h2>
    }

    return (
        <div className="home">
            <Sidebar categories={categories} />
            <div>
                {content}
            </div>
        </div>
    );
};

export default HomePage;