import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store.ts";
import {createAppAsyncThunk} from "../../app/hooks.ts";
import axios from "axios";
import {ProductRequest, ProductState} from "./productSlice.ts";

const initialState: ProductState = {
    products: [],
    status: 'idle',
    error: null,
}

export const fetchProductsByCategory = createAppAsyncThunk('products/fetchProducts',
    async (category: string) => {
        const response = await axios.get<ProductRequest>('https://dummyjson.com/products/category/' + category)
        return response.data
})

export const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchProductsByCategory.pending, state => {
                state.status = 'pending'
            })
            .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
                state.status = 'success'
                state.products = action.payload.products
            })
            .addCase(fetchProductsByCategory.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message ?? 'Unknown error'
            })
    }
})

export default categoriesSlice.reducer

export const selectAllProductsByCategory = (state: RootState) => state.categories.products

export const selectCategoryStatus = (state: RootState) => state.categories.status
export const selectCategoryError = (state: RootState) => state.categories.error