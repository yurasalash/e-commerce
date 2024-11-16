import styles from './styles.module.scss'
import {Product} from "../../../product";

const CartResult = ({products}: {products: {item: Product, quantity: number}[]}) => {
    const result = products.reduce((total, product) => total + product.quantity * product.item.price, 0);

    return (
        <div className={styles.result}>
            <strong className={styles.price}>Total: {result}$</strong>
            <button className={styles.button}>Make order</button>
        </div>
    );
};

export default CartResult;