import { createSlice } from "@reduxjs/toolkit";
import { getPublicProducts, getPublicSelectedProduct } from "../actions/publicActions";

const publicSlice = createSlice({
    name: "publicSlice",
    initialState: {},
    reducers: {
        invalidate: (state, { payload }) => {

        }
    },
    extraReducers: builder => builder
        .addCase(getPublicProducts.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(getPublicProducts.fulfilled, (state, { payload }) => {
            state.loading = false
            state.products = payload
        })
        .addCase(getPublicProducts.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(getPublicSelectedProduct.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(getPublicSelectedProduct.fulfilled, (state, { payload }) => {
            state.loading = false
            state.selectedProduct = payload
        })
        .addCase(getPublicSelectedProduct.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })



})

export const { invalidate } = publicSlice.actions
export default publicSlice.reducer