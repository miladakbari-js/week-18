import { Link, useNavigate } from "react-router-dom";
import { useContactContext } from "../context/ContactContext";
import { addContact } from "../services/contactService";
import { updateContact } from "../services/contactService";
import ContactForm from "../components/ContactForm";
import registerSchema from "../constants/validationSchema";
import style from "./Register.module.css";

import { FaArrowAltCircleRight } from "react-icons/fa";

function Register() {
  const navigate = useNavigate();
  const { dispatch, state } = useContactContext();
  const { editableContact } = state;

  const onSubmit = async (data) => {
    if (editableContact) {
      const updated = await updateContact({ ...editableContact, ...data });
      dispatch({ type: "UPDATE_CONTACT", payload: updated });
    } else {
      const newContact = await addContact(data);
      dispatch({ type: "ADD_CONTACT", payload: newContact });
    }

    navigate("/contacts");
  };

  return (
    <div className={style.container}>
      <ContactForm
        onSubmit={onSubmit}
        schema={registerSchema}
        defaultValues={editableContact}
        buttonLabel={editableContact ? "Edit" : "Register"}
      />
      <div className={style.back}>
        <Link to="/contacts">
          Contact List
        </Link>
        <FaArrowAltCircleRight /> 
      </div>
    </div>
  );
}

export default Register;
