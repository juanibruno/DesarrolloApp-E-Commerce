import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { shopApi } from './services/shop'
import cartReducer from '../features//cart/cartSlice'


export const store = configureStore({

    reducer: {
        counter: counterReducer,
        cart: cartReducer,
        [shopApi.reducerPath]: shopApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware),
})

setupListeners(store.dispatch)