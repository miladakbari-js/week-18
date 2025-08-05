const BASE_URL = `${import.meta.env.VITE_BASE_URL}/contacts`;

const getContacts = async () => {
  const res = await fetch(BASE_URL);
  return await res.json();
};

const addContact = async (contact) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contact),
  });
  return await res.json();
};

const deleteContact = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
};

const updateContact = async (contact) => {
  const res = await fetch(`${BASE_URL}/${contact.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contact),
  });
  return await res.json()
};
export { getContacts , addContact , deleteContact , updateContact };
