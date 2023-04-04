import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch-2.avif";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import { map } from "lodash";

const ProductCard = (props) => {
  console.log("singleProduct", props.product);
  const { grid } = props;
  let location = useLocation();
  console.log(props.product);
  return (
    <>
      {map(props.product, (product) => (
        <div
          className={` ${
            location.pathname == "/store" ? `gr-${grid}` : "col-3"
          }`}
        >
          <Link to={`/product/${product._id}`} className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
              <Link>
                <img src={wish} alt="wishlist" />
              </Link>
            </div>

            <div className="product-image">
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
