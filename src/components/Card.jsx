import { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "./Modal";

export const Card = ({ extraerData, contact }) => {
  const [modal, setModal] = useState(false);

  return (
    <article className="card-gradient">
      <div className="name">
        {contact.name}
      </div>
      
      <div className="info-item">
        <span className="icon">📞</span>
        <span><strong>Teléfono:</strong> {contact.phone}</span>
      </div>
      
      <div className="info-item">
        <span className="icon">✉️</span>
        <span><strong>Email:</strong> {contact.email}</span>
      </div>
      
      <div className="info-item">
        <span className="icon">📍</span>
        <span><strong>Dirección:</strong> {contact.address}</span>
      </div>

      <div className="actions">
        <Link to={`/edit-contact/${contact.id}`}>
          <button className="btn">✏️</button>
        </Link>

        <button
          onClick={() => setModal(true)}
          type="button"
          className="btn"
          data-bs-toggle="modal"
          data-bs-target={`#delete-${contact.id}`}
        >
          🗑️
        </button>

        <Modal extraerData={extraerData} contact={contact} />
      </div>
    </article>
  );
};
                                                                                                                                                                                                                                                                                        

