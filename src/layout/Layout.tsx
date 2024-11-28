import React from 'react'

import { Outlet } from "react-router-dom";

import Header from './Header.tsx';

export default function Layout() {

    return (
        <div>
            <Header />
            <main>
                <div className='mx-auto'>
                    <Outlet />
                </div>
            </main>
        </div>

    );
}