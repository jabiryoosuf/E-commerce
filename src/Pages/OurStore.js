import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Meta from "../Components/Meta";

const OurStore = () => {
  return (
    <div>
      <Header />
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store " />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Wtach</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availability</h5>
                  <div className="form-chedck">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                      
                    />
                    <label className="form-check-label" for="">
                      In Stock (1)
                    </label>
                  </div>
                  <div className="form-chedck">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                 
                    />
                    <label className="form-check-label" for="">
                      Out Of Stock (0)
                    </label>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tag</h3>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Products</h3>
              </div>
            </div>
            <div className="col-9"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurStore;
