// src/context/CartContext.jsx
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

// 💡 Make sure the word 'export' is right here!
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart }}>
      {children}
    </CartContext.Provider>
  );
}