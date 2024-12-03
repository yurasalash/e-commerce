import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import cart from '../entities/cart/model/cartSlice.ts'
import {productApi} from "../entities/product/api/productApi.ts";

const rootReducer = combineReducers({
    cart,
    [productApi.reducerPath]: productApi.reducer,
})

export const appStore = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(productApi.middleware),
    preloadedState: loadFromLocalStorage()
});

function saveToLocalStorage(state: RootState){

    try{
        const serialState = JSON.stringify(state)
        localStorage.setItem("reduxStore",serialState)
    }catch(e){
        console.warn(e);
    }
}

function loadFromLocalStorage(){

    try{
        const serialisedState = localStorage.getItem("reduxStore");
        if(serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    }catch(e){
        console.warn(e);
        return undefined;
    }
}

appStore.subscribe(()=>saveToLocalStorage(appStore.getState()));

export type RootState = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()