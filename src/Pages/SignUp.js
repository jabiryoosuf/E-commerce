import React, { useEffect, useState } from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerApi } from "../Store/authSlice";

const SignUp = () => {

  const [data,setData] = useState({})


  const dispatch=useDispatch()
  const navigate=useNavigate()

   const handleChange=(e)=>{
    setData({...data,
      [e.target.name]:e.target.value
    })
   }
   console.log(data);
   
   const handleRegister=(e)=>{
    e.preventDefault()
    if(data){
    dispatch(registerApi({data,navigate}))
    }
 }

   const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(registerApi({data, navigate}));
    // console.log("data not submited");
 }


  return (
    <>
      <div className="login-wrapper home-wrapper-2 py-5">
      <div className="container-xxl">
      <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Signup</h3>
              <form onSubmit={handleSubmit}  action="" className="d-flex flex-column gap-15">
                <div>
                  <input onChange={handleChange}
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="form-control"
                  />
                </div>
                <div>
                  <input onChange={handleChange}
                    type="text"
                    name="lastName" 
                    placeholder="Second Name"
                    className="form-control"
                  />
                </div>
                <div>
                  <input onChange={handleChange}
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
                <div>
                  <input onChange={handleChange}
                    type="number"
                    name="phone"
                    placeholder="Mobile Number"
                    className="form-control"
                  />
                </div>
                <div className="mt-1">
                  <input onChange={handleChange}
                    type="password"
                    name="password"
                    placeholder="password"
                    className="form-control"
                  />
                </div>
                <div>
                  <div className=" mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button type="submit" className="button border-0">Sign UP</button>
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

export default SignUp;
