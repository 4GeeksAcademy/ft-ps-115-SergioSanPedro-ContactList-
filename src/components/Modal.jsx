import { Link } from "react-router-dom";
import { deleteContact, getContacts } from "../servicesApi/contactsApi";

export const Modal = ({ extraerData, contact }) => {



    const handleDelete = async () => {
        await deleteContact(contact.id);
        await extraerData();
    }


  return (
    <>
      <div
        className="modal fade text-dark"
        id={`delete-${contact.id}`}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Eliminar a {contact.name}?
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">Se eliminara para siempre</div>
            <div className="modal-footer">
              <Link to={"/"}>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
              </Link>
              <button
                onClick={handleDelete}
                data-bs-dismiss="modal"
                type="button"
                className="btn btn-danger"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
