import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";

import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import { map } from "lodash";
import heart from "../images/heart.png";
import redHeart from "../images/redHeart.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addwishListApi } from "../Store/WishlistSlice";
import { logDOM } from "@testing-library/react";

const ProductCard = (props) => {
  const [selectedProductId, setSelectedProductId] = useState(null);

  const dispatch = useDispatch();
  console.log("singleProduct", props.product);
  const { grid } = props;

  const handleWishClick = (wishproductId) => {
    if (selectedProductId === wishproductId) {
      setSelectedProductId(null);
      dispatch(addwishListApi(wishproductId));
    } else setSelectedProductId(wishproductId);
    dispatch(addwishListApi(wishproductId));
  };
  let location = useLocation();
  console.log(props.product);
  return (
    <>
      {map(props.product, (product, _id) => (
        <div
          key={_id}
          className={`product-card position-relative ${
            location.pathname === "/ourstore" ? `gr-${grid}` : "col-3"
          }`}
        >
          <div className="wishlist-icon position-absolute">
            {/* <Link> */}
            <img
              onClick={() => handleWishClick(product?._id)}
              style={{ width: "20px" }}
              src={selectedProductId === product?._id ? redHeart : heart}
              alt="wishlist"
            />
            {/* </Link> */}
          </div>
          <Link to={`/product/${product?._id}`}>
            <div className="product-image">
              <img
                src={product?.images?.[0]?.url}
                className="img-fluid"
                alt="product-img"
              />
            </div>

            <div className="product-details">
              <h6>{product?.name}</h6>
              {/* <h5 className="product-title">{product.description}</h5> */}
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
              <div style={{ dispaly: "flex"  }}>
                <p className="price">{product.price?.actualPrice}</p>
                <button
                  className="card button"
                  style={{
                    border: "none",
                    width: "100px",
                    height: "30px",
                    borderRadius: "12px",
                    fontSize: "10px",
                    marginLeft: "120px",
                    paddingTop:"2px",
                    maxLines:"25px"
                    
                    //  textAlign:'center'
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
