import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editContacts } from "../servicesApi/contactsApi";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const FormEditContact = () => {
  const { store, dispatch } = useGlobalReducer()
  const [editContact, setEditContact] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEditContact((prev) => ({ ...prev, [e.target.name] : e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await editContacts(editContact, id, navigate)

  }

   useEffect(() => {
    if (id) {
      
      setEditContact(store.contacts.filter(contact => contact.id == id[0]))
      
        dispatch({
          type: "editContact",
          payload: editContact,
        });
    }
  }, [id]);

  return (
    <form onSubmit={handleSubmit} className="container w-50 bg-light my-5 p-3">
      <h3 className="text-center">Introduce los nuevos datos</h3>

      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nuevo nombre contacto
        </label>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          className="form-control"
          name="name"
          value={editContact.name}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Telefono
        </label>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          className="form-control"
          name="phone"
          value={editContact.phone}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          onChange={(e) => handleChange(e)}
          type="email"
          className="form-control"
          name="email"
          value={editContact.email}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="address" className="form-label">
          Dirección
        </label>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          className="form-control"
          name="address"
          value={editContact.address}
        />
      </div>

      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Estoy de acuerdo
        </label>
      </div>

      <div className=" d-flex justify-content-end">
        
          <button type="submit" className="btn btn-primary">
            Actualizar
          </button>
       
      </div>
    </form>
  );
};
