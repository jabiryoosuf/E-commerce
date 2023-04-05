import React, { useState } from "react";
import BreadCrumb from "../Components/BreadCrumb";
import Meta from "../Components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../Components/ProductCard";
import Color from "../Components/Color";

const OurStore = () => {
  const [grid,setGrid]=useState(4);
  // const gridSetter=(i)
  // alert (grid)
  return (
    <div>

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
                  <div className="form-check">
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
                  <div className="form-check">
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
                  <div>
                    <h5 className="sub-title">Price</h5>
                    <div className="d-flex align-items-center gap-10">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingInput"
                          placeholder="From"
                        />
                        <label htmlfor="floatingInput">From</label>
                      </div>
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingInput"
                          placeholder="To"
                        />
                        <label htmlfor="floatingInput">To</label>
                      </div>
                    </div>
                    <h5 className="sub-title">Colors</h5>
                    <div>
                     <Color />
                    </div>
                    <h5 className="sub-title">Size</h5>
                    <div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id=""
                        />
                        <label className="form-check-label" for="">
                          S (1)
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id=""
                        />
                        <label className="form-check-label" for="">
                          M (1)
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id=""
                        />
                        <label className="form-check-label" for="">
                          L (1)
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id=""
                        />
                        <label className="form-check-label" for="">
                          XL (1)
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id=""
                        />
                        <label className="form-check-label" for="">
                          XXL (1)
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tag</h3>
                <div>
                  <div className="product-tag d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Headphone
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Mobile
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Laptop
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Camera
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      glass
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Products</h3>
                <div>
                  <div className="random-product mb-3 d-flex">
                    <div className="w-50">
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt="watch"
                      />
                    </div>
                    <div className="w-50">
                      <h5>
                        Kids Headphones Bulk 10 Pack Multi Colored For Student
                      </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value="3"
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p>$300</p>
                    </div>
                  </div>
                  <div className="random-product d-flex">
                    <div className="w-50">
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt="watch"
                      />
                    </div>
                    <div className="w-50">
                      <h5>
                        Kids Headphones Bulk 10 Pack Multi Colored For Student
                      </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value="3"
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p>$300</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d-block" style={{width:"100px"}}>Sort By:</p>
                    <select name="" className="form-control form -select" id="">
                      <option value="manual">Featured</option>
                      <option value="best-selling" selected="selected">
                        Best selling
                      </option>
                      <option value="title-ascending">
                        Alphabetically, A-Z
                      </option>
                      <option value="best-selling" selected="selected">
                        Best selling
                      </option>
                      <option value="created-ascending">
                        Date, old to new
                      </option>
                      <option value="price-descending">
                        Price, high to low
                      </option>
                      <option value="title-descending">
                        Alphabetically, Z-A
                      </option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="total-products">21 products</p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <img onClick={()=>{
                        setGrid(12);
                      }}
                        src="images/gr.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                        <img onClick={()=>{
                        setGrid(6);
                        }}
                        src="images/gr2.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                        <img onClick={()=>{
                        setGrid(4);
                        }}
                        src="images/gr3.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                        <img onClick={()=>{
                        setGrid(3);
                        }}
                        src="images/gr4.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-list pb-5">
                <div className="d-flex gap-10 flex-wrap">
                < ProductCard grid={grid}/>
                < ProductCard grid={grid}/>
                < ProductCard grid={grid}/>
                < ProductCard grid={grid}/>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStore;
