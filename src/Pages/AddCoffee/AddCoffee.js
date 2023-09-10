import React from 'react';

const AddCoffee = () => {
    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const img = form.img.value;
        const type = form.type.value;
        const newCoffee = {name,price,img,type};
         
        console.log(newCoffee);
        fetch('http://localhost:5000/addcoffee',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(newCoffee);
        })

    }
    return (
         
     <div className='  w-4/5 mx-auto py-14 my-5 rounded-lg'>
        <h1 className='lg:text-4xl sm:text-1xl text-center my-4   text-[#E2C799] lg:w-1/2 sm:w-48 p-4 rounded-lg mx-auto font-bold border border-dashed border-[#3C2A21]'> Please Add a Coffee</h1>
     <form onSubmit={handleAddCoffee} className='w-3/4 mx-auto '>
        
         <div className="grid lg:grid-cols-2 md:gird-cols-2 sm:grid-cols-1  gap-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Coffee Name</span>
          </label>
          <input type="text" name="name"  className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" name="price" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image url</span>
          </label>
          <input type="text" name="img" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Type</span>
          </label>
          <input type="text" name="type" className="input input-bordered" />
          <label className="label">
            
          </label>
        </div>
        
      </div>
      <div className="form-control mt-6   ">
          {/* <button className="btn bg-[#D5CEA3] text-[#3C2A21]">Add Coffee</button> */}
          <button className="btn bg-[#3C2A21] text-[#D5CEA3]">Add Coffee</button>
        </div>
    
     </form>
   
     </div>
        
    );
};

export default AddCoffee;