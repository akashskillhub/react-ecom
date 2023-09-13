import { createSlice } from "@reduxjs/toolkit";
import { addToCart, getCartItems, getUserOrders, login, palceOrder, register, removeCartItem } from "../actions/userActions";

const userSlice = createSlice({
    name: "userSlice",
    initialState: { auth: JSON.parse(localStorage.getItem("auth")) },
    reducers: {
        userInvalidate: (state, { payload }) => {
            state.registered = false
            state.cartAdded = false
            state.cartItemDeleted = false
            state.orderPlaced = false
        },
        logout: (state) => {
            localStorage.removeItem("auth")
            state.auth = null
        }
    },
    extraReducers: builder => builder
        .addCase(register.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(register.fulfilled, (state, { payload }) => {
            state.loading = false
            state.registered = true
        })
        .addCase(register.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(login.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(login.fulfilled, (state, { payload }) => {
            state.loading = false
            state.auth = payload
        })
        .addCase(login.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(addToCart.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(addToCart.fulfilled, (state, { payload }) => {
            state.loading = false
            state.cartAdded = true
        })
        .addCase(addToCart.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })
        .addCase(getCartItems.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(getCartItems.fulfilled, (state, { payload }) => {
            state.loading = false
            state.cart = payload
        })
        .addCase(getCartItems.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })


        .addCase(removeCartItem.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(removeCartItem.fulfilled, (state, { payload }) => {
            state.loading = false
            state.cartItemDeleted = true
        })
        .addCase(removeCartItem.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })



        .addCase(palceOrder.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(palceOrder.fulfilled, (state, { payload }) => {
            state.loading = false
            state.orderPlaced = true
        })
        .addCase(palceOrder.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(getUserOrders.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(getUserOrders.fulfilled, (state, { payload }) => {
            state.loading = false
            state.orders = payload
        })
        .addCase(getUserOrders.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })


})

export const { userInvalidate, logout } = userSlice.actions
export default userSlice.reducer