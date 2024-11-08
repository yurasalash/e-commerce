import {useParams} from "react-router-dom";
import {selectProductById} from "../features/products/productSlice.ts";
import {useAppSelector} from "../app/hooks.ts";
import ProductInfo from "../components/productInfo/ProductInfo.tsx";

const SingleProductPage = () => {
    const {productId} = useParams();
    const id = Number(productId)
    const product = useAppSelector(state => selectProductById(state, id))

    if (!product) {
        return <h2>Product is not found</h2>
    }

    return (
        <>
            <ProductInfo product={product} />
        </>
    );
};

export default SingleProductPage;