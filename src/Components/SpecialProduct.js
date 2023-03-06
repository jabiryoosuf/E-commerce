import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProduct = () => {
  return (
    <div className="col-6">
      <div className="special-product-card mb-3">
        <div className="d-flex justify-content-between">
          <div>
            <img src="images/headphone.jpg" alt="watch" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">boat</h5>
            <h6 className="title">
              boAt Xtend Pro with Advanced Dedicated Bluetooth Callin
            </h6>
            <ReactStars
              count={5}
              size={24}
              value="3"
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="red-p">$100</span> &nbsp; <strike>$150</strike>
            </p>
            <div className="diccount-till d-flex align-items-center gap-10">
              <p className="mb-0">
                <b> 5 </b>days
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle p-3 bg-danger">1</span>:
                <span className="badge rounded-circle p-3 bg-danger">1</span>:
                <span className="badge rounded-circle p-3 bg-danger">1</span>
              </div>
              <div className="prod-count my-3">
                <p>product: 5</p>
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{width:"25%"}}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <Link className="button">Add to Cart</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
