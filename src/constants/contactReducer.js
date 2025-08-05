const initialState = {
  contacts: [],
  allContacts: [],
  editableContact: null,
  showModal: false,
  alertMessage: null,
  clearSearch: false,
  targetId: null,
};

const contactReducer = (state, action) => {
  switch (action.type) {
    case "SET_CONTACTS":
      return {
        ...state,
        contacts: action.payload,
        allContacts: action.payload,
      };
    case "ADD_CONTACT":
      return { ...state, contacts: [...state.contacts, action.payload] };

    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter((item) => item.id !== action.payload),
      };
    case "SET_EDITABLE_CONTACT":
      return {
        ...state,
        editableContact: action.payload,
      };
    case "UPDATE_CONTACT":
      const updatedList = state.contacts.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      return {
        ...state,
        contacts: updatedList,
        editableContact: null,
      };

    case "SEARCH_CONTACTS":
      const filteredContacts = state.contacts.filter((contact) => {
        const keyword = action.payload.toLowerCase().trim();
        return (
          contact.name.toLowerCase().includes(keyword) ||
          contact.lastName.toLowerCase().includes(keyword) ||
          contact.email.toLowerCase().includes(keyword) ||
          contact.job.toLowerCase().includes(keyword)
        );
      });
      return { ...state, contacts: filteredContacts, clearSearch: true };

    case "RESET_CONTACTS":
      return { ...state, contacts: [...state.allContacts], clearSearch: true };

    case "SET_CLEAR_SEARCH":
      return { ...state, clearSearch: action.payload };

    case "SHOW_ALERT_MODAL":
      return { ...state, alertMessage: action.payload, showModal: true };

    case "HIDE_ALERT_MODAL":
      return { ...state, alertMessage: null, showModal: false };

    case "SET_TARGET_ID":
     return { ...state, targetId: action.payload };

    case "SHOW_ALERT_MODAL":
      return { ...state, showModal: true, alertMessage: action.payload };

    case "HIDE_ALERT_MODAL":
      return { ...state, showModal: false, alertMessage: null, targetId: null };
    default:
      return state;
  }
};

export { initialState, contactReducer };
