import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  console.log(location);
  return (
    <>
      <div
        className={` ${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img
              src="images/watch.jpg "
              className="img-fluid"
              alt="product image"
            />
            <img
              src="images/speaker.jpg "
              className="img-fluid"
              alt="product image"
            />
          </div>
          <div className="product-details">
            <h6>havels</h6>
            <h5 className="product-title">
              kids headphones bulk pack multi coloed for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value="3"
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid===12 ?"d-block" : "d-none"}`}>
              Lorem ipsum consequuntur illum tenetur tempore dignissimos, animi
              ratione quibusdam odio culpa, rerum accusantium voluptate ut ipsam
              accusamus aperiam minima? Culpa delectus voluptas itaque accusamus
              provident cumque ullam beatae nesciunt similique quibusdam, ea
              quae, animi vero ratione perspiciatis!
            </p>

            <p className="price">$1000.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column">
              <Link>
                <img src="images/prodcompare.svg" alt="addcart" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="addcart" />
              </Link>

              <Link>
                <img src="images/add-cart.svg" alt="addcart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={` ${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img
              src="images/watch.jpg "
              className="img-fluid"
              alt="product image"
            />
            <img
              src="images/speaker.jpg "
              className="img-fluid"
              alt="product image"
            />
          </div>
          <div className="product-details">
            <h6>havels</h6>
            <h5 className="product-title">
              kids headphones bulk pack multi coloed for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value="3"
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid===12 ?"d-block" : "d-none"}`}>
              Lorem ipsum consequuntur illum tenetur tempore dignissimos, animi
              ratione quibusdam odio culpa, rerum accusantium voluptate ut ipsam
              accusamus aperiam minima? Culpa delectus voluptas itaque accusamus
              provident cumque ullam beatae nesciunt similique quibusdam, ea
              quae, animi vero ratione perspiciatis!
            </p>

            <p className="price">$1000.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column">
              <Link>
                <img src="images/prodcompare.svg" alt="addcart" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="addcart" />
              </Link>

              <Link>
                <img src="images/add-cart.svg" alt="addcart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
