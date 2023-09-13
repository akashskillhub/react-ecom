import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api";

export const addProduct = createAsyncThunk("admin/add-product", async (productData, { rejectWithValue, getState }) => {
    try {
        const { data } = await API.post("/products", productData)
        return true
    } catch (error) {
        return rejectWithValue(error.message)
    }
})
export const getProducts = createAsyncThunk("admin/get-products", async (productData, { rejectWithValue, getState }) => {
    try {
        const { data } = await API.get("/products")
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})
export const deleteProduct = createAsyncThunk("admin/delete-product", async (productData, { rejectWithValue, getState }) => {
    try {
        const { data } = await API.delete(`/products/${productData.id}`)
        return true
    } catch (error) {
        return rejectWithValue(error.message)
    }
})
export const updateProduct = createAsyncThunk("admin/update-product", async (productData, { rejectWithValue, getState }) => {
    try {
        const { data } = await API.patch(`/products/${productData.id}`, productData)
        return true
    } catch (error) {
        return rejectWithValue(error.message)
    }
})
export const adminLogin = createAsyncThunk("admin/login", async (adminData, { rejectWithValue, getState }) => {
    try {
        const { data } = await API.get(`/admin`, {
            params: {
                email: adminData.email,
                password: adminData.password
            }
        })
        if (data.length === 0) {
            return rejectWithValue("Invalid Credentials")
        }
        return data[0]
    } catch (error) {
        return rejectWithValue(error.message)
    }
})
export const getAllUsers = createAsyncThunk("admin/getAllUsers", async (adminData, { rejectWithValue, getState }) => {
    try {
        const { data } = await API.get(`/users`)
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})
export const getUsersOrder = createAsyncThunk("admin/getUsersOrder", async (id, { rejectWithValue, getState }) => {
    try {
        const { data } = await API.get(`/orders`, {
            params: {
                userId: id
            }
        })
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

