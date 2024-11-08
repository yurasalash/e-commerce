import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store.ts";
import {Product} from "../products/productSlice.ts";

export interface Cart {
    product: Product;
    quantity: number;
}

type UpdateCart = Pick<Cart, 'product' | 'quantity'>

const initialState: Cart[] = []

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        productsAdded(state, action: PayloadAction<UpdateCart>) {
            const {product, quantity} = action.payload
            const prod = state.find(item => item.product.id == product.id)
            if (prod) {
                prod.quantity = quantity
            } else {
                state.push({product, quantity})
            }
        },
        productRemoved(state, action: PayloadAction<number>) {
            const id = action.payload
            state = state.filter(item => item.product.id != id)
        }
    }
})

export default cartSlice.reducer

export const {productsAdded, productRemoved} = cartSlice.actions

export const getCart = (state: RootState) => state.cart