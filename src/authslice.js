import {createSlice} from "@reduxjs/toolkit"

const initialState={
isLoggedIn:localStorage.getItem('isLoggedIn')||false,
role:localStorage.getItem('role')||"",
data:localStorage.getItem('data')||{}
};

const authslice=createSlice({
    name:'auth',initialState,
    reducers:{},
});
export const{}=authslice.actions;
export default authslice.reducer;
