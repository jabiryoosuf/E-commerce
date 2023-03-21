import React from 'react'
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";

const PrivacyPolicy = () => {
  return (
    <>

      <Meta title={"PrivacyPolicy"} />
      <BreadCrumb title="PrivacyPolicy" />  
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

export default PrivacyPolicy