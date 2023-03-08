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
      <Route path="/blogs"element={<Blogs/>} />
      <Route path="/contact"element={<Contact/>} />
      <Route path="/compare-product"element={<CompareProduct/>} />
      <Route path="/wishlist"element={<Wishlist/>} />
      <Route path="/login"element={<Login/>} />
      <Route path="/forgot-password"element={<Forgotpassword/>} />
      <Route path="/sign-up"element={<SignUp/>} />
      <Route path="/reset-password"element={<ResetPassword/>} />



     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
