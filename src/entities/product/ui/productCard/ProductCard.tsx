import styles from './styles.module.scss'
import {Product} from "../../model/types.ts";
import {Link} from "react-router-dom";

const ProductCard = ({product}: {product: Product}) => {
    return (
        <li className={styles.item}>
            <Link to={`/products/${product.id}`} className={styles.image}>
                <img src={product.images[0]} alt="" />
            </Link>
            <Link to={`/products/${product.id}`} className={styles.title}>
                <h3>{product.title.length > 20 ? `${product.title.slice(0, 20)}...` : product.title}</h3>
            </Link>
            <strong className={styles.price}>{product.price}$</strong>
        </li>
    );
};

export default ProductCard;