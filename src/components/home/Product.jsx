import React, { useEffect, useState } from 'react';

const Product = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://api.hiring.masterkey.tech/api/v1/product/get');
            const jsonData = await response.json();
            setData(jsonData.products);
            setLoading(false);
        };
        fetchData();
    }, []);
    if(loading){
        return <div>loading...</div>
    }
    return (
        <div>
            {data?.map(data => (
                <h2>api</h2>
            ))}
        </div>
    );
};

export default Product;