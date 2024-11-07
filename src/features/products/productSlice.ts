import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store.ts";

export interface Product {
    id: string;
    title: string;
    price: number;
    rating: number;
    image_url: string;
}

const initialState: Product[] = [
    {id: '1', title: 'Phone', price: 10, rating: 1, image_url: 'https://images.pexels.com/photos/336948/pexels-photo-336948.jpeg?cs=srgb&dl=pexels-solliefoto-336948.jpg&fm=jpg'},
    {id: '2', title: 'Pavlo', price: 20, rating: 1, image_url: 'https://images.pexels.com/photos/336948/pexels-photo-336948.jpeg?cs=srgb&dl=pexels-solliefoto-336948.jpg&fm=jpg'},
    {id: '3', title: 'Pasha', price: 30, rating: 1, image_url: 'https://images.pexels.com/photos/336948/pexels-photo-336948.jpeg?cs=srgb&dl=pexels-solliefoto-336948.jpg&fm=jpg'},
    {id: '5', title: 'Pukalo', price: 40, rating: 1, image_url: 'https://images.pexels.com/photos/336948/pexels-photo-336948.jpeg?cs=srgb&dl=pexels-solliefoto-336948.jpg&fm=jpg'},
    {id: '6', title: 'Phone', price: 50, rating: 1, image_url: 'https://images.pexels.com/photos/336948/pexels-photo-336948.jpeg?cs=srgb&dl=pexels-solliefoto-336948.jpg&fm=jpg'},
    {id: '7', title: 'Phone', price: 60, rating: 1, image_url: 'https://images.pexels.com/photos/336948/pexels-photo-336948.jpeg?cs=srgb&dl=pexels-solliefoto-336948.jpg&fm=jpg'},
    {id: '8', title: 'Phone', price: 70, rating: 1, image_url: 'https://images.pexels.com/photos/336948/pexels-photo-336948.jpeg?cs=srgb&dl=pexels-solliefoto-336948.jpg&fm=jpg'},
    {id: '9', title: 'Phone', price: 80, rating: 1, image_url: 'https://images.pexels.com/photos/336948/pexels-photo-336948.jpeg?cs=srgb&dl=pexels-solliefoto-336948.jpg&fm=jpg'},
    {id: '10', title: 'Phone', price: 90, rating: 1, image_url: 'https://images.pexels.com/photos/336948/pexels-photo-336948.jpeg?cs=srgb&dl=pexels-solliefoto-336948.jpg&fm=jpg'},
    {id: '11', title: 'Phone', price: 100, rating: 1, image_url: 'https://images.pexels.com/photos/336948/pexels-photo-336948.jpeg?cs=srgb&dl=pexels-solliefoto-336948.jpg&fm=jpg'},
    {id: '12', title: 'Phone', price: 100, rating: 1, image_url: 'https://images.pexels.com/photos/336948/pexels-photo-336948.jpeg?cs=srgb&dl=pexels-solliefoto-336948.jpg&fm=jpg'},
]

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {}
})

export default productSlice.reducer

export const selectAllProducts = (state: RootState) => state.products
export const selectProductById = (state: RootState, id: string) =>
    state.products.find(product => product.id === id)