import { Link, useNavigate } from "react-router-dom";
import { useContactContext } from "../context/ContactContext";
import { deleteContact } from "../services/contactService";
import ContactCard from "../components/ContactCard";
import style from "./Contacts.module.css";
import SearchBox from "../components/SearchBox";
import Modal from "../components/Modal";

function Contacts() {
  const { state, dispatch } = useContactContext();
  const { contacts } = state;
  const navigate = useNavigate();

  const deleteHandler = (id) => {
    dispatch({ type: "SET_TARGET_ID", payload: id });
    dispatch({
      type: "SHOW_ALERT_MODAL",
      payload: "Are you sure you want to delete this contact?",
    });
  };

  const confirmDeleteHandler = async () => {
    await deleteContact(state.targetId);
    dispatch({ type: "DELETE_CONTACT", payload: state.targetId });
    dispatch({ type: "HIDE_ALERT_MODAL" });
  };
  const editHandler = (contact) => {
    dispatch({ type: "SET_EDITABLE_CONTACT", payload: contact });
    navigate("/register");
  };
  return (
    <div className={style.container}>
      <h2>Contacts List</h2>
      <SearchBox />
      {!contacts.length ? (
        <p>No Contact Yet!</p>
      ) : (
        <div>
          {contacts.map((contact) => (
            <ContactCard
              key={contact.id}
              data={contact}
              editHandler={editHandler}
              deleteHandler={deleteHandler}
            />
          ))}
        </div>
      )}
      <Link to="/register">Register</Link>
      {state.showModal && (
        <Modal
          message={state.alertMessage}
          onConfirm={() => {
            dispatch({ type: "DELETE_CONTACT", payload: state.targetId });
            dispatch({ type: "HIDE_ALERT_MODAL" });
          }}
          onCancel={() => dispatch({ type: "HIDE_ALERT_MODAL" })}
        />
      )}
    
    </div>
  );
}

export default Contacts;
