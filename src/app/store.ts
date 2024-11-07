import {configureStore} from "@reduxjs/toolkit";
import products from '../features/products/productSlice.ts'


export const store = configureStore({
    reducer: {
        products
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store