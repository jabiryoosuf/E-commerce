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
import {
  RemovewishListApi,
  addwishListApi,
  getwishListApi,
} from "../Store/wishSlice";

const ProductCard = (props) => {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getwishListApi());
  }, [dispatch]);

  const { wishlist, allproduct } = useSelector((state) => ({
    wishlist: state.wishList.wishlist,
    allproduct: state.products.allproduct,
  }));
  const wishlistProducts = wishlist?.product;

  console.log("singleProduct", props.product);

  const { grid } = props;
  let location = useLocation();
  console.log(props.product);

  const handleWishClick = (wishproductId) => {
    if (selectedProductId === wishproductId) {
      setSelectedProductId(null);
      dispatch(addwishListApi(wishproductId));
    } else {
      setSelectedProductId(wishproductId);
      dispatch(addwishListApi(wishproductId));
    }
  };

  return (
    <>
      {map(props.product, (product, _id) => (
        <div
          key={_id}
          className={`product-card position-relative ${
            location.pathname == "/ourstore" ? `gr-${grid}` : "col-3"
          }`}
        >
          <div className="wishlist-icon position-absolute">
            <img
              onClick={() => handleWishClick(product?._id)}
              style={{ width: "20px" }}
              src={selectedProductId === product?._id ? RedHeart : Heart}
              alt="wishlist"
            />
          </div>
          <Link to={`/product/${product._id}`}>
            <div className="product-image ">
              <img
                style={{ height: "250px" }}
                src={product?.images?.[0]?.url}
                className="img-fluid"
                alt="product-img"
              />
            </div>

            <div className="product-details">
              <h6>{product?.name}</h6>
              {/* <h5 className="product-title">{product.description}</h5> */}
              <h5 className="product-title"></h5>

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
              <div style={{ display: "flex" }}>
                <p  className="price">
                  ₹ {product.price?.actualPrice}
                  <button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "120px",
                      height: "30px",
                      marginLeft: "100px",
                      fontSize: "10px",
                    }}
                    className="button border-0 "
                  >
                    Add to Cart
                  </button>
                </p>
              </div>
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
