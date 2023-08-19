import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./components/Blog/blogSlice";

const store = configureStore({
    reducer: {
        blog: blogReducer

    },
});

export default store;