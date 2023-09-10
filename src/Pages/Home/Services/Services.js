import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data=> {
            console.log(data);
            setServices(data);
        })
    },[])
    // const {_id,name,img,price} = useLoaderData();
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 w-3/4 mx-auto my-10'>
            {
                services.map(service => <Service
                key={service._id}
                service={service}
                >

                </Service>
                    
                )
            }
        </div>
    );
};

export default Services;