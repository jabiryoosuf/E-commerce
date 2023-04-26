import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { totalCartAmount } from "../Store/CartSlice";
import compareImg from "../images/compare.svg"
import wishlistImg from "../images/wishlist.svg"
import userImg from "../images/user.svg"
import cartImg from "../images/cart.svg"


const Header = () => {
  const dispatch = useDispatch();
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const { cartItems } = useSelector((state) => state.cart);

  const totalCartItems = cartItems.length;

  let totalPrice = 0;
  useEffect(() => {
    for (let i = 0; i < cartItems.length; i++) {
      const item = cartItems[i];
      totalPrice +=
        item?.items[0]?.quantity *
        item?.items?.[0]?.product?.price?.actualPrice;
    }
    setTotalCartPrice(totalPrice);
    dispatch(totalCartAmount(totalPrice));
  },);
  const ScrollTop = () => {
    window.scrollTo(0, 0);
  };

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
              <p className="text-white mb-0">
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
      <header className="header-upper position-sticky py-2">
        <div className="container-xxl">
          <div className="row align-item-center">
            <div className="col-2">
              <h2>
                <Link to="/" className="text-white">
                  Shoppee
                </Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control h-25 py-2"
                  placeholder="Search Product Here"
                  aria-label="Search Product Here"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3 " id="basic-addon2">
                  <BsSearch className="fs-6 " />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to="/compare-product"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={compareImg} alt="" />
                    <p className="Header-Text mb-0 ">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={wishlistImg} alt="" />
                    <p className="Header-Text mb-0 ">
                      Favourite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/login"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={userImg} alt="" />
                    <p className="Header-Text mb-0">
                      Log <br />
                      My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={cartImg} alt="" />
                    <div className="Header-Text d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">
                        {totalCartItems}
                      </span>
                      {/* <p className="Header-Text mb-0">$ {totalCartPrice}</p> */}
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-2  position-sticky">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-link">
                <div className="d-flex align-item-center gap-5 mt-2">
                  <NavLink onClick={ScrollTop} to="/">
                    Home
                  </NavLink>
                  <NavLink to="/ourstore">Our Store</NavLink>
                  <NavLink to="/blogs">Blogs</NavLink>
                  <NavLink to="/contact">Contact</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
