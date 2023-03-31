import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MessageIcon from '@mui/icons-material/Message';
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PersonIcon from '@mui/icons-material/Person';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import "../../styles/sidebar.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import { color, style } from "@mui/system";
const SidebarNew = () => {

     
  
    const { collapseSidebar } = useProSidebar();




  return (
    <div id="app"  style={({ height: "100vh" }, { display: "flex" })}>
      
      <Sidebar backgroundColor="#16213E"  style={{ height: "100vh",border:"none",color:"white"}}>
        <Menu>
          <MenuItem  className="sidebar"

            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            
            <h2>Admin</h2>
          </MenuItem>
          
          <MenuItem  className="sidebar" icon={<HomeOutlinedIcon />}>Home</MenuItem>
          <Link  to={'/allproducts'}  >
          <MenuItem className="sidebar " icon={<ShoppingCartIcon />}>Products</MenuItem></Link>
          <Link style={{textDecoration:"none"}} to="/addproducts"  >
          <MenuItem style={{textDecoration:"none"}}  className="sidebar" icon={<AddShoppingCartIcon />}>AddProducts</MenuItem>
          </Link>
          <MenuItem  className="sidebar" icon={<PersonIcon />}>Profile</MenuItem>
          <MenuItem  className="sidebar" icon={<MessageIcon  />}>Message</MenuItem>
          <MenuItem  className="sidebar" icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
        </Menu>
      </Sidebar>
      
    </div>
  )
}

export default SidebarNew
