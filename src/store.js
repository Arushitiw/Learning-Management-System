import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from './slices/authslice';
const store=configureStore({
    reducer:{
auth:authSliceReducer
    },
    devTools:true
});
export default store;