import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store.ts";
import {createAppAsyncThunk} from "../../app/hooks.ts";
import axios from "axios";

export interface Product {
    id: number;
    title: string;
    price: number;
    rating: number;
    images: string[];
    description: string;
}

export interface ProductState {
    products: Product[];
    status: 'idle' | 'pending' | 'success' | 'failed';
    error: string | null;
}

const initialState: ProductState = {
    products: [],
    status: 'idle',
    error: null,
}

interface ProductRequest {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}

export const fetchProducts = createAppAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get<ProductRequest>('https://dummyjson.com/products')
    return response.data
})

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(fetchProducts.pending, state => {
                state.status = 'pending'
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'success'
                state.products = action.payload.products
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message ?? 'Unknown error'
            })
    }
})

export default productSlice.reducer

export const selectAllProducts = (state: RootState) => state.products.products
export const selectProductById = (state: RootState, id: number) =>
    state.products.products.find(product => product.id == id)

export const selectStatus = (state: RootState) => state.products.status
export const selectError = (state: RootState) => state.products.error