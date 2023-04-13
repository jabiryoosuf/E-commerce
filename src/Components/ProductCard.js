import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import { map } from "lodash";

import Heart from "../images/heart.png";
import RedHeart from "../images/heart (1).png";
import { useDispatch, useSelector } from "react-redux";
import { RemovewishListApi, addwishListApi } from "../Store/wishSlice";


const ProductCard = (props) => {
  const [selectedProductId, setSelectedProductId] = useState(null);
  // const [wish,setWish]=useState(Heart)
  // const {wishList}=useSelector((state)=>state.wishList)

  const dispatch = useDispatch();
  console.log("singleProduct", props.product);

  const { grid } = props;
  let location = useLocation();
  console.log(props.product);

  const handleWishClick = (productId) => {
    console.log(productId);
    if(selectedProductId === productId){
      setSelectedProductId(null)
      dispatch(RemovewishListApi(productId))
    } else{
      setSelectedProductId(productId)
      dispatch(addwishListApi(productId))
    }
  };
// useEffect(()=>{
// const existingwishItem = wishList?.[0]?.products.find((item) => item?._id === selectedProductId);
//   if(existingwishItem){
//     setWish(RedHeart)
//   }else{
//     setWish(Heart)
//   }
// },[])

  return (
    <>
      {map(props.product, (product,_id) => (
        <div
          key={_id}
          className={`product-card position-relative ${
            location.pathname == "/ourstore" ? `gr-${grid}`  : "col-3" 
          }`}
        >
          <div className="wishlist-icon position-absolute">
            <img
              style={{ width: "20px" }}
              onClick={() => handleWishClick(product._id)}
              // src={wish}
              src={selectedProductId === product._id ? RedHeart : Heart}
              alt="wishlist"
            />
          </div>
          <Link to={`/product/${product._id}`}>
            <div className="product-image ">
              <img
                src={product?.images?.[0]?.url}
                className="img-fluid"
                alt="product-img"
              />
            </div>

            <div className="product-details">
              <h6>{product?.name}</h6>
              <h5 className="product-title">{product.description}</h5>
              <ReactStars
                count={5}
                size={24}
                value="3"
                edit={false}
                activeColor="#ffd700"
              />
              <p
                className={`description ${grid === 12 ? "d-block" : "d-none"}`}
              >
                Lorem ipsum consequuntur illum tenetur tempore dignissimos,
                animi ratione quibusdam odio culpa, rerum accusantium voluptate
                ut ipsam accusamus aperiam minima? Culpa delectus voluptas
                itaque accusamus provident cumque ullam beatae nesciunt
                similique quibusdam, ea quae, animi vero ratione perspiciatis!
              </p>

              <p className="price">{product.price?.actualPrice}</p>
            </div>
            <div className="action-bar position-absolute">
              <div className="d-flex flex-column">
                <Link>
                  <img src={prodcompare} alt="addcart" />
                </Link>
                <Link>
                  <img src={view} alt="addcart" />
                </Link>

                <Link>
                  <img src={addcart} alt="addcart" />
                </Link>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
