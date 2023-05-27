import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
import { hover } from "@testing-library/user-event/dist/hover";
import { width } from "@mui/system";
import { toast } from "react-toastify";
import { cartApi, getcartApi } from "../Store/CartSlice";

const ProductCard = (props) => {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getwishListApi());
  }, [dispatch]);

  const { wishlist,cartItems, allproduct } = useSelector((state) => ({
    wishlist: state.wishList.wishlist,
    cartItems: state.cart.cartItems,
    allproduct: state.products.allproduct,
  }));


  console.log(allproduct);
 
  const wishlistProducts = wishlist?.product;
const navigate = useNavigate()
  console.log("singleProduct", props.product);

  const { grid } = props;
  let location = useLocation();
  console.log(props.product);

  const handleWishClick = (wishproductId) => {
    if (selectedProductId === wishproductId) {
      setSelectedProductId(null);
      dispatch(addwishListApi(wishproductId));
    }
     else {
      setSelectedProductId(wishproductId);
      dispatch(addwishListApi(wishproductId));
    }
  };
  const AddtoCart = (productId) => {
    console.log(productId);
    if (sessionStorage.role === "user") {
      const existingCartItem = cartItems.find(
        (item) => item?.items?.[0]?.product?._id === productId
      )
      if (existingCartItem) {
        alert("Product already exist")
      } else {
        dispatch(cartApi({ productId, quantity, navigate }));
        toast.success("Add to cart success",{ autoClose: 1000 });
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      {map(allproduct, (product, _id) => (
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
          <Link to={`/product/${product._id}`} style={{width: "100%"}}>
            <div className="product-image" >
              <img
                style={{ height: "250px", width:"100%" }}
                src={product?.images?.[0]?.url}
                className="img-fluid"
                alt="product-img"
              />
            </div>

            <div className="product-details">
              <h6>{product?.title}</h6>
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
              <div style={{ display: "flex" }}>
                <p className="price">₹ {product.price}</p>
                <button className="card-button"
                onClick={()=>AddtoCart(product._id)}
                  style={{
                    // background: "#232f3e",
                    // color: "white",
                    border: "none",
                    width: "100px",
                    height: "30px",
                    borderRadius: "12px",
                    fontSize: "10px",
                    marginLeft: "100px",

                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
            {/* <div className="action-bar position-absolute">
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
            </div> */}
          </Link>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
