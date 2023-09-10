import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Header = () => {
  const {user,logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(()=>{
      console.log('logged out');
    })
    .catch(err=> console.log(err))
  }
    const menuItems = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/addcoffee'>Add Coffee</Link></li>
    <li><Link to='/mycart'>My Cart</Link></li>
    {
      user? <>
      <li><Link>Hello {user?.email}</Link></li>
      

      <button onClick={handleLogOut} className='btn text-[#3C2A21] bg-[#D5CEA3] border-none'>Log Out</button>
      </> 
      :
      <li><Link to='/login' className='btn text-[#3C2A21] bg-[#D5CEA3] border-none'>Login</Link></li>
      
    }
    </>
    return (
        <div>
            <div className="navbar  bg-[#3C2A21] text-[#D5CEA3]  ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {menuItems}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Coffee Shop</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       {menuItems}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
        </div>
    );
};

export default Header;