import AppRoutes from "./routes/AppRoutes";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/layout/Navbar";

function App(){
  return(
    <CartProvider>
      <AppRoutes/>
    </CartProvider>
  )
}

export default App;