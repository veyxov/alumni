'use client';

import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        token: null,
        loggedIn: false,
    },
    reducers: {
        login: (state, action) => {
            state.token = action.payload;
            state.loggedIn = true;
        },
        logout: (state) => {
            state.token = null;
            state.loggedIn = false;
        }
    }
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
