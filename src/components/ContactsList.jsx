import { useEffect } from "react"
import { getContacts } from "../servicesApi/contactsApi"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { Card } from "./Card";

export const ContactList = () => {

 const { store, dispatch } = useGlobalReducer();
 

 const extraerData = async () => {
    
    const dataContext = await getContacts();

    dispatch({
        type: 'addContacts',
        payload: dataContext
    })
 }
 

    useEffect(() => {
        extraerData();
    },[])

    return (
        <>
            <h1>Componente ContactList</h1>

            {
                store.contacts.map(contact => (
                    <Card key={contact.id} contact= {contact} />
                ))
            }
        </>
    )
}