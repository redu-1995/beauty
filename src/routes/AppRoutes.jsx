import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "../pages/Home";
import Skincare from "../pages/Skincare"
import Haircare from "../pages/Haircare"
import Makeup from "../pages/Makeup"
import ProductDetails from "../pages/ProductDetails"
import CartPage from "../pages/CartPage"
import CheckoutPage from "../pages/CheckoutPage"
import NotFound from "../pages/NotFound"

function AppRoutes(){
    return(
        <BrowserRouter>
          <Routes>
             <Route path="/" element = {<Home />} />
             <Route path="/skincare" element = {<Skincare />} />
             <Route path="/haircare" element = {<Haircare />} />
             <Route path="/makeup" element = {<Makeup />} />
             <Route path="/product/:id" element = {<ProductDetails />} />
             <Route path="/cart" element = {<CartPage />} />
             <Route path="/checkout" element = {<CheckoutPage />} />
             <Route path="*" element = {<NotFound />} />
             
          </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;