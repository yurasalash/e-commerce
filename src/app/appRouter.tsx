import {createBrowserRouter} from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout.tsx";
// @ts-ignore
import './styles/index.scss'
import {Main} from "../pages/main";
import {Product} from "../pages/product";
import {Cart} from "../pages/cart";
import {Category} from "../pages/category";
import {Search} from "../pages/search";

export const appRouter = createBrowserRouter([
    {
        element: <BaseLayout />,
        errorElement: <h2>Error</h2>,
        children: [
            {
                path: '/',
                element: <Main />
            },
            {
                path: '/products/:productId',
                element: <Product />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/categories/:category',
                element: <Category />
            },
            {
                path: '/search/:q',
                element: <Search />
            }
        ]
    }
])