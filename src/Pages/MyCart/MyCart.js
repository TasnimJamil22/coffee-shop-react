import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Contexts/AuthProvider';
import Order from '../Order/Order';

const MyCart = () => {
  const {user} = useContext(AuthContext);
    const [orders,setOrders] = useState([]);
    
      const url = `http://localhost:5000/mycart?email=${user?.email}`;
      useEffect(()=>{
      fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setOrders(data);
      })
    },[])

    // delete
    const handleDeleteOrder = id =>{
      const proceed = window.confirm('Are you sure you want to delete?');
      if(proceed){
        
      
      fetch(`http://localhost:5000/mycart/${id}`,{
        method: 'DELETE',
        
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.deletedCount > 0){
          alert('deleted successfully');
          const remaining = orders.filter(order => order._id !== id);
        setOrders(remaining);
        }
      })
    }
    }

    return (
         
           <div className="overflow-x-auto lg:w-2/3 sm:2/5 mx-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        {/* <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th> */}
        <th>Name</th>
        <th>Email Address</th>
        <th>Coffees</th>
        <th>Price</th>
        <th>Date</th>
        <th>Remove</th>
      </tr>
    </thead>
    <tbody>
      {
        orders.map(order => <Order 
          key={order.key}
          order={order}
          handleDeleteOrder={handleDeleteOrder}
          ></Order>)
      }
    </tbody>
     
    
  </table>
</div>
       
    );
};

export default MyCart;