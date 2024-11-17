import styles from './styles.module.scss'
import {Product} from "../../../product";
import {roundToDecimal} from "../../../../shared/helpers/roundToDecimal.ts";

const CartResult = ({products}: {products: {item: Product, quantity: number}[]}) => {
    const result = products.reduce((total, product) => total + product.quantity * product.item.price, 0);

    return (
        <div className={styles.result}>
            <strong className={styles.price}>Total: {roundToDecimal(result)}$</strong>
            <button className={styles.button}>Make order</button>
        </div>
    );
};

export default CartResult;