export const initialStore = () => {
  return {
    contacts: [],
    editContacts: {}
  };
};

export default function storeReducer(store, action) {
  switch (action.type) {
    case "addContacts":
      return { ...store, contacts: action.payload };

    case "editContact":
      return { ...store, editContacts: action.payload };


    default:
      throw Error("Unknown action.");
  }
}
