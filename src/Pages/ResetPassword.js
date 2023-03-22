import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Meta from "../Components/Meta";
import { resetpasswordApi } from '../Store/authSlice';
import { ToastContainer, Zoom } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
  const params =useParams();
  const id=params.id;

  const dispatch = useDispatch();

  const [password,setPassword]=useState ({})
  
   const handleChange =(e)=>{
    setPassword({[e.target.name]:e.target.value})
   }



  const handlesubmitpassword=(e)=>{
    e.preventDefault();
    dispatch(resetpasswordApi({password,id}))
    

  }
  return (
    <>
     <ToastContainer     
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Zoom}
        />
      <Meta title={"Reset Password"} />
      <div className="login-wrapper home-wrapper-2 py-5">
       <div className="container-xxl">
       <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">ResetPassword</h3>
              <form onSubmit={handlesubmitpassword} action="" className="d-flex flex-column gap-15">
        
              <div className="mt-1">
                  <input onChange={handleChange}
                    type="password"
                    name="password"
                    placeholder="password"
                    className="form-control"
                  />
                </div>
                <div className="mt-1">
                  <input onChange={handleChange}
                    type="password"
                    name="password"
                    placeholder=" confirm password"
                    className="form-control"
                  />
                </div>
                <div>
                  <div className=" mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0">OK</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
       </div>

      </div>
      
    </>
  )
}

export default ResetPassword
