import React from 'react';

const Order = ({order,handleDeleteOrder,handleConfirmOrder}) => {
    const {_id,email,customer,name,price,img,date,status} = order;
    return (
        <tr>
        {/* <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th> */}
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={img} alt=''/>
              </div>
            </div>
            <div>
              <div className="font-bold">{customer}</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          ~~~~~~~~~~~ 
          <br/>
          <span className="badge badge-ghost badge-sm">{email} </span>
        </td>
        <td>{name}</td>
        <td>{price}</td>
        <td>{date}</td>
        <th>
          <button onClick={()=>handleDeleteOrder(_id)} className="btn btn-ghost rounded-full">X</button>
        </th>
        <th>
          {
            status?  
            <button onClick={()=>handleConfirmOrder(_id)} className="btn btn-ghost rounded-full text-success">Confirm</button>
            :
            <button onClick={()=>handleConfirmOrder(_id)} className="btn btn-ghost rounded-full">Please Confirm</button>
          }
        </th>
      </tr>
    );
};

export default Order;