import {useAppSelector} from "../app/hooks.ts";
import {getCart} from "../features/cart/cartSlice.ts";
import CartList from "../components/cartList/CartList.tsx";


const CartPage = () => {
    const cart = useAppSelector(getCart)
    const suma = cart.reduce((acc, item) => acc + item.quantity * item.product.price, 0);

    if (cart.length === 0) {
        return <h1 style={{textAlign: 'center', marginTop: 100}}>Cart is empty</h1>;
    }

    return (
        <>
            <CartList cart={cart} suma={suma} />
        </>
    );
};

export default CartPage;