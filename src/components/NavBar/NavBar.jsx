import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ChinChinLogo from "../../assets/ChinChinLogo.webp";
import { useCart } from "../../context/CartContext"; // Importar el contexto del carrito

export const NavBar = () => {
  const { cart } = useCart(); // Obtener los datos del carrito

  // Calcular la cantidad total de productos en el carrito
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to="/">
            <button className="navbar-brand">
              <img
                src={ChinChinLogo}
                alt="ChinChinLogo"
                width="30px"
                height="35px"
              />
              ChinChin
            </button>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              className="navbar-toggler-icon svg"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
              />
            </svg>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <Link to="/category/beer">
                <button className="nav-link px-3">Beer</button>
              </Link>
              <Link to="/category/wine">
                <button className="nav-link px-3">Wine</button>
              </Link>
              <Link to="/category/vodka">
                <button className="nav-link px-3">Vodka</button>
              </Link>
              <Link to="/category/whiskey">
                <button className="nav-link px-3">Whiskey</button>
              </Link>
              <Link to="/cart">
                <button className="nav-link px-3 d-flex align-items-center">
                  <FaCartShopping />
                  {totalQuantity > 0 && (
                    <span className="ms-1">{totalQuantity}</span>
                  )}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

