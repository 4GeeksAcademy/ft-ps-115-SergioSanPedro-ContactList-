import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createContacts } from "../servicesApi/contactsApi";


export const FormCreateContact = () => {

 
  const [newContact, setNewContact] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewContact((prev) => ({ ...prev, [e.target.name] : e.target.value }));
   
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !newContact.name.trim() ||
      !newContact.email.trim() ||
      !newContact.phone.trim() ||
      !newContact.address.trim()
    ) {
      setMessage("Rellena todos los campos");
      return;
    }

    await createContacts(newContact);
    navigate("/");
  };





  return (
    <form onSubmit={handleSubmit} className="container w-50 bg-light my-5 p-3">
      <h2 className="text-center mb-5">
        Introduce los datos para crear el contacto
      </h2>
      {message && (
        <div className="alert alert-danger" role="alert">
          {message}
        </div>
      )}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nombre contacto
        </label>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          className="form-control"
          name="name"
          placeholder="Nombre completo"
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
          placeholder="ejemplo@gmail.com"
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
          placeholder="+34 ...."
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
          placeholder="Dirección completa"
        />
      </div>

      <div className="d-flex justify-content-end gap-3">
        <button type="submit" className="btn btn-primary">
          Crear
        </button>
        <Link to={"/"}>
          <button className="btn btn-primary btn-danger">
            Cancelar
          </button>
        </Link>
      </div>
    </form>
  );
};
