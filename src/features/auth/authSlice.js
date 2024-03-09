import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    email:"",
    idToken:""
}

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setUser: (state, actions) => { 
            state = actions.payload
            console.log(state)
        }
    }
})

export const {setUser} = authSlice.actions

export default authSlice.reducer