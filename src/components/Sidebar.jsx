import React, { useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon, BookmarkIcon, BookOpenIcon, ChatBubbleLeftRightIcon, HomeIcon, LightBulbIcon, Squares2X2Icon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const SideBar = () => {
    const [bigBottomBar, setBigBottomBar] = useState(false);
    const active = {
        color: "#1FA45B",
        borderLeft: "5px solid #1FA45B"
    }
    const activeOnMobile = {
        color: "#1FA45B",
    }
    const handleBottomBar = () => {
        bigBottomBar ? setBigBottomBar(!bigBottomBar) : setBigBottomBar(true);
    }
    const navMenus = [
        {
            name: "Home",
            route: "/",
            icon: <img src='assets/home.png' className="h-6 w-6" />,
        },
        {
            name: "Explore",
            route: "/",
            icon: <img src='assets/compass.png' className="h-6 w-6" />,
        },
        {
            name: "Saved",
            route: "/",
            icon: <img src='assets/save.png' className="h-6 w-6" />,
        },
        {
            name: "Cart",
            route: "/",
            icon: <img src='assets/cart.png' className="h-6 w-6" />,
        },
        {
            name: "Selling",
            route: "/",
            icon: <img src='assets/sell.png' className="h-6 w-6" />,
        },
        {
            name: "Profile",
            route: "/",
            icon: <img src='assets/profile.png' className="h-6 w-6" />,
        },
    ]
    return (
        <div>
            <div className='relative hidden lg:block'>
                <aside className={`w-[277px] relative z-10 overflow-y-auto bg-white dark:bg-dark flex-shrink-0 rounded-xl transition-all ease-in-out`}>
                    <div className="p-4">
                        <div className='flex items-center'>
                            <Link to=""><img className='w-10 h-10 mr-4' src="assets/logo.png" alt="" /></Link>
                            <Link to="" className={`block text-lg font-bold text-gray-800 -mt-2`}>Mk sound</Link>
                        </div>
                        <ul className="mt-6 px-4">
                            {
                                navMenus.map(menu => <li className="relative my-3 transition-bg duration-150 rounded-lg overflow-hidden">
                                    <Link
                                        className={`"px-6" py-3 inline-flex items-center w-full text-sm font-semibold`}>
                                        <div className=''>
                                            {menu.icon}
                                        </div>
                                        <span className="ml-8 text-base">{menu.name}</span>
                                    </Link>
                                </li>
                                )}
                        </ul>
                        <div className="px-6 my-6 text-center">

                        </div>
                    </div>
                </aside >
            </div>
            {/* mobile bottom bar */}
            <div className='lg:hidden '>
                <div className='fixed bottom-0 z-10 bg-white dark:bg-dark rounded-t-3xl w-full bottom-bar dark:bottom-bar-dark'>
                    <ul className={`p-2 ${!bigBottomBar ? "h-[78px]" : "h-auto"} flex justify-between flex-wrap items-center `}>
                        {
                            navMenus.map(menu => <li>
                                <Link
                                    className="px-6 py-3 inline-flex items-center w-full text-sm font-semibold text-gray-500">
                                    <div className='flex items-center justify-center h-10 w-10 rounded-full'>
                                        {menu.icon}
                                    </div>
                                </Link>
                            </li>
                            )}
                    </ul>
                    <div className='flex sm:hidden w-full justify-center'>
                        <button onClick={handleBottomBar} className='h-[3px] w-20 bg-gray-300 mx-auto mb-2'></button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default SideBar;