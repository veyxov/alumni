'use client';

import { createSlice } from "@reduxjs/toolkit";
export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        user: null,
        loggedIn: false,
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            state.loggedIn = true;
        },
        logout: (state) => {
            state.user = null;
            state.loggedIn = false;
        }
    }
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
