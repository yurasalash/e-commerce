import {useAppDispatch, useAppSelector} from "../app/hooks.ts";
import ProductsList from "../components/productsList/ProductsList.tsx";
import {useEffect} from "react";
import {
    fetchProductsByCategory,
    selectAllProductsByCategory,
    selectCategoryError, selectCategoryStatus
} from "../features/products/categoriesSlice.ts";
import {useParams} from "react-router-dom";


const CategoryPage = () => {
    const {category} = useParams()
    const products = useAppSelector(selectAllProductsByCategory)
    const status = useAppSelector(selectCategoryStatus)
    const error = useAppSelector(selectCategoryError)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (status === 'idle' && category) {
            dispatch(fetchProductsByCategory(category));
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
        <div className="categorie">
            <h2 style={{fontSize: 40, fontWeight: 700, marginBottom: 20, textTransform: 'uppercase'}}>{category}</h2>
            {content}
        </div>
    );
};

export default CategoryPage;