import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from '../Pages/Home'
import Footer from './Footer'
import Header from './Header'

const Layout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      {/* <Home/> */}
      <Footer/>
    </>
  )
}

export default Layout
