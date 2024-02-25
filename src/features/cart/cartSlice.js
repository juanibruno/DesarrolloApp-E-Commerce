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
        addCArtItem: (state, action) => {
            state.items = [...state.items, {...action.payload, quantity:1}]
            state.total = state.items.reduce((acc, item) => acc = acc + item.price, 0)
            console.log(state);

        },
        deleteCartItem: (state, actions) => {
            state.items = state.items.filter((item) => item.id !== actions.payload)
            state.total = state.items.reduce((acc, item) => acc = acc + item.price, 0)
        }
    }
})


export const { addCArtItem, deleteCartItem } = cartSlice.actions

export default cartSlice.reducer