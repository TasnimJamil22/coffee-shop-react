 import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
 

const Login = () => { 
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = {email,password};
         
        signIn(email,password)
        .then(result => {
            const user = result.user;
            console.log('user signed In' );
            form.reset();
            navigate(from, {replace:true})
        })
        .catch(err=>console.log(err));
    }
    return (
        
            <div className="hero  w-3/5  mx-auto rounded-lg bg-[#D5CEA3] mt-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-control ">
                
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
               <input type="submit" value="Login" className="btn bg-[#3C2A21] text-[#D5CEA3]  border-none"/>
              </div>
            </form>
            <p>New to CoffeeShop? <Link to='/signup'>Sign Up</Link></p>
            </div>
          </div>
        </div>
      </div>
        
    );
};

export default Login;