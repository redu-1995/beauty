import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "../pages/Home";
import MainLayout from "../components/layout/MainLayout";
import SkincarePage from "../pages/Skincare.jsx";
import Haircare from "../pages/Haircare"
import Makeup from "../pages/Makeup"
import ProductDetails from "../pages/ProductDetails"
import CartPage from "../pages/CartPage"
import CheckoutPage from "../pages/CheckoutPage"
import NotFound from "../pages/NotFound"
import Products from "../pages/Products";
import Categories from "../pages/Categories";
import About from "../pages/About.jsx"
import Contact from "../pages/Contact.jsx"
import Perfume from "../pages/Perfume.jsx";

// Inside your main Route element stream stack block


function AppRoutes(){
    return(
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
             <Route path="/" element = {<Home />} />
             <Route path="/skincare" element={<SkincarePage />} />
             <Route path="/makeup" element={<Makeup />} />
             <Route path="/haircare" element={<Haircare />} />
             <Route path="/products" element={<Products />} />
             <Route path="/product/:id" element = {<ProductDetails />} />
             <Route path="/cart" element = {<CartPage />} />
             <Route path="/checkout" element = {<CheckoutPage />} />
             <Route path="*" element = {<NotFound />} />
             <Route path="/categories" element={<Categories />} />
             <Route path="/about" element={<About />} />
             <Route path="/contact" element={<Contact />} />
             <Route path="/perfumes" element={<Perfume />} />


        </Route> 
          </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;