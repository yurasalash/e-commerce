import styles from './styles.module.scss'
import {Product} from "../../../../entities/product";
import {useAppDispatch} from "../../../../app/appStore.ts";
import {addToCart} from "../../../../entities/cart/model/cartSlice.ts";

const ProductInfo = ({product}: {product: Product}) => {
    const dispatch = useAppDispatch()
    return (
        <div className={styles.info}>
            <img src={product.images[0]} alt="" loading='lazy' className={styles.image} />
            <div className={styles.details}>
                <h3 className={styles.title}>{product.title}</h3>
                <div className={styles.body}>{product.description}</div>
                <span className={styles.rating}>{product.rating}/5</span>
                <strong className={styles.price}>{product.price}$</strong>
                <button className={styles.button} onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductInfo;