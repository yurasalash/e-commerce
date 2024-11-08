import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store.ts";
import {Product} from "../products/productSlice.ts";

export interface Cart {
    id: string;
    product: Product;
    quantity: number;
}

type UpdateCart = Pick<Cart, 'id' | 'quantity'>

const initialState: Cart[] = [
    {id: '1', product: {id: '1', title: 'Phone', price: 10, rating: 1, image_url: 'https://images.pexels.com/photos/336948/pexels-photo-336948.jpeg?cs=srgb&dl=pexels-solliefoto-336948.jpg&fm=jpg'}, quantity: 0},
    {id: '2', product: {id: '2', title: 'Phone', price: 20, rating: 1, image_url: 'https://images.pexels.com/photos/336948/pexels-photo-336948.jpeg?cs=srgb&dl=pexels-solliefoto-336948.jpg&fm=jpg'}, quantity: 0},
    {id: '3', product: {id: '3', title: 'Phone', price: 30, rating: 1, image_url: 'https://images.pexels.com/photos/336948/pexels-photo-336948.jpeg?cs=srgb&dl=pexels-solliefoto-336948.jpg&fm=jpg'}, quantity: 0},
    {id: '4', product: {id: '5', title: 'Phone', price: 40, rating: 1, image_url: 'https://images.pexels.com/photos/336948/pexels-photo-336948.jpeg?cs=srgb&dl=pexels-solliefoto-336948.jpg&fm=jpg'}, quantity: 0},
    {id: '5', product: {id: '6', title: 'Phone', price: 50, rating: 1, image_url: 'https://images.pexels.com/photos/336948/pexels-photo-336948.jpeg?cs=srgb&dl=pexels-solliefoto-336948.jpg&fm=jpg'}, quantity: 0},
    {id: '6', product: {id: '7', title: 'Phone', price: 60, rating: 1, image_url: 'https://images.pexels.com/photos/336948/pexels-photo-336948.jpeg?cs=srgb&dl=pexels-solliefoto-336948.jpg&fm=jpg'}, quantity: 0},
    {id: '7', product: {id: '8', title: 'Phone', price: 70, rating: 1, image_url: 'https://images.pexels.com/photos/336948/pexels-photo-336948.jpeg?cs=srgb&dl=pexels-solliefoto-336948.jpg&fm=jpg'}, quantity: 0},
    {id: '8', product: {id: '9', title: 'Phone', price: 80, rating: 1, image_url: 'https://images.pexels.com/photos/336948/pexels-photo-336948.jpeg?cs=srgb&dl=pexels-solliefoto-336948.jpg&fm=jpg'}, quantity: 0},
    {id: '9', product: {id: '10', title: 'Phone', price: 90, rating: 1, image_url: 'https://images.pexels.com/photos/336948/pexels-photo-336948.jpeg?cs=srgb&dl=pexels-solliefoto-336948.jpg&fm=jpg'}, quantity: 0},
    {id: '10', product: {id: '11', title: 'Phone', price: 100, rating: 1, image_url: 'https://images.pexels.com/photos/336948/pexels-photo-336948.jpeg?cs=srgb&dl=pexels-solliefoto-336948.jpg&fm=jpg'}, quantity: 0},
    {id: '11', product: {id: '12', title: 'Phone', price: 100, rating: 1, image_url: 'https://images.pexels.com/photos/336948/pexels-photo-336948.jpeg?cs=srgb&dl=pexels-solliefoto-336948.jpg&fm=jpg'}, quantity: 0},
]

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        productsAdded(state, action: PayloadAction<UpdateCart>) {
            const {id, quantity} = action.payload
            const product = state.find(item => item.product.id === id)
            if (product) {
                product.quantity = quantity
            }
        },
        productRemoved(state, action: PayloadAction<string>) {
            const id = action.payload
            const product = state.find(item => item.product.id === id)
            if (product) {
                product.quantity = 0
            }
        }
    }
})

export default cartSlice.reducer

export const {productsAdded, productRemoved} = cartSlice.actions

export const getCart = (state: RootState) => state.cart