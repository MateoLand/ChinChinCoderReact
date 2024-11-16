import { useState } from "react";

export const ItemCount = ({ stock, initial = 1, addToCart }) => {
  const [count, setCount] = useState(initial);
  
  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center p-4">
      <div className="d-flex align-items-center mb-2">
        <button className="btn btn-outline-secondary" onClick={decrement}>
          -
        </button>
        <strong className="mx-3">{count}</strong>
        <button className="btn btn-outline-secondary" onClick={increment}>
          +
        </button>
      </div>
      <button className="btn btn-outline-danger mt-2 w-100" onClick={() => addToCart(count)}>
        Agregar al carrito
      </button>
    </div>
  );
};
