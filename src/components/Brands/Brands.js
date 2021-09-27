import React, { useEffect, useState } from 'react';
import Band from '../Band/Band';
import Cart from '../Cart/Cart';
import './Brands.css'

const Brands = () => {
    const [bands,setBands] = useState([])
    const [cart,setCart] = useState([])
    useEffect(()=>{
        fetch('./fakedata.JSON')
        .then(res=>res.json())
        .then(data=>setBands(data))
    },[])
    // get ticket now button
    const handleAddtoCart = product=>{
        const newCart = [...cart,product]
        setCart(newCart)
    }
    return (
        //  band container
        <div className="bands mb-5 row g-4">
            <div className="col-md-9">
            <div className="row row-cols-1 row-cols-md-3 g-4 ">
            {
                    bands.map(band=><Band band={band} key={band.name}handleAddtoCart={handleAddtoCart}></Band>)
             }
            </div>
            </div>
            {/*  cart container*/}
            <div className="col-md-3 cart-container">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>

    );
};

export default Brands;

 