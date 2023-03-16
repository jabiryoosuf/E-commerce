import React from 'react'
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const RefundPolicy = () => {
  return (
    <>
         {/* <Header /> */}
      <Meta title={"RefundPolicy"} />
      <BreadCrumb title="RefundPolicy" /> 
      <section className='policy-wrapper py-5 home-wrapper-2'>
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="policy"></div>
                </div>
            </div>
        </div>
      </section> 
      {/* <Footer/>     */}
    </>
  )
}

export default RefundPolicy
