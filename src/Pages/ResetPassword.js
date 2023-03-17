import React from 'react'
import Meta from "../Components/Meta";
import Footer from "../Components/Footer";

const ResetPassword = () => {
  return (
    <>
    
      <Meta title={"Reset Password"} />
      <div className="login-wrapper home-wrapper-2 py-5">
       <div className="container-xxl">
       <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">ResetPassword</h3>
              <form action="" className="d-flex flex-column gap-15">
        
              <div className="mt-1">
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="form-control"
                  />
                </div>
                <div className="mt-1">
                  <input
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
