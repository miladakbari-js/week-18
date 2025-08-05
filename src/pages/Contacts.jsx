import { Link, useNavigate } from "react-router-dom";
import { useContactContext } from "../context/ContactContext";
import { deleteContact } from "../services/contactService";
import ContactCard from "../components/ContactCard";
import style from "./Contacts.module.css";
import SearchBox from "../components/SearchBox";
import Modal from "../components/Modal";
import { FaArrowAltCircleRight } from "react-icons/fa";

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

      {state.showModal && (
        <Modal
          message={state.alertMessage}
          onConfirm={async () => {
            await deleteContact(state.targetId)
            dispatch({ type: "DELETE_CONTACT", payload: state.targetId });
            dispatch({ type: "HIDE_ALERT_MODAL" });
          }}
          onCancel={() => dispatch({ type: "HIDE_ALERT_MODAL" })}
        />
      )}
      <div className={style.back}>
        <Link to="/register">Register Form</Link>
        <FaArrowAltCircleRight />
      </div>
    </div>
  );
}

export default Contacts;
