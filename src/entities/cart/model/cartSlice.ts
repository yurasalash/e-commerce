import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Product} from "../../product";
import {RootState} from "../../../app/appStore.ts";

interface State {
    products: {
        item: Product;
        quantity: number;
    }[]
}

const initialState: State = {
    products: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const product = state.products.find(product => product.item.id === action.payload.id)
            if (!product) {
                state.products.push({item: action.payload, quantity: 1})
            }
        },
        changeQuantity: (state, action: PayloadAction<{id: number, quantity: number}>) => {
            const {id, quantity} = action.payload
            if (!quantity) {
                state.products = state.products.filter(product => product.item.id !== id)
            }
            const product = state.products.find(product => product.item.id === id)
            if (product) {
                product.quantity = quantity
            }
        }
    }
})

export default cartSlice.reducer;
export const {addToCart, changeQuantity} = cartSlice.actions;

export const selectCartList = (state: RootState) => state.cart.products
export const selectCartLength = (state: RootState) => state.cart.products.length
