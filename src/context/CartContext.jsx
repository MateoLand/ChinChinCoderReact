import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar un producto al carrito
  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(cart.map((prod) => 
        prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod
      ));
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  // Verificar si un producto está en el carrito
  const isInCart = (id) => cart.some((prod) => prod.id === id);

  // Remover un producto por su ID
  const removeItem = (id) => setCart(cart.filter((prod) => prod.id !== id));

  // Vaciar el carrito
  const clear = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};
