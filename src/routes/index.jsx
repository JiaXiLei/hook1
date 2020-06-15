import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Home, Login, Registered } from './router'

const routes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/registered',
        component: Registered
    },
    {
        path: '/',
        component: Home
    }
]

export default function Router() {
    return (
        <BrowserRouter>
            {renderRoutes(routes)}
        </BrowserRouter>
    )
}