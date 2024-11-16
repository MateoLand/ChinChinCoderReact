import { Link } from "react-router-dom";


export const Item = ({id, name, img, description }) => {
  return (
    <div className="border m-2">
      <div className="card ">
        <div className="card-body ">
          <h5 className="card-title text-light">{name}</h5>
          <img src={img} alt="" style={{ width: "175px", height: "auto" }}/>
          <p className="card-text"> {description} </p>
          <Link to={`/item/${id}`}>
            <button className="btn btn-outline-danger">Detalles</button>
          </Link>
        </div>
      </div>
    </div>
  );
};