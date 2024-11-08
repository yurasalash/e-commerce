import styles from './ProductInfo.module.css'
import {Product} from "../../features/products/productSlice.ts";
import {useState} from "react";
import {useAppDispatch} from "../../app/hooks.ts";
import {productsAdded} from "../../features/cart/cartSlice.ts";
import ChangeButtons from "../../UI/button/changeButtons/ChangeButtons.tsx";
import ButtonGray from "../../UI/button/buttonGray/ButtonGray.tsx";

const ProductInfo = ({product}: {product: Product}) => {
    const [count, setCount] = useState(0);
    const dispatch = useAppDispatch()

    const onAddCartClick = () => {
        dispatch(productsAdded({product, quantity: count}))
        setCount(0)
    }

    return (
        <div className={styles.info}>
            <div className={styles.slider}>
                <img src={product.images[0]} alt="" loading='lazy' />
            </div>
            <div className={styles.details}>
                <h2 className={styles.title}>{product.title}</h2>
                <div className={styles.rating}>{product.rating}/5</div>
                <strong className={styles.price}>{product.price}$</strong>
                <div>
                    <p>{product.description}</p>
                </div>
                <div className={styles.buttons}>
                    <ChangeButtons count={count} setCount={setCount} min={0} />
                    <ButtonGray onClick={onAddCartClick}>
                        Add to Cart
                    </ButtonGray>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;