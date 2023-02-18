import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import SideBar from '../components/Sidebar';

const Main = () => {
    return (
        <div>
            <div className=''>
                <div className='flex'>
                    <SideBar />
                    <div className='w-full'>
                        <Header />
                        <div>
                            <div className='flex justify-between'>
                                <div className='px-5 pb-24 w-full lg:h-[88vh] lg:overflow-y-auto no-scrollbar'>
                                    <Outlet />
                                </div>
                                <div className='hidden 2xl:block'>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;