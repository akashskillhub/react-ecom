import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api";

export const register = createAsyncThunk(
    "register",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await API.post("/users", userData)
            return data
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })

export const login = createAsyncThunk(
    "login",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await API.get("/users", {
                params: {
                    email: userData.email,
                    password: userData.password,
                }
            })
            if (data.length === 0) {
                return rejectWithValue("Email or password missmatch")
            }
            localStorage.setItem("auth", JSON.stringify(data[0]))
            return data[0]
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })

export const addToCart = createAsyncThunk(
    "addToCart",
    async (cartData, { rejectWithValue, getState }) => {
        try {
            const { data } = await API.post(`/cart`, {
                ...cartData,
                userId: getState().user.auth.id
            })
            return data
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const getCartItems = createAsyncThunk(
    "getCartItems",
    async (cartData, { rejectWithValue, getState }) => {
        try {
            const { data } = await API.get(`/cart`)
            return data
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const removeCartItem = createAsyncThunk(
    "removeCartItem",
    async (id, { rejectWithValue, getState }) => {
        try {
            const { data } = await API.delete(`/cart/${id}`)
            return data
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const palceOrder = createAsyncThunk(
    "palceOrder",
    async (orderData, { rejectWithValue, getState }) => {
        try {
            for (const item of getState().user.cart) {
                await API.delete(`/cart/${item.id}`)
            }
            const { data } = await API.post(`/orders`, {
                ...orderData,
                status: "placed"
            })
            return data
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const getUserOrders = createAsyncThunk(
    "getUserOrders",
    async (orderData, { rejectWithValue, getState }) => {
        try {
            const { data } = await API.get(`/orders`, {
                params: {
                    userId: getState().user.auth.id
                }
            })
            return data
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })