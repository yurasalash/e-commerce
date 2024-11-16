import styles from './styles.module.scss'
import {useAppSelector} from "../../../app/appStore.ts";
import {selectCartList} from "../../../entities/cart/model/cartSlice.ts";
import {CartList} from "../../../widgets/cart";
import {CartResult} from "../../../entities/cart";

const Cart = () => {
    const cart = useAppSelector(selectCartList)
    return (
        <div className={styles.cart}>
            {cart.length ?
                <div>
                    <h2 className={styles.title}>Your cart</h2>
                    <div className={styles.details}>
                        <CartList products={cart} />
                        <CartResult products={cart} />
                    </div>
                </div>
                :
                <h2 className={styles.empty}>Cart is empty</h2>}
        </div>
    );
};

export default Cart;