import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Product, ProductsApiResponse} from "../model/types.ts";
import {Filters} from "../../../shared/interfaces";


export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/products' }),
    endpoints: (builder) => ({
        getProducts: builder.query<ProductsApiResponse, Filters>({
            query: ({page, sort, order}) => {
                return {
                    url: '',
                    params: {
                        skip: (page - 1) * 20,
                        limit: 20,
                        sortBy: sort,
                        order
                    },
                };
            },
        }),
        getProductsByCategory: builder.query<ProductsApiResponse, Filters>({
            query: ({page, category, sort, order}) => {
                return {
                    url: `category/${category}`,
                    params: {
                        skip: (page - 1) * 20,
                        limit: 20,
                        order,
                        sortBy: sort,
                    }
                }
            }
        }),
        getProductsByQuery: builder.query<ProductsApiResponse, Filters>({
            query: ({page, q, sort, order}) => {
                return {
                    url: `search`,
                    params: {
                        skip: (page - 1) * 20,
                        limit: 20,
                        order,
                        sortBy: sort,
                        q
                    }
                }
            }
        }),
        getProductById: builder.query<Product, number>({
            query: (id) => `${id}`
        })
    }),
});

export const {useGetProductsQuery, useGetProductsByCategoryQuery, useGetProductByIdQuery, useGetProductsByQueryQuery} = productApi;

