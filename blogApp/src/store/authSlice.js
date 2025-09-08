import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false, // status -> true means logged in, false means logged out or unauthenticated
    userData : null
}

const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers: {
        // login action?
        login : (state, action) => {
            state.status = true
            state.userData = action.payload.userData
        },
        logout : (state) => {
            state.status = false;
            state.userData = null;
        } 
    }
})

export const {login, logout}  = authSlice.actions
//why returning reducer function?
// because reducer function is the one which actually modifies the state
// actions -> authslice -> reducer -> actions(login, logout)
export default authSlice.reducer;
//why export reducer?
// because we need to add this reducer to the store.js file where we configure the store
// and store is the one which holds the state of the entire application
// so we need to export the reducer function to be used in store.js file