import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ name, description, img, price, stock }) => {

    const addToCart = (items) => { 
        alert(`Se agregaron ${items} al carrito`);
    }

    return (
        <div className="d-flex align-items-start p-3" style={{ border: "none" }}>
            <img 
                src={img} 
                alt={name} 
                style={{ width: "300px", height: "auto", marginRight: "20px" }}
            />
            <div>
                <h2 className="h2 mb-3">{name}</h2>
                <p className="mb-2">{description}</p>
                <p className="mb-3 fw-bold">Precio: ${price}</p>
                <ItemCount stock={stock} addToCart={addToCart} />
            </div>
        </div>
    );
};
