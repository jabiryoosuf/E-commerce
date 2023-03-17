import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import watch from "../images/watch.jpg";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <section className="cart-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="cart-header py-3 mb-3 d-flex justify-content-between align-contet-center">
                <h4 className="cart-colo-1">Product</h4>
                <h4 className="cart-colo-2">Price</h4>
                <h4 className="cart-colo-3">Quantity</h4>
                <h4 className="cart-colo-4">Total</h4>
              </div>
              <div className="cart-data py-3 d-flex justify-content-between align-items-center">
                <div className="cart-col-1 d-flex gap-15 align-items-center">
                  <div className="w-25">
                    <img src={watch} className="img-fluid" alt="product name" />
                  </div>
                  <div className="w-75">
                    <p>dfghkdg</p>
                    <p> color:fdf</p>
                    <p> size:3</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price"> $ 100</h5>
                </div>

                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input
                      className="form-control"
                      type="number"
                      name=""
                      min={1}
                      max={10}
                      id=""
                    />
                  </div>
                  <div>
                    <MdDelete className="text-danger" />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price"> $ 100</h5>
                </div>
              </div>
              <div className="cart-data py-3 d-flex justify-content-between align-items-center">
                <div className="cart-col-1 d-flex gap-15 align-items-center">
                  <div className="w-25">
                    <img src={watch} className="img-fluid" alt="product name" />
                  </div>
                  <div className="w-75">
                    <p>dfghkdg</p>
                    <p> color:fdf</p>
                    <p> size:3</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price"> $ 100</h5>
                </div>

                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input
                      className="form-control"
                      type="number"
                      name=""
                      min={1}
                      max={10}
                      id=""
                    />
                  </div>
                  <div>
                    <MdDelete className="text-danger" />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price"> $ 100</h5>
                </div>
              </div>
              <div className="col-12 py-2 mt-4">
              <div className="d-flex justify-content-between align-items-baseline">
              <Link to="/product" className="button">
                  Continue To Shopping
                </Link>
                <div className="d-flex flex-column align-items-end">
                    <h4>Sub Total:  $100</h4>
                    <p>Taxes and shipping calculated at checkout</p>
                    <Link to="/checkout" className="button">Check Out</Link>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
