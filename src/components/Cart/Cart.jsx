import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart, totalPrice, removeItem, clear } = useCart();

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">🛒 Tu carrito</h2>
      {cart.length === 0 ? (
        <div className="alert alert-info text-center">
          <p>El carrito está vacío.</p>
        </div>
      ) : (
        <>
          <div className="card shadow p-3 mb-4">
            <div className="card-body">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <div>
                    <h5 className="mb-1">{item.name}</h5>
                    <p className="mb-1">
                      <strong>Precio unitario:</strong> ${item.price}
                    </p>
                    <p className="mb-1">
                      <strong>Cantidad:</strong> {item.quantity}
                    </p>
                  </div>
                  <div className="text-end">
                    <p className="mb-1">
                      <strong>Subtotal:</strong> ${item.quantity * item.price}
                    </p>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => removeItem(item.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <h3>
              <strong>Total:</strong> ${totalPrice}
            </h3>
            <button className="btn btn-danger" onClick={clear}>
              Vaciar carrito
            </button>
            <Link to="/checkout">
            <button className="btn btn-danger">
              Finalizar Compra
            </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};


