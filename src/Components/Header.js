import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
 
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
     
      

      <header className="header-top-strip py-1">
        <div className="container-xxl">
          <div className="row mt-1">
            <div className="col-6">
              <p className="text-white mb-0" >
                Free Shipping over $100 & Free Return
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white">
                Customer Care:
                <a className="text-white" href="+91-9745747303">
                  +91-9987654123
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-item-center">
            <div className="col-2">
              <h2>
                <Link className="text-white">Shoppee</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here"
                  aria-label="Search Product Here"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link to="/compare-product" className="d-flex align-items-center gap-10 text-white">
                    <img src="images/compare.svg" alt="" />
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/wishlist" className="d-flex align-items-center gap-10 text-white">
                    <img src="images/wishlist.svg" alt="" />
                    <p className="mb-0">
                      Favourite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/login" className="d-flex align-items-center gap-10 text-white">
                    <img src="images/user.svg" alt="" />
                    <p className="mb-0">
                      Log <br />
                      My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/cart" className="d-flex align-items-center gap-10 text-white">
                    <img src="images/cart.svg" alt="" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">$ 0</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div class="dropdown  mt-2">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex aliogn-items-center"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="images/menu.svg" alt="" />
                      <span className="me-5 d-inline-block">Shop Categories</span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-link">

                  <div className="d-flex align-item-center gap-5 mt-2">

                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/store">Our Store</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
      </header>
    
    </>
  );
};

export default Header
