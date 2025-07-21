import { Card } from "./Card";

export const ContactList = ({ store }) => {
  return (
    <>
      <h1>Lista de contactos</h1>

      <div className="container my-5">
        {store.contacts.map((contact) => (
          <Card key={contact.id} contact={contact} />
        ))}
      </div>
    </>
  );
};
