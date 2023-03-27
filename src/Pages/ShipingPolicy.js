import React from 'react'
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";

const ShipingPolicy = () => {
  return (
    <>
      <Meta title={"ShipingPolicy"} />
      <BreadCrumb title="ShipingPolicy" />
      <section className='policy-wrapper py-5 home-wrapper-2'>
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="policy"></div>
                </div>
            </div>
        </div>
      </section>
      
    </>
  )
}

export default ShipingPolicy
