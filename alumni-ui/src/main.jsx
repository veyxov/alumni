import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import LoginPage from './routes/auth/login.jsx';
import { RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        loader: async ({ params }) => {
            console.log(params)
            return null
        },

        children: [
            {
                path: "/auth/login",
                element: <LoginPage />,
                loader: async ({ params }) => {
                    console.log("rsnd")
                    return null
                }
            },
        ],
    },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
