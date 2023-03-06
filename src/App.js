import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Components/Layout";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import "./App.css"
import OurStore from "./Pages/OurStore";
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
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
