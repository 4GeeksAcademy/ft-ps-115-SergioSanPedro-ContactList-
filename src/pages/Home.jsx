import { useEffect } from "react";
import { ContactList } from "../components/ContactsList.jsx";
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
      <ContactList store={store} />
    </div>
    
  );
};
