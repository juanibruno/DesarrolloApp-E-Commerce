import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shopApi = createApi ({
    reducerPath:"shopApi",
    baseQuery:fetchBaseQuery({baseUrl:"https://desarrollo-app-8eab9-default-rtdb.firebaseio.com"}),
    endpoints:(builder) => ({
        getProducts: builder.query({
            query: () => "/products.json"
        })
    })
})

export const {useGetProductsQuery} = shopApi