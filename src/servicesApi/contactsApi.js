export const getContacts = async () => {
  const response = await fetch(
    "https://playground.4geeks.com/contact/agendas/sergio90/contacts"
  );

  if (!response.ok) {
    createAgenda();
  }
  const data = await response.json();

  return data.contacts;
};

const createAgenda = async () => {
  await fetch("https://playground.4geeks.com/contact/agendas/sergio90", {
    method: "POST",
  });
};


export const createContacts = async (newContact) => {
    const response = await fetch('https://playground.4geeks.com/contact/agendas/sergio90/contacts', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(newContact)
        
    })
}

export const editContacts = async (editContact, id, navigate) => {
  const response = await fetch(
    `https://playground.4geeks.com/contact/agendas/sergio90/contacts/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(editContact),
    }
  );

  if (response.ok) {
    getContacts();
    navigate('/');
  }
};

