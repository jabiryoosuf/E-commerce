import React, { useState, useEffect } from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import ProductCard from "../Components/ProductCard";
import ReactStars from "react-rating-stars-component";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { SingleProductApi } from "../Store/ProductSlice";
import { useNavigate, useParams } from "react-router-dom";
import { cartApi } from "../Store/CartSlice";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  // const [products, setProducts] = useState();
  const [orderedProduct, setOrderedProduct] = useState(true);

  const { singleproduct } = useSelector((state) => state.products);

  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = params.id;

  const productImage = singleproduct?.images?.[0]?.url;

  useEffect(() => {
    dispatch(SingleProductApi(product));
  }, []);

  const AddtoCart =async(e) => {
    e.preventDefault();
    // const product = {product: productId,quantity};
    // setProducts({ products: product })
      //  console.log(products);
    await dispatch(cartApi({product,quantity,navigate}))
  
 
  };

  // console.log(products);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Meta title={"SingleProduct"} />
      <BreadCrumb title="SingleProduct" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* <ReactImageZoom {...props} /> */}
                  <img
                    src={productImage}
                    alt="product pictur"
                    style={{ width: "400px", height: "400px" }}
                  />
                </div>
              </div>
              <div className="other-product-image d-flex">
                <div>
                  <img src={productImage} alt="" className="img-fluid" />
                </div>
                <div>
                  <img src={productImage} alt="" className="img-fluid" />
                </div>

                <div>
                  <img src={productImage} alt="" className="img-fluid" />
                </div>

                <div>
                  <img src={productImage} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">{singleproduct?.name}</h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">$ {singleproduct?.price?.actualPrice}</p>
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
                    <p className="product-data">{singleproduct?.brand}</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Category:</h3>{" "}
                    <p className="product-data">{singleproduct?.category}</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Tags:</h3>{" "}
                    <p className="product-data">watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Availability:</h3>{" "}
                    <p className="product-data">
                      {singleproduct?.quantity > 0
                        ? singleproduct?.quantity
                        : "out of stock"}
                    </p>
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
                        name="quantity"
                        min={1}
                        max={10}
                        value={quantity}
                        className="form-control"
                        style={{ width: "70px" }}
                        id=""
                        onChange={(e) =>
                          setQuantity(e.target.value)
                        }
                      />
                    </div>
                    <div className="d-flex align-items-center gap-10 ms-5">
                      <button onClick={AddtoCart} className="button border-0 ">
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
                        <TbGitCompare className="fs-5 me-2" />
                        Add to Compare
                      </a>
                    </div>
                    <div>
                      <a href="">
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
                      Use a soft damp cloth and a drop of mild soap to remove
                      any haze. Air dry.
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
                <p>{singleproduct?.description}</p>
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
    </>
  );
};

export default SingleProduct;
