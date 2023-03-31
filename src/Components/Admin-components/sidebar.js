import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MessageIcon from "@mui/icons-material/Message";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PersonIcon from "@mui/icons-material/Person";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "../../styles/sidebar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
const SidebarNew = () => {
  const { collapseSidebar } = useProSidebar();

  return (
    <div id="app">
      <Sidebar
        backgroundColor="#16213E"
        style={{ height: "100vh", border: "none", color: "white" }}
      >
        <Menu>
          <MenuItem
            className="sidebar"
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            <h2>Admin</h2>
          </MenuItem>
          <CustomLink to="/admin">
     
      
  
            <MenuItem className="sidebar" icon={<HomeOutlinedIcon />}>
              Home
            </MenuItem>
          
          </CustomLink>
          <CustomLink to="/allproducts">
            <MenuItem className="sidebar" icon={<ShoppingCartIcon />}>
              Products
            </MenuItem>
          </CustomLink>
          <CustomLink to="/addproducts">
            <MenuItem
              style={{ textDecoration: "none" }}
              className="sidebar"
              icon={<AddShoppingCartIcon />}
            >
              AddProducts
            </MenuItem>
          </CustomLink>
          <MenuItem className="sidebar" icon={<PersonIcon />}>
            Profile
          </MenuItem>
          <MenuItem className="sidebar" icon={<MessageIcon />}>
            Message
          </MenuItem>
          <MenuItem className="sidebar" icon={<CalendarTodayOutlinedIcon />}>
            Calendar
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SidebarNew;

const CustomLink = ({ to, children, ...props }) => {
  const resolvedpath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedpath.pathname, end: true });
  const linkStyle = {
    color: isActive ? "#475BE8" : "white",
    width: "100%",
  };
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} style={linkStyle} {...props}>
        {children}
      </Link>
    </li>
  );
};
