import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect } from "react";

export const FormEditContact = () => {

  const { store, dispatch } = useGlobalReducer();
  const {id} = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (condition) {
      
    }

  }



  useEffect(()=> {
    if (id) {
      dispatch({
        type: 'editContact',
        payload: store.contacts.filter(contact => contact.id === id)[0]})
      }

  },[id])



  return (

    <form onSubmit={handleSubmit} className="container w-50 bg-light my-5 p-3">
      <h3 className="text-center">Introduce los nuevos datos</h3>

      <div className="mb-3">
        <label htmlFor="contactName" className="form-label">
          Nombre contacto
        </label>
        <input type="text" className="form-control" name="contactName" />
      </div>

      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Telefono
        </label>
        <input type="phone" className="form-control" name="phone" />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input type="email" className="form-control" name="email" />
      </div>

      <div className="mb-3">
        <label htmlFor="address" className="form-label">
          Dirección
        </label>
        <input type="address" className="form-control" id="password" />
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
