import styles from './ProductInfo.module.css'
import {Product} from "../../features/products/productSlice.ts";
import {useState} from "react";
import {useAppDispatch} from "../../app/hooks.ts";
import {productsAdded} from "../../features/cart/cartSlice.ts";

const ProductInfo = ({product}: {product: Product}) => {
    const [count, setCount] = useState(0)
    const dispatch = useAppDispatch()

    const onAddCartClick = () => {
        dispatch(productsAdded({id: product.id, quantity: count}))
        setCount(0)
    }

    return (
        <div className={styles.info}>
            <div className={styles.slider}>
                <img src={product.image_url} alt="" loading='lazy' />
            </div>
            <div className={styles.details}>
                <h2 className={styles.title}>{product.title}</h2>
                <div className={styles.rating}>{product.rating}/5</div>
                <strong className={styles.price}>{product.price}$</strong>
                <div className={styles.buttons}>
                    <div className={styles.change}>
                        <button onClick={() => setCount(prev => prev + 1)}>+</button>
                        <span>{count}</span>
                        <button onClick={() => setCount(prev => Math.max(0, prev - 1))}>-</button>
                    </div>
                    <button className={styles.add} onClick={onAddCartClick}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;