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

    const handleConfirmOrder = id => {
         fetch(`http://localhost:5000/mycart/${id}`,{
          method:'PATCH',
          headers:{
            'content-type':'application/json'
          },
          body: JSON.stringify({status:'confirm'})
         })
         .then(res=> res.json())
         .then(data => {
          console.log(data);
          if(data.modifiedCount > 0){
            const remaining = orders.filter(order => order._id !== id);
            const updated = orders.find(order => order._id === id);
            const newArray = [updated, ...remaining];
            updated.status = 'confirm';
            setOrders(newArray);
          }
         })

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
        <th>Name </th>
        <th>Email Address</th>
        <th>Coffees</th>
        <th>Price</th>
        <th>Date</th>
        <th>Remove</th>
        <th>Confirm Order</th>
      </tr>
    </thead>
    <tbody>
      {
        orders.map(order => <Order 
          key={order.key}
          order={order}
          handleDeleteOrder={handleDeleteOrder}
          handleConfirmOrder={handleConfirmOrder}
          ></Order>)
      }
    </tbody>
     
    
  </table>
</div>
       
    );
};

export default MyCart;