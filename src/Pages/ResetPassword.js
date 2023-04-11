import React, { useState } from 'react'
import Meta from "../Components/Meta";
import Header from "../Components/Header";
import { useParams } from 'react-router-dom';
import { resetpasswordApi } from '../Store/authSlice';
import { useDispatch } from 'react-redux';
import { ToastContainer, Zoom } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const ResetPassword = () => {
   const parms=useParams()
     const id=parms.id
    const [password,setpassword]=useState({})
 
  const dispatch= useDispatch()
   

  const handleChange=(e)=>{
    setpassword({...password,[e.target.name]:e.target.value})
      
  }
  console.log(password);


    const handleSubmitpassword=(e)=>{
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

              <form onSubmit={handleSubmitpassword}  action="" className="d-flex flex-column gap-15">
        
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
                    name="confirmPassword"
                    placeholder=" confirm password"
                    className="form-control"
                  />
                </div>
                <div>
                  <div className=" mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button  type='submit'className="button border-0" >OK</button>
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
