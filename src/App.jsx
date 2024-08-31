import { Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Pages/Home";
import { Footer } from "./Components/Footer";
import { Collections } from "./Pages/Collections";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { ProductInfo } from "./Pages/ProductInfo";
import { Login } from './Pages/Login';
import { useEffect, useState } from "react";
import { Cart } from "./Pages/Cart";
function App() {
  // Get location for path reference
  const location = useLocation();
  const [sidebar, setSidebar] = useState(false);
  // Use Effect using for load webpage to top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  return (
    <>
      <Navbar location={location} sidebar={sidebar} setSidebar={setSidebar} />
      <div className="group px-4 sm:px-[5vw] md:px-[7vw] lg:px-[8vw]">

        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductInfo />} />
          <Route path='/login' element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
        <hr />
        <p className="text-sm mt-2 font-medium text-center py-2">Created by sathishjk</p>
      </div>
    </>
  )
};

export default App
