import React, { useState } from "react";
import Meta from "../Components/Meta";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { forgotpasswordApi } from "../Store/authSlice";

const Forgotpassword = () => {
  const [email, setMail] = useState({});

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setMail({
      [e.target.name]: e.target.value,
    });
  };

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    if (email) {
      dispatch(forgotpasswordApi(email));
    }
  };
  return (
    <>
      <Meta title={"Forgot Password"} />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3"> Reset Your Password</h3>
                <p className="text-center" mt-2 mb-2>
                  We Will send You an email to reset your password
                </p>

                <form
                  onSubmit={handleForgotSubmit}
                  action=""
                  className="d-flex flex-column gap-15"
                >
                  <div>
                    <input
                      onChange={handleChange}
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <div className=" mt-3 d-flex justify-content-center flex-column gap-15 align-items-center">
                      <button className="button border-0" type="submit">
                        Submit
                      </button>
                      <Link
                        to="/login"
                    
                      >
                        Cancel
                      </Link>
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

export default Forgotpassword;
