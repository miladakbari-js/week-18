import { useEffect, useState } from "react";
import styles from "./SearchBox.module.css"
import { useContactContext } from "../context/ContactContext";

function SearchBox() {
  const [search, setSearch] = useState("");
  const { state, dispatch } = useContactContext();
  const { clearSearch } = state;

  const changeHandler = (event) => {
    setSearch(event.target.value);
  };

  const searchHandler = () => {
    if (!search.trim()) {
      dispatch({
        type: "SHOW_ALERT_MODAL",
        payload: "Please enter your search value",
      });
      dispatch({ type: "RESET_CONTACTS" });
      setTimeout(() => {
        dispatch({ type: "HIDE_ALERT_MODAL" });
      }, 2000);
      return;
    }

    dispatch({ type: "SEARCH_CONTACTS", payload: search });
  };

  useEffect(() => {
    if (clearSearch) {
      setSearch("");
      dispatch({ type: "SET_CLEAR_SEARCH", payload: false });
    }
  }, [clearSearch]);

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search contacts..."
        value={search}
        onChange={changeHandler}
      />
      <div>

      <button onClick={searchHandler} className={styles.searchButton}>Search</button>
      </div>
    </div>
  );
}

export default SearchBox;