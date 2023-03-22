import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Components/Layout";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import "./App.css"
import OurStore from "./Pages/OurStore";
import Blogs from "./Pages/Blogs";
import CompareProduct from "./Pages/CompareProduct";
import Wishlist from "./Pages/Wishlist";
import Forgotpassword from "./Pages/Forgotpassword";
import SignUp from "./Pages/SignUp";
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
import Login from "./Pages/Login";
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route element={<Layout/>}>
      <Route path="/"element={<Home/>}/>
      <Route path="/about"element={<About/>}></Route>
      <Route path="/contact"element={<Contact/>} ></Route>
      <Route path="/store"element={<OurStore/>} ></Route>
      <Route path="/product/:id"element={<SingleProduct/>} ></Route>
      <Route path="/blogs"element={<Blogs/>}></Route>
      <Route path="/cart"element={<Cart/>} ></Route>
      <Route path="/checkout"element={<Checkout/>} ></Route>
      <Route path="/singleblogs/:id"element={<Singleblogs/>} ></Route>
      <Route path="/contact"element={<Contact/>} ></Route>
      <Route path="/compare-product"element={<CompareProduct/>} ></Route>
      <Route path="/wishlist"element={<Wishlist/>} ></Route>
      <Route path="/login"element={<Login/>} ></Route>
      <Route path="/forgot-password"element={<Forgotpassword/>} ></Route>
      <Route path="/sign-up"element={<SignUp/>} ></Route>
      <Route path="/terms-condition"element={<TremsAndContion/>}></Route>
      <Route path="/refund-policy"element={<RefundPolicy/>} ></Route>
      <Route path="/shipping-policy"element={<ShipingPolicy/>} ></Route>
      <Route path="/Privacy-policy"element={<PrivacyPolicy/>} ></Route>




     
      </Route>

    
     <Route path="/reset-password/:id"element={<ResetPassword/>} ></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
