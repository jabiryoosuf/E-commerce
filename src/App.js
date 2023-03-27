import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Components/Layout";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import "./App.css"
import OurStore from "./Pages/OurStore";
import Blogs from "./Pages/Blogs";
import CompareProduct from "./Pages/CompareProduct";
import Wishlist from "./Pages/Wishlist";
import Login from "./Pages/Login";
import Forgotpassword from "./Pages/Forgotpassword";
import Register from "./Pages/SignUp";
import ResetPassword from "./Pages/ResetPassword";
import Singleblogs from "./Pages/Singleblogs";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import RefundPolicy from "./Pages/RefundPolicy";
import ShipingPolicy from "./Pages/ShipingPolicy";
import TremsAndContion from "./Pages/TremsAndContion";
import SingleProduct from "./Pages/SingleProduct";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import DashboardHome from "./Pages/Admin/Dashboard-home";
import LayoutAdmin from "./Pages/Admin/LayoutAdmin";
import AddProducts from "./Pages/Admin/AddProducts";
function App() {
  return (
    <div className="App">
      <BrowserRouter> 
     <Routes>
      <Route element={<Layout/>}>
      <Route path="/"element={<Home/>}/>
      <Route path="/about"element={<About/>} />
      <Route path="/contact"element={<Contact/>} />
      <Route path="/store"element={<OurStore/>} />
      <Route path="/product/:id"element={<SingleProduct/>} />
      <Route path="/blogs"element={<Blogs/>} />
      <Route path="/cart"element={<Cart/>} />
      <Route path="/checkout"element={<Checkout/>} />

      <Route path="/singleblogs/:id"element={<Singleblogs/>} ></Route>

      <Route path="/contact"element={<Contact/>} ></Route>
      <Route path="/compare-product"element={<CompareProduct/>} ></Route>
      <Route path="/wishlist"element={<Wishlist/>} ></Route>
      <Route path="/login"element={<Login/>} ></Route>
      <Route path="/forgot-password"element={<Forgotpassword/>} ></Route>
      <Route path="/sign-up"element={<Register/>} ></Route>
      <Route path="/reset-password"element={<ResetPassword/>} ></Route>
      <Route path="/sign-up"element={<SignUp/>} ></Route>
     
      <Route path="/Privacy-policy"element={<PrivacyPolicy/>} ></Route>
      <Route path="/refund-policy"element={<RefundPolicy/>} ></Route>
      <Route path="/shipping-policy"element={<ShipingPolicy/>} ></Route>
      <Route path="/terms-condition"element={<TremsAndContion/>} ></Route>


      </Route>
      <Route path="/resetpassword/:id"element={<ResetPassword/>} ></Route>
      <Route element={<LayoutAdmin/>}>
      <Route path="/admin" element={<DashboardHome/>}/>
      
      <Route path='/addproducts' element={<AddProducts/>}></Route>
      </Route>
      
     </Routes>
     </BrowserRouter>
 
     {/* <AddProducts/> */}
    </div>
  );
}

export default App;
