import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
     if(loading){
        return <h1 className='text-5xl'> Loading..Please wait</h1>
     }

      

     if(user){
         return children;
     }
     return <Navigate to='/login' state={{from:location}} replace={true}></Navigate>
};

export default PrivateRoute;