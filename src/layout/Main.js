import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            nav
            <Outlet/>
        </div>
    );
};

export default Main;