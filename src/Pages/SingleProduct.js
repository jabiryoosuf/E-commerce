import React, { useState,useEffect } from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ProductCard from "../Components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
const SingleProduct = () => {
  const [orderedProduct, setOrderedProduct] = useState(true);
  const props = {
    width: 400,
    height: 500,
    zoomWidth: 500,
    img: "https://staticimg.titan.co.in/Titan/Catalog/1810NP01_1.jpg?impolicy=pqmed&imwidth=640",
  };
useEffect(()=>{
  window.scrollTo(0,0)
},[])


  return (
    <>
      {/* <Header /> */}
      <Meta title={"SingleProduct"} />
      <BreadCrumb title="SingleProduct" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-image d-flex">
                <div>
                  <img
                    src="https://staticimg.titan.co.in/Titan/Catalog/1810NP01_1.jpg?impolicy=pqmed&imwidth=640"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="https://staticimg.titan.co.in/Titan/Catalog/1810NP01_1.jpg?impolicy=pqmed&imwidth=640"
                    alt=""
                    className="img-fluid"
                  />
                </div>

                <div>
                  <img
                    src="https://staticimg.titan.co.in/Titan/Catalog/1810NP01_1.jpg?impolicy=pqmed&imwidth=640"
                    alt=""
                    className="img-fluid"
                  />
                </div>

                <div>
                  <img
                    src="https://staticimg.titan.co.in/Titan/Catalog/1810NP01_1.jpg?impolicy=pqmed&imwidth=640"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    ex vero voluptatem est ab. Animi!
                  </h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">$100</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value="3"
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 t-review">(2 reviews)</p>
                  </div>
                  <a className="review-btn" href="#review">
                    write areview
                  </a>
                </div>
                <div className="border-bottom py-3">
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Type:</h3>{" "}
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Brand:</h3>{" "}
                    <p className="product-data">havels</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Category:</h3>{" "}
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Tags:</h3>{" "}
                    <p className="product-data">watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Availability:</h3>{" "}
                    <p className="product-data">In stock</p>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-2">
                    <h3 className="product-heading">Size:</h3>
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge border border-1 bg-white text-dark borde-secondary">
                        S
                      </span>
                      <span className="badge border border-1 bg-white text-dark borde-secondary">
                        M
                      </span>

                      <span className="badge border border-1 bg-white text-dark borde-secondary">
                        XL
                      </span>
                      <span className="badge border border-1 bg-white text-dark borde-secondary">
                        XXL
                      </span>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-2">
                    <h3 className="product-heading">Color:</h3>{" "}
                  </div>
                  <div className="d-flex gap-15 flex-row align-items-center mt-2 mb-2">
                    <h3 className="product-heading">Quantity:</h3>{" "}
                    <div className="">
                      <input
                        type="number"
                        name=""
                        min={1}
                        max={10}
                        className="form-control"
                        style={{ width: "70px" }}
                        id=""
                      />
                    </div>
                    <div className="d-flex align-items-center gap-10 ms-5">
                      <button className="button border-0 " type="submit">
                        Add to Cart
                      </button>
                      <button className="button signup border-0">
                        Buy It Now
                      </button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <div>
                      <a href="">
                        {" "}
                        <TbGitCompare className="fs-5 me-2" />
                        Add to Compare
                      </a>
                    </div>
                    <div>
                      <a href="">
                        {" "}
                        <AiOutlineHeart className="fs-5 me-2" />
                        Add to Wishlist
                      </a>
                    </div>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Shipping & Returns</h3>
                    <p className="product-data">
                      Free shipping and returns available on all orders! We ship
                      all US domestic orders within 5-10 business days!
                    </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Materials</h3>
                    <p className="product-data">
                      Running Shoes cushions your stride with soft foam to keep
                      you running in comfort. Lightweight knit material wraps
                      your foot in breathable support, while a minimalist design
                      fits in just about anywhere your day takes you
                    </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Care Instructions</h3>
                    <p className="product-data">
                    Use a soft damp cloth and a drop of mild soap to remove any haze. Air dry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="bg-white p-3">
                <h4>Description</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias aspernatur atque deserunt incidunt? Harum, iste
                  suscipit nihil aliquid corrupti cum ut obcaecati reiciendis
                  sit unde earum laboriosam, accusamus corporis sapiente omnis
                  consequuntur? Accusantium quia, ad quasi libero error repellat
                  sunt earum, eveniet reiciendis aliquid tempore distinctio
                  labore quidem corrupti recusandae.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h4 id="review" className="mb-2">
        Customer Reviews
      </h4>
      <section className="reviews-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between ">
                  <div>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        value="3"
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">based on 2 reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a
                        className="text-dark text-decoration-underline"
                        href=""
                      >
                        {" "}
                        write a review
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <div>
                    <h4 className="mb-2">Write a Review</h4>
                    <form action="" className="d-flex flex-column gap-15">
                      <div>
                        <ReactStars
                          count={5}
                          size={24}
                          value="3"
                          edit={true}
                          activeColor="#ffd700"
                        />
                      </div>

                      <div>
                        <textarea
                          name=""
                          id=""
                          className="w-100 form-control"
                          placeholder="comment"
                          cols="30"
                          rows="3"
                        ></textarea>
                      </div>
                      <div className="d-flex justify-content-end">
                        <button className="button border-0">
                          Submit Review
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default SingleProduct;
