import { Link } from "react-router-dom";

export const Card = ({ contact }) => {
  return (

    
    <div className="card my-2">
      <div className="card-header fw-bold bg-light">Contacto: {contact.name}</div>
      <div className="card-body bg-dark text-white text-start rounded p-4">
        <p>☎️ <strong>Telefono:</strong> {contact.phone}</p>
        <p>📧 <strong>Email:</strong> {contact.email}</p>
        <p>📍 <strong>Dirección:</strong> {contact.address}</p>

        <div className="d-flex justify-content-end gap-2">
          <Link to={`/edit-contact/${contact.id}`}>
            <button className="btn btn-success">✏️</button>
          </Link>

          <button className="btn btn-danger">🗑️</button>
        </div>
      </div>
    </div>
  );
};
