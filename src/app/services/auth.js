import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({

    reducerPath:"auth",
    baseQuery:fetchBaseQuery({baseUrl:"https://identitytoolkit.googleapis.com/v1/"}),
    endpoints:(builder) => ({
        register:builder.mutation({
            query:(user) => ({
                url:"accounts:signUp?key=AIzaSyCCT9pLZ3Px_8ClCKAbgpYaU6SDJoEroO4",
                method:"POST",
                body:user
            })
        })
    })
})

export const {useRegisterMutation} = authApi