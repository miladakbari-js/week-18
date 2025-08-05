import styles from "./Modal.module.css"
function Modal({ message, onConfirm, onCancel }) {
  return (
    <div onClick={onCancel} className={styles.modal}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <p>{message}</p>
        {onConfirm && (
          <div className={styles.buttons}>
            <button onClick={onConfirm}>Yes</button>
            <button onClick={onCancel}>Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
