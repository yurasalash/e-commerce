import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import products from '../features/products/productSlice.ts'
import cart from '../features/cart/cartSlice.ts'
import categories from '../features/products/categoriesSlice.ts'


export const store = configureStore({
    reducer: {
        products,
        cart,
        categories
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
export type AppThunk = ThunkAction<void, RootState, unknown, Action>