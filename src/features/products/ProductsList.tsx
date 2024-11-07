import styles from './Products.module.css'
import {Product} from "./productSlice.ts";
import {Link} from "react-router-dom";

const ProductsList = ({products}: {products: Product[]}) => {
    return (
        <div>
            <h2>Recommended products</h2>
            <div className={styles.list}>
                {products.map(product =>
                    <div key={product.id} className={styles.item}>
                        <Link to={'/'} className={styles.image}>
                            <img src={product.image_url} alt=""/>
                        </Link>
                        <Link className={styles.title} to={'/'}>{product.title}</Link>
                        <strong className={styles.price}>{product.price}$</strong>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductsList;