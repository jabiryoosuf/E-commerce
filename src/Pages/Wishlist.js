import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { RemovewishListApi, getwishListApi } from "../Store/WishlistSlice";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

const Wishlist = () => {
  const [wishproductId, setwishproductId] = useState(null);

  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const { wishList } = useSelector((state) => state.wishlist);
  console.log(wishList);

  useEffect(() => {
    dispatch(getwishListApi());
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const removewishlist = (wishproductId) => {
    dispatch(RemovewishListApi(wishproductId)).then(()=>{
      dispatch(getwishListApi(wishproductId));
    })
    
   
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={() => handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Remove from Wishlist!!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you Sure ? Do you want to remove?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              removewishlist(wishproductId);
              setOpen(false);
            }}
            autoFocus
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
      <Meta title={"WishList"} />
      <BreadCrumb title="wishList" />

      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            {wishList?.products?.map((item, key) => (
              <div className="col-3">
                <div className="wishlist-card position-relative">
                  <img
                    onClick={() => {
                      setOpen(true);
                      setwishproductId(item?._id);
                    }}
                    src="images/cross.svg"
                    alt="cross"
                    className="position-absolute cross img-fluid"
                  />
                  <div className="wishlist-card-image">
                    <img
                      src={item?.images?.[0]?.url}
                      alt="watch"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="py-3 px-3">
                    <h4>{item?.name}</h4>
                    <h5 className="title">cxc</h5>
                    <h6 className="price">$c</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
