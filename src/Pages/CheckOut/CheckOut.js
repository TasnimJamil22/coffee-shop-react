import userEvent from '@testing-library/user-event';
import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';

const CheckOut = () => {
       const {user} = useContext(AuthContext);
       const service = useLoaderData();
       const {_id,name,price,img} = service;
       console.log(_id);

       const handleCheckOut = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const customer = form.customer.value;
        const name = form.name.value;
        const price = form.price.value;
         const date = form.date.value;
        const confirm = {
          email,
          customer,
          name,
          price,
          date,
          img,
          coffee_id: _id    
        
        }
        fetch('http://localhost:5000/checkout',{
           
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(confirm)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
          
            
        })
       }


    return (
        
        <div>
             
            
            <div className='  w-4/5 mx-auto py-14 my-5 rounded-lg'>
            <h1 className='lg:text-4xl sm:text-1xl text-center my-4 text-[#3C2A21] lg:w-1/2 sm:w-48 p-4 rounded-lg mx-auto font-bold '>Check Out</h1>
     <form onSubmit={handleCheckOut} className='lg:w-3/5 sm:w-4/5 mx-auto bg-[#D5CEA0] p-10 rounded-lg'>

        
        
         {/* <div className="grid lg:grid-cols-2 md:gird-cols-2 sm:grid-cols-1  gap-6"> */}
         <div> 
         <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" defaultValue={user?.email} className="input input-bordered" />
          <label className="label">
            
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Customers Name</span>
          </label>
          <input type="text" name="customer"  className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Coffee Name</span>
          </label>
          <input type="text" name="name"  defaultValue={name} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" name="price" defaultValue={price} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name="date"  className="input input-bordered" />
        </div>
        
         
        
        
      </div>
      <div className="form-control mt-6">
          {/* <button className="btn bg-[#D5CEA3] text-[#3C2A21]">Add Coffee</button> */}
              <input  type="submit" value="Confirm" className="btn text-[#D5CEA3] bg-[#3C2A21] w-2/4 mx-auto"/> 
        </div>
    
     </form>
   
     </div>
        </div>
    );
};

export default CheckOut;