import styles from './styles.module.scss'
import {useParams} from "react-router-dom";
import {useGetProductByIdQuery} from "../../../entities/product/api/productApi.ts";
import {ProductInfo, ProductReviews} from "../../../widgets/product";

const Product = () => {
    const {productId} = useParams()
    const product_id = Number(productId)
    const {data, isLoading} = useGetProductByIdQuery(product_id)

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    return (
        <>
            {data && <div className={styles.product}>
                <ProductInfo product={data} />
                <ProductReviews product={data} />
            </div>}
        </>
    );
};

export default Product;