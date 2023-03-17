import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
     
      <div className="login-wrapper home-wrapper-2 py-5">
      <div className="container-xxl">
      <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Signup</h3>
              <form action="" className="d-flex flex-column gap-15">
                <div>
                  <input
                    type="text"
                    name="Name"
                    placeholder="First Name"
                    className="form-control"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="Second Name"
                    placeholder="Second Name"
                    className="form-control"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    name="Mobile Number"
                    placeholder="Mobile Number"
                    className="form-control"
                  />
                </div>
                <div className="mt-1">
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="form-control"
                  />
                </div>
                <div>
                  <div className=" mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0">Sign UP</button>
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
