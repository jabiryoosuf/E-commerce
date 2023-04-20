import React, { useState } from "react";
import Meta from "../Components/Meta";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginApi } from "../Store/authSlice";
import { getcartApi } from "../Store/CartSlice";
  
const Login = () => {
  const [login,setLogin]=useState({})
   const dispatch=useDispatch()
   const navigate=useNavigate()

  const handleLoginSubmit=(e)=>{

    e.preventDefault()
    dispatch(loginApi({login,navigate})).then(()=>{
      dispatch(getcartApi())
    })
      
  }
    
  return (
    <>
      <Meta title={"Login"} />
      <div className="login-wrapper home-wrapper-2 py-5">
      <div className="container-xxl">
      <div className="row">
          <div className="col-12">
            <div className="auth-card"> 
              <h3 className="text-center mb-3">Login</h3>
              <form onSubmit={handleLoginSubmit}   action="" className="d-flex flex-column gap-15">
                <div>
                  <input onChange={(e) => setLogin({...login,email:e.target.value })}
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
                <div className="mt-1">
                  <input onChange={(e) => setLogin({...login,password:e.target.value })}
                    type="password"
                    name="password"
                    placeholder="password"
                    className="form-control"
                  />
                </div>
                <div>
                  <Link to="/forgot-password">Forgot Password</Link>
                  <div className=" mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button  type="submit" className="button border-0">
                        Login
                    </button>
                    <Link to="/sign-up" className="button signup">Sign Up</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Login
