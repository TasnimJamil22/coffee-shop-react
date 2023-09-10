import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {_id,img,name,price} = service;
    return (
        <div className="hero mx-5 px-5 border border-dark rounded-lg bg-[#D5CEA3]">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={img} className='w-1/2 rounded-lg' alt='' />
    <div>
      <h1 className="text-3xl">{name}</h1>
       <p className='font-bold'>price: ${price}</p>
      <Link to={`/checkout/${_id}`}><button  className="btn bg-[#3C2A21] text-[#D5CEA3] btn-sm border-none">Order Now</button></Link>
    </div>
  </div>
</div>
    );
};

export default Service;