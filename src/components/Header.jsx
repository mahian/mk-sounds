import { AdjustmentsVerticalIcon, Cog6ToothIcon, MagnifyingGlassIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MenuDrawer from './MenuDrawer';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openDrop, setOpenDrop] = useState(false);
    const [isSticky, setSticky] = useState(false);

    const handleScroll = () => {
        if (window.pageYOffset > 50) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function openDropDown() {
        if (openDrop) {
            setOpenDrop(false)
        } else {
            setOpenDrop(true)
        }
    }
    return (
        <div className='w-full sticky top-0 z-10 sm:bg-white'>
            <header className={`${isSticky ? "bg-white shadow-md text-black" : ""} py-4 sm:text-black`}>
                <div className="flex items-center justify-between h-full px-6 mx-auto">
                    <button onClick={() => setIsOpen(true)} className="p-1 mr-5 -ml-1 rounded-md sm:hidden focus:outline-none focus:shadow-outline-purple" aria-label="Menu">
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    <div className='hidden lg:block'>
                        <h2 className='text-2xl font-semibold'>Headphone</h2>
                        <p>For the top brand</p>
                    </div>
                    <div className='flex items-center lg:hidden'>
                        <Link to=""><img className='w-[73px] h-[73px] hidden sm:block' src="assets/logo.png" alt="" /></Link>
                        <Link to="" className="text-lg font-bold text-gray-800 ml-2">Headphone</Link>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className="justify-center hidden md:flex">
                            <form className="flex items-center">
                                <label for="search" className="sr-only">Search</label>
                                <div className="relative w-full">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <MagnifyingGlassIcon className='h-5 w-5' />
                                    </div>
                                    <input type="text" id='search' className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 p-2.5" placeholder="Search Product" required />
                                    <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">
                                        <AdjustmentsVerticalIcon className='w-5 h-5 text-black' />
                                    </button>
                                </div>
                            </form>
                        </div>

                        <MagnifyingGlassIcon onClick={() => setIsOpen(true)} className='h-5 w-5 md:hidden mr-6' />
                        <div className='ml-6 h-12 w-12 flex items-center justify-center bg-[#17FF3C]'>
                            <img src="assets/composing-mail.png" className='h-8 w-8 ' alt="" />
                        </div>
                        <div className='ml-6 h-12 w-12 flex items-center justify-center bg-[#17FF3C]'>
                            <img src="assets/alarm.png" className='h-8 w-8 ' alt="" />
                        </div>
                        <div className='ml-6 h-12 w-12 flex items-center justify-center bg-[#17FF3C]'>
                            <img src="assets/customer.png" className='h-8 w-8 ' alt="" />
                        </div>
                    </div>
                </div >
            </header >
            <MenuDrawer isOpen={isOpen} setIsOpen={setIsOpen}>
                <div className='px-4'>
                    <div>
                        <div className='flex items-center'>
                            <Link to=""><img className='w-10 h-10 mr-4' src="assets/logo.png" alt="" /></Link>
                            <Link to="" className={`block text-lg font-bold text-gray-800 -mt-2`}>Mk sound</Link>
                        </div>
                        <button onClick={() => setIsOpen(false)} type="button" data-drawer-hide="drawer-example" aria-controls="drawer-example" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center" >
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Close menu</span>
                        </button>
                    </div>
                    <div className="justify-center md:flex mt-4">
                        <form className="flex items-center">
                            <label for="search" className="sr-only">Search</label>
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <MagnifyingGlassIcon className='h-5 w-5' />
                                </div>
                                <input type="text" id='search' className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 p-2.5" placeholder="Search product" required />
                                <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">
                                    <AdjustmentsVerticalIcon className='w-5 h-5 text-black' />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </MenuDrawer>
        </div >
    );
};

export default Header;