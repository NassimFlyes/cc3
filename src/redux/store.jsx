import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import userSlice from "./UserSlice";

const store = configureStore({
    reducer : {
        users : userSlice.reducer ,
        cart : CartSlice.reducer 
    }
})
export default store ;