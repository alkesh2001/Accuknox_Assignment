import { configureStore } from "@reduxjs/toolkit";
import addWidget from './auth'


export const store = configureStore({
    reducer: {
        // Assign a key to your reducer, which will be the name of the state slice
        categories: addWidget
    }
});
