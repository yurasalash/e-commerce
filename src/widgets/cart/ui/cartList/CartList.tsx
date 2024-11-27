import styles from './styles.module.scss'
import {Product} from "../../../../entities/product";
import {CartCard} from "../../../../entities/cart";

const CartList = ({products}: {products: {item: Product, quantity: number}[]}) => {
    return (
        <ul className={styles.list}>
            {products.map(product =>
                <CartCard key={product.item.id} product={product.item} quantity={product.quantity} />
            )}
        </ul>
    );
};

export default CartList;