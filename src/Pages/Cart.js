import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import watch from "../images/watch.jpg";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RemoveCartApi, getcartApi } from "../Store/CartSlice";
import { map } from "lodash";
import { useState } from "react";
import emptycart from "../images/emptycart.gif"

const Cart = () => {
  const dispatch = useDispatch();
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);

  useEffect(() => {
    dispatch(getcartApi());
  }, []);

  useEffect(() => {
    let totalPrice = 0;
    for (let i = 0; i < cartItems.length; i++) {
      const item = cartItems[i];
      totalPrice += item?.quantity * item?.product?.price?.actualPrice;
    }
    setTotalCartPrice(totalPrice);
  }, [cartItems]);

  const deleteCartItem = (cartItemId)=>{
dispatch(RemoveCartApi(cartItemId)).then(()=>{
  dispatch(getcartApi())
})
  }
  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <section className="cart-wrapper home-wrapper-2 py-5">
      {cartItems.length === 0?(
        <> 
        <h2 style={{textAlign:'center'}}>Your Cart is Empty</h2>
          <div className="empty" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          
          <img src={emptycart} alt="empty cart"></img>
          </div>
        </>
        ) : (
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              
              <div className="cart-header py-3 mb-3 d-flex justify-content-between align-contet-center">
                <h4 className="cart-colo-1">Product</h4>
                <h4 className="cart-colo-2">Price</h4>
                <h4 className="cart-colo-3">Quantity</h4>
                <h4 className="cart-colo-4">Total</h4>
              </div>
              {map(cartItems, (cartItem = cartItem) => (
                <div className="cart-data py-3 d-flex justify-content-between align-items-center">
                  <div className="cart-col-1 d-flex gap-15 align-items-center">
                    <div className="w-25">
                      <img
                        src={cartItem?.product?.images?.[0]?.url}
                        className="img-fluid"
                        alt="product name"
                      />
                    </div>
                    <div className="w-75">
                      <p>{cartItem?.product?.name}</p>
                      <p>{cartItem?.product?.brand}:</p>
                    </div>
                  </div>
                  <div className="cart-col-2">
                    <h5 className="price">
                      $ {cartItem?.product?.price?.actualPrice}
                    </h5>
                  </div>

                  <div className="cart-col-3 d-flex align-items-center gap-15">
                    <div>
                      <input
                        className="form-control"
                        type="number"
                        name=""
                        value={cartItem?.quantity}
                        min={1}
                        max={10}
                        id=""
                      />
                    </div>
                    <div>
                      <MdDelete style={{cursor:"pointer",fontSize:"30px"}} className="text-danger" onClick={()=>deleteCartItem(cartItem._id)} />
                    </div>
                  </div>
                  <div className="cart-col-4">
                    <h5 className="price">
                      ${" "}
                      {cartItem?.quantity *
                        cartItem?.product?.price?.actualPrice}
                    </h5>
                  </div>
                </div>
              ))}

              <div className="col-12 py-2 mt-4">
                <div className="d-flex justify-content-between align-items-baseline">
                  <Link to="/product" className="button">
                    Continue To Shopping
                  </Link>
                  <div className="d-flex flex-column align-items-end">
                    <h4>Sub Total : {totalCartPrice}</h4>
                    <p>Taxes and shipping calculated at checkout</p>
                    <Link to="/checkout" className="button">
                      Check Out
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        )}
      </section>
    </>
  );
};

export default Cart;
