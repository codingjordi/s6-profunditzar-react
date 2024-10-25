import React from 'react'

import { Outlet } from "react-router-dom";

import Header from './Header.tsx';

export default function Layout() {

    return (
        <div>
            <Header />
            <div style={{ margin: '0 auto' }}>
                <Outlet />
            </div>
        </div>

    );
}