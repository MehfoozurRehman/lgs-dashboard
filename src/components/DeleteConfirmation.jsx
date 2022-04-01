import React from "react";
import { X } from "react-feather";

export default function DeleteConfirmation({ onClose, onSubmit, isEdit }) {
  return (
    <div className="popup">
      <form className="popup__form">
        <button
          className="popup__form__close"
          type="button"
          onClick={() => onClose(false)}
        >
          <X size={15} color="currentColor" strokeWidth={4} />
        </button>
        <div className="popup__form__heading">
          Do you realy want to delete this
        </div>
        <div className="popup__form__row" style={{ justifyContent: "center" }}>
          <button
            onClick={() => onSubmit(false)}
            className="popup__form__button"
            style={{ marginRight: "1em", marginTop: "1em" }}
          >
            Delete
          </button>
          <button
            onClick={() => onSubmit(false)}
            className="popup__form__button"
            style={{
              background: "#242424",
              marginTop: "1em",
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
