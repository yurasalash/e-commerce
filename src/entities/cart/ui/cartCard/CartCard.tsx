import styles from './styles.module.scss'
import {Product} from "../../../product";
import {useAppDispatch} from "../../../../app/appStore.ts";
import {changeQuantity} from "../../model/cartSlice.ts";

const CartCard = ({product, quantity}: {product: Product, quantity: number}) => {
    const dispatch = useAppDispatch()

    return (
        <li className={styles.item}>
            <div className={styles.info}>
                <img src={product.images[0]} alt="" loading='lazy' className={styles.image}/>
                <div className={styles.details}>
                    <h3 className={styles.title}>{product.title}</h3>
                    <strong className={styles.price}>{product.price}</strong>
                    <div className={styles.buttons}>
                        <span
                            onClick={() => dispatch(changeQuantity({id: product.id, quantity: quantity - 1}))}>-</span>
                        <div>{quantity}</div>
                        <span
                            onClick={() => dispatch(changeQuantity({id: product.id, quantity: quantity + 1}))}>+</span>
                    </div>
                </div>
            </div>
            <span className={styles.delete}
                  onClick={() => dispatch(changeQuantity({id: product.id, quantity: 0}))}
            >
                <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="#000000" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </span>
        </li>
    );
};

export default CartCard;