import React, { useEffect, useState } from 'react';
import Band from '../Band/Band';
import './Brands.css'

const Brands = () => {
    const [bands,setBands] = useState([])
    useEffect(()=>{
        fetch('./fakedata.JSON')
        .then(res=>res.json())
        .then(data=>setBands(data))
    },[])
    return (
        <div>
            {
                bands.map(band=><Band band={band} key={band.name}></Band>)
            }
            
        </div>
    );
};

export default Brands;