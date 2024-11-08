import styles from './CartList.module.css'
import {Cart, productRemoved} from "../../features/cart/cartSlice.ts";
import ButtonGray from "../../UI/button/buttonGray/ButtonGray.tsx";
import {useAppDispatch} from "../../app/hooks.ts";

interface Props {
    cart: Cart[],
    suma: number
}

const CartList = ({cart, suma}: Props) => {
    const dispatch = useAppDispatch()
    return (
        <>
            <h2>Your cart</h2>
            <div className={styles.cart}>
                <div className={styles.items}>
                    {cart.map(item =>
                        <div key={item.quantity} className={styles.product}>
                            <div className={styles.details}>
                                <img src={item.product.images[0]} alt="" loading={'lazy'}/>
                                <div className={styles.info}>
                                    <h3>{item.product.title}</h3>
                                    <strong>{item.product.price * item.quantity}$</strong>
                                    <span>{item.quantity}x</span>
                                </div>
                            </div>
                            <div className={styles.delete}
                                 onClick={() => dispatch(productRemoved(item.product.id))}
                            >
                                <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round"
                                          stroke-linejoin="round"/>
                                    <path d="M14 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round"
                                          stroke-linejoin="round"/>
                                    <path d="M4 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round"
                                          stroke-linejoin="round"/>
                                    <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z"
                                          stroke="#000000" stroke-width="2" stroke-linecap="round"
                                          stroke-linejoin="round"/>
                                    <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                                          stroke="#000000" stroke-width="2" stroke-linecap="round"
                                          stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                    )}
                </div>
                <div className={styles.order}>
                    <strong className={styles.suma}>Suma is: {Math.round(suma)}$</strong>
                    <ButtonGray>Order</ButtonGray>
                </div>
            </div>
        </>
    );
};

export default CartList;