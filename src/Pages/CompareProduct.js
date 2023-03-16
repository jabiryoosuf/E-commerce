import React from 'react'
import BreadCrumb from "../Components/BreadCrumb";
import Color from '../Components/Color';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Meta from "../Components/Meta";

const CompareProduct = () => {
  return (
    <>
    {/* <Header/> */}
          <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />
      <div className="compare-product-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img src="images/cross.svg" alt="cross" className='position-absolute cross img-fluid' />
                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="watch" />
                </div>
                <div className="compare-product-details">
                  <h5 className='title'>Honer t1 8 gb ram 7inch wuth wifi tablet</h5>
                  <h6 className='pricen mb-3 mt-3'>$100</h6>
                  <div>
                    <div className='product-details'>
                    <h5>Brand</h5>
                    <p>Havel</p>
                    </div>
                    <div className='product-details'>
                    <h5>Type</h5>
                    <p>Watch</p>
                    </div>
                    <div className='product-details'>
                    <h5>Availabilty</h5>
                    <p>In Stock</p>
                    </div>
                    <div className='product-details'>
                    <h5>color</h5>
                    <Color/>
                    </div>
                    <div className='product-details'>
                    <h5>Size</h5>
                    <div className="d-flex gap-10">
                    <p>S</p>
                    <p>M</p>



                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img src="images/cross.svg" alt="cross" className='position-absolute cross img-fluid' />
                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="watch" />
                </div>
                <div className="compare-product-details">
                  <h5 className='title'>Honer t1 8 gb ram 7inch wuth wifi tablet</h5>
                  <h6 className='pricen mb-3 mt-3'>$100</h6>
                  <div>
                    <div className='product-details'>
                    <h5>Brand</h5>
                    <p>Havel</p>
                    </div>
                    <div className='product-details'>
                    <h5>Type</h5>
                    <p>Watch</p>
                    </div>
                    <div className='product-details'>
                    <h5>Availabilty</h5>
                    <p>In Stock</p>
                    </div>
                    <div className='product-details'>
                    <h5>color</h5>
                    <Color/>
                    </div>
                    <div className='product-details'>
                    <h5>Size</h5>
                    <div className="d-flex gap-10">
                    <p>S</p>
                    <p>M</p>



                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    
      {/* <Footer/> */}
    </>
  )
}

export default CompareProduct
