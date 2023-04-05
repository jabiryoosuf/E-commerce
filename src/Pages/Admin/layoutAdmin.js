import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../Components/Admin-components/Header'
import SidebarNew from '../../Components/Admin-components/sidebar'

const LayoutAdmin = () => {
  return (
    <div>
        <Header/>
        <div style={{display:"flex"}}>
        <SidebarNew/>
        <Outlet/>
       
        </div>
       
    </div>
  )
}
export default LayoutAdmin;
