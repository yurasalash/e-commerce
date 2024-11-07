import styles from './CartList.module.css'
import {Cart} from "../../features/cart/cartSlice.ts";

interface Props {
    cart: Cart[],
    suma: number
}

const CartList = ({cart, suma}: Props) => {
    return (
        <>
            <h2>Your cart</h2>
            <div className={styles.cart}>
                <div className={styles.items}>
                    {cart.map(item =>
                        <div key={item.id} className={styles.product}>
                            <img src={item.product.image_url} alt="" loading={'lazy'} />
                            <div className={styles.info}>
                                <h3>{item.product.title}</h3>
                                <strong>{item.product.price * item.quantity}$</strong>
                                <span>{item.quantity}x</span>
                            </div>
                        </div>
                    )}
                </div>
                <div className={styles.order}>
                    <strong className={styles.suma}>Suma is: {suma}$</strong>
                    <button>Order</button>
                </div>
            </div>
        </>
    );
};

export default CartList;