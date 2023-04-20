import React, { useEffect } from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { RemovewishListApi, getwishListApi } from "../Store/wishSlice";
import { map } from "lodash";

const Wishlist = () => {

  const {wishlist} = useSelector((state)=> state.wishList)
  console.log(wishlist);
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getwishListApi())
    window.scrollTo(0, 0);
   },[])

   const handleRemoveItem =(ItemId)=>{
    dispatch(RemovewishListApi(ItemId)).then(()=>{
      dispatch(getwishListApi())
    })
   }

  return (
    <>
      <Meta title={"WishList"} />
      <BreadCrumb title="wishList" />
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
          {map(wishlist,(wishItem) => (
            <div className="col-3" key={wishItem._id}>
           
              <div className="wishlist-card position-relative">
                <img onClick={()=>handleRemoveItem(wishItem?._id)}
                  src="images/cross.svg"
                  alt="cross"
                  className=" cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src={wishItem?.product?.images?.[0]?.url}
                    alt="watch"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">
                    {wishItem?.name}
                  </h5>
                  <h6 className="price">{wishItem?.product?.price?.actualPrice}</h6>
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
