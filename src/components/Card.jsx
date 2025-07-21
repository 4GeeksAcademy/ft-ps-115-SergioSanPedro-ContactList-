import { Link } from "react-router-dom";

export const Card = ({ contact }) => {
  return (

    
    <div className="card my-2">
      <div className="card-header fw-bold bg-light">Contacto: {contact.name}</div>
      <div className="card-body bg-dark text-white text-start rounded">
        <p>Telefono: {contact.phone}</p>
        <p>Email: {contact.email}</p>
        <p>Dirección: {contact.address}</p>

        <div className="d-flex justify-content-end gap-2">
          <Link to={`/edit-contact/${contact.id}`}>
            <button className="btn btn-success">Editar</button>
          </Link>

          <button className="btn btn-danger">Eliminar</button>
        </div>
      </div>
    </div>
  );
};
