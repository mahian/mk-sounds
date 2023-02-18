import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const Product = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/product.json');
            const jsonData = await response.json();
            setData(jsonData.products);
            setLoading(false);
        };
        fetchData();
    }, []);
    console.log(data);
    if (loading) {
        return <div>loading...</div>
    }
    return (
        <div className='relative overflow-hidden mt-20 max-w-[680px]'>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className='flex gap-2 mySwiper'>
                {data?.map(data => (
                    <SwiperSlide className='shadow-md rounded-lg w-48 p-2'>
                        <img className='h-20' src={data.picture} alt="" />
                        <h2 className='font-bold text-base'>{data.name}</h2>
                        <p>price : {data.price}$</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Product;