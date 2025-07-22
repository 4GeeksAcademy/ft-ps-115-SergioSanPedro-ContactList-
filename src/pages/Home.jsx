import { useEffect } from "react";
import { Card } from "../components/Card.jsx";
import { getContacts } from "../servicesApi/contactsApi.js";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  const extraerData = async () => {
    const dataContext = await getContacts();

    dispatch({
      type: "addContacts",
      payload: dataContext,
    });
  };

  useEffect(() => {
    extraerData();
  }, []);

  return (

    <div className="text-center mt-5">
      <h1>Lista de contactos</h1>
            <div className="container my-5">
              {store.contacts.map((contact, index) => (
                <Card extraerData={extraerData} key={index} contact={contact} />
              ))}
            </div>
    </div>
    
  );
};
