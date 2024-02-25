import { createSlice } from "@reduxjs/toolkit";
import { loadAsync } from "expo-font";


const initialState = {
    items: [],
    total: 0
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCArtItem: (state, actions) => {
            const index = state.items.findIndex((item) => item.id === actions.payload.id)
            if (index === -1) {
                state.items = [...state.items, { ...actions.payload, quantity: 1 }]
            } else {
                state.items = state.items.map((item) => {
                    if (item.id === actions.payload.id) {
                        return { ...item, quantity: item.quantity + 1 }
                    }
                    return item
                })
            }

            state.total = state.items.reduce((acc, item) => acc = acc + item.price, 0)
            

        },
        deleteCartItem: (state, actions) => {
            state.items = state.items.filter((item) => item.id !== actions.payload)
            state.total = state.items.reduce((acc, item) => acc = acc + item.price, 0)
        }
    }
})


export const { addCArtItem, deleteCartItem } = cartSlice.actions

export default cartSlice.reducer