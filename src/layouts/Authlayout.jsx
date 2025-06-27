import React from 'react';
import Navbar from '../components/Navbar';
import Login from '../pages/Login';
import Register from '../pages/Register';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <header className="mb-5 ">
                <Navbar></Navbar>
            </header>

            <main className="w-11/12 mx-auto ">
                <Outlet></Outlet>
                
            </main>
        </div>
    );
};

export default AuthLayout;