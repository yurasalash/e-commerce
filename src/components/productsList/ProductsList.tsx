import styles from './Products.module.css'
import {Link} from "react-router-dom";
import {Product} from "../../features/products/productSlice.ts";

const ProductsList = ({products}: {products: Product[]}) => {
    return (
        <div>
            <h2>Recommended products</h2>
            <div className={styles.list}>
                {products.map(product =>
                    <div key={product.id} className={styles.item}>
                        <Link to={`/products/${product.id}`} className={styles.image}>
                            <img src={product.images[0]} alt="" loading='lazy' />
                        </Link>
                        <Link className={styles.title} to={`/products/${product.id}`}>{product.title}</Link>
                        <strong className={styles.price}>{product.price}$</strong>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductsList;