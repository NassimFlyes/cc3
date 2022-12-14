import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCart = createAsyncThunk("get/getCart", async () => {
  const response = await axios.get("https://dummyjson.com/carts");
  return response.data;
});

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
    isLoading: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCart.pending, (state, action) => {
      state.isLoading = true;
      state.error = "";
      console.log("loading ");
    });

    builder.addCase(getCart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = "";
      console.log("done");
    });
    builder.addCase(getCart.rejected, (state, action) => {
      state.isLoading = false;
      state.error = "error";
      console.log("echec");
    });
  },
});

export const CartSliceActions = CartSlice.actions;
export default CartSlice;
