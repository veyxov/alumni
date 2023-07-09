'use client';

import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slice";

export const store = configureStore({
    reducer: {
        login: loginReducer,
    },
});
