import { createContext, useContext, useEffect, useReducer } from "react";
import { contactReducer, initialState } from "../constants/contactReducer";
import { getContacts } from "../services/contactService";

const ContactContext = createContext();
export const useContactContext = () => useContext(ContactContext);

function ContactProvider({ children }) {
  const [state, dispatch] = useReducer(contactReducer, initialState);

  useEffect(() => {
    getContacts().then((data) => {
      dispatch({ type: "SET_CONTACTS", payload: data });
    });
  }, []);

  return (
    <ContactContext.Provider value={{ state, dispatch }}>
      {children}
    </ContactContext.Provider>
  );
}

export default ContactProvider;
