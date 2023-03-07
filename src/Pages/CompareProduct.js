import React from 'react'
import BreadCrumb from "../Components/BreadCrumb";
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Meta from "../Components/Meta";

const CompareProduct = () => {
  return (
    <>
    <Header/>
          <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />
      <Footer/>
    </>
  )
}

export default CompareProduct
