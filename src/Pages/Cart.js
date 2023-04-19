import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import watch from "../images/watch.jpg";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteCartApi, getCartItemsAPi } from "../Store/CartSlice";
import { map } from "lodash";
import emptycart from "../images/emptycart.gif";
import { useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button';

const Cart = () => {

  const dispatch = useDispatch();
   
  const [open, setOpen] = useState(false);
  const [cartId,setCartId]=useState(null)
  const {getcartitems,subtotal } = useSelector((state) => state.cart);
   
  console.log( getcartitems);

  // let itemCount= getcartitems.length
  // console.log("leng", itemCount);
    

  useEffect(() => {
    dispatch(getCartItemsAPi());
  }, []);
  
  
  // const handleClickOpen = () => {
  //   setOpen(true);
  //   setCartId(item._id)
    
  // };

  const handleClose = () => {
    setOpen(false);
  };
         

  const deletItem=(cartproductId)=>{
    dispatch(deleteCartApi(cartproductId)).then(()=>{
      dispatch(getCartItemsAPi())
    })
     
  }
  // useEffect(() => {
  //   let subtotal = 0;
  //   for (let i = 0; i < getcartitems.length; i++) {
  //     const item = getcartitems[i];
  //     if (item?.product && item.product.price && item.quantity) { 
  //       subtotal += item.product.price.actualPrice * item.quantity;
  //     }
     
  //   }
  //   setTotal(subtotal);
    
  // }, [getcartitems]);
    
  
  return (
    <>
     <Dialog 
        open={open}
        onClose={()=>handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete CartItem!!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Are you Sure ? Do you want to delete?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={()=>{deletItem(cartId); setOpen(false)}} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <section className="cart-wrapper home-wrapper-2 py-5">
        <>
        { getcartitems.length === 0?(
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
                   {map(getcartitems,(item)=>(
                           <div className="cart-data py-3 d-flex justify-content-between align-items-center">
                           <div className="cart-col-1 d-flex gap-15 align-items-center">
                             <div className="w-25">
                               <img src={item?.items?.[0]?.product?.images?.[0]?.url} className="img-fluid" alt="product name" />
                             </div>
                             <div className="w-75">
                               <p>{item?.items?.[0]?.product?.name}</p>
                               <p>{item?.items?.[0]?.product?.brand}</p>
                             </div>
                           </div>
                           <div className="cart-col-2">
                             <h5 className="price"> ${item?.items?.[0]?.product?.price?.actualPrice}</h5>
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
                                 value={item?.items?.[0]?.quantity}
                               />
                             </div>
                             <div>
                               <MdDelete style={{cursor:'pointer',fontSize:'30px'}} 
                               onClick={()=>{ setOpen(true);
                               setCartId(item._id)}}className="text-danger" />
                             </div>
                           </div>
                           <div className="cart-col-4">
                             <h5 className="price"> {item?.items?.[0]?.product?.price?.actualPrice*item?.items?.[0]?.quantity}</h5>
                           </div>
                         </div>
                   ))}
           
            </div>
            <div className="col-12 py-2 mt-4">
              <div className="d-flex justify-content-between align-items-baseline">
                <Link to="/" className="button">
                  Continue To Shopping
                </Link>
                <div className="d-flex flex-column align-items-end">
                  <h4>Sub Total:{subtotal}</h4>
                  <p>Taxes and shipping calculated at checkout</p>
                  <Link to="/checkout" className="button">
                    Check Out
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        )}
        </>
      </section>
    </>
  );
};

export default Cart;
