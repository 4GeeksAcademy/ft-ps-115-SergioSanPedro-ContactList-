import { Link, useNavigate } from "react-router-dom";
import { deleteContact } from "../servicesApi/contactsApi";

export const Modal = ({ extraerData, contact }) => {

  const navigate = useNavigate()

    const handleDelete = async () => {
        await deleteContact(contact.id);
        await extraerData();
        navigate('/');
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
          <div className="modal-content bg-info-subtle">
            <div className="modal-header">
              <h1 className="modal-title fs-4" id="staticBackdropLabel">
                <strong>Eliminar a:</strong> {contact.name}?
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body fs-4">Se borrará para siempre</div>
            <div className="modal-footer bg-info-subtle">
              
                <button
                  type="button"
                  className="btn bg-success"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
            
              <button
                onClick={handleDelete}
                data-bs-dismiss="modal"
                type="button"
                className="btn bg-danger"
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


