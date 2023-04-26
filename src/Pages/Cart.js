import React, { useEffect } from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RemoveCartApi, cartApi, getcartApi } from "../Store/CartSlice";
import { map } from "lodash";
import emptycart from "../images/emptycart.gif";
import { useState } from "react";
import { Box, Modal, Typography } from "@mui/material";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";

const Cart = () => {
  const [open, setOpen] = useState(false);
  const [cartId, setCartId] = useState(null);
  const [ productQuantity,setProductQuantity]=useState()
  const dispatch = useDispatch();

  const { totalPrice, cartItems } = useSelector((state) => state.cart);
  
  useEffect(() => {
    dispatch(cartApi())
    window.scrollTo(0,0);
  },[]);

  const deleteCartItem = (cartItemId) => {
    dispatch(RemoveCartApi(cartItemId)).then(() => {
      toast.error("Remove cart success", { autoClose: 1000 })
      dispatch(getcartApi());
    });
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <div>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Delete Confirm
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Are you sure to delete
            </Typography>
            <Button onClick={() => setOpen(false)}>cancel</Button>
            <Button
              onClick={()=>{ deleteCartItem(cartId); setOpen(false);}}
              style={{
                color: "white",
                background: "red",
                border: "none",
                marginLeft: "5px",
              }}
            >
              delete
            </Button>
          </Box>
        </Modal>
      </div>
      <section className="cart-wrapper home-wrapper-2 py-5">
        {cartItems.length === 0 ? (
          <>
            <h2 style={{ textAlign: "center" }}>Your Cart is Empty</h2>
            <div
              className="empty"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
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
                {map(cartItems, (cartItem) => (
                  <div className="cart-data py-3 d-flex justify-content-between align-items-center">
                    <div className="cart-col-1 d-flex gap-15 align-items-center">
                      <div className="w-25">
                        <img
                          src={cartItem?.items?.[0]?.product?.images?.[0]?.url}
                          className="img-fluid"
                          alt="product name"
                        />
                      </div>
                      <div className="w-75">
                        <p>{cartItem?.items?.[0]?.product?.name}</p>
                        <p>{cartItem?.items?.[0]?.product?.brand}:</p>
                      </div>
                    </div>
                    <div className="cart-col-2">
                      <h5 className="price">
                      ₹ {cartItem?.items?.[0]?.product?.price?.actualPrice}
                      </h5>
                    </div>

                    <div className="cart-col-3 d-flex align-items-center gap-15">
                      <div>
                        <input
                          className="form-control"
                          type="number"
                          name=""
                          min={1}
                          max={10}
                          defaultValue={cartItem?.items?.[0]?.quantity}
                          id=""
                        />
                      </div>
                      <div>
                        <MdDelete
                          style={{ cursor: "pointer", fontSize: "30px" }}
                          className="text-danger"
                          // onClick={() => deleteCartItem(cartItem._id)}
                          onClick={() => {
                            setOpen(true);
                            setCartId(cartItem?._id);
                          }}
                        />
                      </div>
                    </div>
                    <div className="cart-col-4">
                      <h5 className="price">
                      ₹ {cartItem?.items?.[0]?.quantity *
                          cartItem?.items?.[0]?.product?.price?.actualPrice}
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
                      <h4>Sub Total : {totalPrice}</h4>
                      <p>Taxes and shipping calculated at checkout</p>
                      <Link to="/checkout" className="button" style={{background:"#febd69",color:"#232f3e"}}>
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
