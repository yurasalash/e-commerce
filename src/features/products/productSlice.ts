import {createSlice} from "@reduxjs/toolkit";

export interface Product {
    id: number;
    title: string;
    price: number;
    rating: number;
    image_url: string;
}

const initialState: Product[] = [
    {id: 1, title: 'Phone', price: 10, rating: 1, image_url: 'https://images.pexels.com/photos/336948/pexels-photo-336948.jpeg?cs=srgb&dl=pexels-solliefoto-336948.jpg&fm=jpg'},
    {id: 2, title: 'Phone', price: 10, rating: 1, image_url: 'https://images.pexels.com/photos/336948/pexels-photo-336948.jpeg?cs=srgb&dl=pexels-solliefoto-336948.jpg&fm=jpg'},
    {id: 3, title: 'Phone', price: 10, rating: 1, image_url: 'https://images.pexels.com/photos/336948/pexels-photo-336948.jpeg?cs=srgb&dl=pexels-solliefoto-336948.jpg&fm=jpg'},
    {id: 5, title: 'Phone', price: 10, rating: 1, image_url: 'https://images.pexels.com/photos/336948/pexels-photo-336948.jpeg?cs=srgb&dl=pexels-solliefoto-336948.jpg&fm=jpg'},
    {id: 6, title: 'Phone', price: 10, rating: 1, image_url: 'https://images.pexels.com/photos/336948/pexels-photo-336948.jpeg?cs=srgb&dl=pexels-solliefoto-336948.jpg&fm=jpg'},
    {id: 7, title: 'Phone', price: 10, rating: 1, image_url: 'https://images.pexels.com/photos/336948/pexels-photo-336948.jpeg?cs=srgb&dl=pexels-solliefoto-336948.jpg&fm=jpg'},
    {id: 8, title: 'Phone', price: 10, rating: 1, image_url: 'https://images.pexels.com/photos/336948/pexels-photo-336948.jpeg?cs=srgb&dl=pexels-solliefoto-336948.jpg&fm=jpg'},
    {id: 9, title: 'Phone', price: 10, rating: 1, image_url: 'https://images.pexels.com/photos/336948/pexels-photo-336948.jpeg?cs=srgb&dl=pexels-solliefoto-336948.jpg&fm=jpg'},
    {id: 10, title: 'Phone', price: 10, rating: 1, image_url: 'https://images.pexels.com/photos/336948/pexels-photo-336948.jpeg?cs=srgb&dl=pexels-solliefoto-336948.jpg&fm=jpg'},
    {id: 11, title: 'Phone', price: 10, rating: 1, image_url: 'https://images.pexels.com/photos/336948/pexels-photo-336948.jpeg?cs=srgb&dl=pexels-solliefoto-336948.jpg&fm=jpg'},
    {id: 12, title: 'Phone', price: 10, rating: 1, image_url: 'https://images.pexels.com/photos/336948/pexels-photo-336948.jpeg?cs=srgb&dl=pexels-solliefoto-336948.jpg&fm=jpg'},
]

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {}
})

export default productSlice.reducer