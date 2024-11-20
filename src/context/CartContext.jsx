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

  // Calcular la cantidad total de productos en el carrito
  const totalQuantity = cart.reduce((acc, prod) => acc + prod.quantity, 0);

  // Calcular el precio total del carrito
  const totalPrice = cart.reduce((acc, prod) => acc + prod.quantity * prod.price, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, totalQuantity, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

