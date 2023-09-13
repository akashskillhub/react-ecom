import { createSlice } from "@reduxjs/toolkit";
import { addProduct, adminLogin, deleteProduct, getAllUsers, getProducts, getUsersOrder, updateProduct } from "../actions/adminActions";

const adminSlice = createSlice({
    name: "admin",
    initialState: {},
    reducers: {
        invalidate: (state, { payload }) => {
            state.productAdd = false
            state.productDeleted = false
            state.productUpdated = false
            state.error = false
        }
    },
    extraReducers: builder => {
        builder
            .addCase(addProduct.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(addProduct.fulfilled, (state, { payload }) => {
                state.loading = false
                state.productAdd = true
            })
            .addCase(addProduct.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })


            .addCase(getProducts.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(getProducts.fulfilled, (state, { payload }) => {
                state.loading = false
                state.products = payload
            })
            .addCase(getProducts.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })


            .addCase(deleteProduct.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(deleteProduct.fulfilled, (state, { payload }) => {
                state.loading = false
                state.productDeleted = true
            })
            .addCase(deleteProduct.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })


            .addCase(updateProduct.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(updateProduct.fulfilled, (state, { payload }) => {
                state.loading = false
                state.productUpdated = true
            })
            .addCase(updateProduct.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })


            .addCase(adminLogin.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(adminLogin.fulfilled, (state, { payload }) => {
                state.loading = false
                state.auth = payload
            })
            .addCase(adminLogin.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })


            .addCase(getAllUsers.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(getAllUsers.fulfilled, (state, { payload }) => {
                state.loading = false
                state.users = payload
            })
            .addCase(getAllUsers.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })

            .addCase(getUsersOrder.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(getUsersOrder.fulfilled, (state, { payload }) => {
                state.loading = false
                state.userOrders = payload
            })
            .addCase(getUsersOrder.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
    }
})
export const { invalidate } = adminSlice.actions
export default adminSlice.reducer