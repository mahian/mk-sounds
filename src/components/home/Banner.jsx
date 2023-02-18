import React from 'react';

const Banner = () => {
    return (
        <div className='flex items-center shadow-lg rounded-lg p-6'>
            <div>
                <img src="assets/banner-product.png" alt="" />
            </div>
            <div>
                <h2 className='text-3xl font-bold'>Beats Studio3 Wireless Headphone</h2>
                <div className='mt-2 flex items-center'>
                    <div className='flex'>
                        <img src="assets/star.png" className='h-5 w-5 mr-1' alt="" />
                        <img src="assets/star.png" className='h-5 w-5 mr-1' alt="" />
                        <img src="assets/star.png" className='h-5 w-5 mr-1' alt="" />
                        <img src="assets/star.png" className='h-5 w-5 mr-1' alt="" />
                        <img src="assets/star.png" className='h-5 w-5 mr-1' alt="" />
                    </div>
                    <span>(200+ reviews)</span>
                </div>
                <p>Ergonomic or cupe with on-oor controls up to 22 hours of tening time. Apple Wi crip & Closs </p>
                <p className='text-[#07FFD2] mt-2'>Price $ 450.55</p>
                <div>
                    <div className='flex'>
                        color:
                        <div className='flex items-center ml-1'>
                            <div className='h-5 w-5 bg-[#66FF1E] rounded-full mr-2'></div>
                            <div className='h-5 w-5 bg-[#07FFD2] rounded-full mr-2'></div>
                            <div className='h-5 w-5 bg-[#1E78FF] rounded-full mr-2'></div>
                            <div className='h-5 w-5 bg-[#8E3785] rounded-full mr-2'></div>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Banner;