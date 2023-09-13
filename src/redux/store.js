import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./slices/adminSlice";
import publicSlice from "./slices/publicSlice";
import userSlice from "./slices/userSlice";

const reduxStore = configureStore({
    reducer: {
        admin: adminSlice,
        public: publicSlice,
        user: userSlice
    }
})
export default reduxStore