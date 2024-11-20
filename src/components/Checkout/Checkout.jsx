import { useState } from "react";
import { useCart } from "../../context/CartContext";
import db from "../../db/db";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Checkout = () => {
  const { cart, totalPrice, clear } = useCart();
  const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState("");

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  // Validar datos
  const validateInputs = () => {
    if (!buyer.name || !buyer.email || !buyer.phone) {
      setError("Por favor completa todos los campos.");
      return false;
    }
    return true;
  };

  // Crear orden en Firestore
  const handleCheckout = async () => {
    if (!validateInputs()) return;

    const order = {
      buyer,
      items: cart.map(({ id, name, quantity, price }) => ({
        id,
        name,
        quantity,
        price,
      })),
      total: totalPrice,
      date: serverTimestamp(),
    };

    try {
      const ordersRef = collection(db, "orders");
      const docRef = await addDoc(ordersRef, order);
      setOrderId(docRef.id);
      clear(); // Vaciar carrito
    } catch (error) {
      setError("Hubo un error al procesar tu compra. Intenta de nuevo.");
      console.error("Error al crear la orden:", error);
    }
  };

  return (
    <div className="container py-4">
      <h2>Finalizar Compra</h2>
      {orderId ? (
        <div className="alert alert-success">
          <h4>¡Compra confirmada!</h4>
          <p>Tu ID de compra es: <strong>{orderId}</strong></p>
        </div>
      ) : (
        <>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={buyer.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={buyer.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Teléfono</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              value={buyer.phone}
              onChange={handleChange}
            />
          </div>
          {error && <p className="text-danger">{error}</p>}
          <button
            className="btn btn-primary mt-3"
            onClick={handleCheckout}
            disabled={cart.length === 0}
          >
            Confirmar Compra
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
