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
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/"element={<Layout/>}/>
      {/* <Route path="/home"element={}/> */}
      <Route path="/about"element={<About/>} />
      <Route path="/contact"element={<Contact/>} />
      <Route path="/store"element={<OurStore/>} />
      <Route path="/product/:id"element={<SingleProduct/>} />
      <Route path="/blogs"element={<Blogs/>} />
      <Route path="/cart"element={<Cart/>} />
      <Route path="/checkout"element={<Checkout/>} />


      <Route path="/singleblogs/:id"element={<Singleblogs/>} />

      <Route path="/contact"element={<Contact/>} />
      <Route path="/compare-product"element={<CompareProduct/>} />
      <Route path="/wishlist"element={<Wishlist/>} />
      <Route path="/login"element={<Login/>} />
      <Route path="/forgot-password"element={<Forgotpassword/>} />
      <Route path="/sign-up"element={<SignUp/>} />
      <Route path="/reset-password"element={<ResetPassword/>} />
      <Route path="/Privacy-policy"element={<PrivacyPolicy/>} />
      <Route path="/refund-policy"element={<RefundPolicy/>} />
      <Route path="/shipping-policy"element={<ShipingPolicy/>} />
      <Route path="/terms-condition"element={<TremsAndContion/>} />




     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
