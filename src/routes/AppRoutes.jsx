import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "../pages/Home";
import MainLayout from "../components/layout/MainLayout";
import Skincare from "../pages/Skincare"
import Haircare from "../pages/Haircare"
import Makeup from "../pages/Makeup"
import ProductDetails from "../pages/ProductDetails"
import CartPage from "../pages/CartPage"
import CheckoutPage from "../pages/CheckoutPage"
import NotFound from "../pages/NotFound"
import Products from "../pages/Products";
// Import your new categories page container
import Categories from "../pages/Categories";

// Inside your main Route element stream stack block


function AppRoutes(){
    return(
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
             <Route path="/" element = {<Home />} />
             <Route path="/skincare" element = {<Skincare />} />
             <Route path="/haircare" element = {<Haircare />} />
             <Route path="/products" element={<Products />} /> 
             <Route path="/makeup" element = {<Makeup />} />
             <Route path="/product/:id" element = {<ProductDetails />} />
             <Route path="/cart" element = {<CartPage />} />
             <Route path="/checkout" element = {<CheckoutPage />} />
             <Route path="*" element = {<NotFound />} />
             <Route path="/categories" element={<Categories />} />
        </Route> 
          </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;