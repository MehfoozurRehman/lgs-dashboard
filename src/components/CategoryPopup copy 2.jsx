import React from "react";
import { X } from "react-feather";
import UploadImage from "./UploadImage";

export default function CategoryPopup({ onClose, onSubmit, isEdit }) {
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
          {isEdit ? "Edit" : "Add"} Category
        </div>
        <div className="popup__form__row">
          <div className="popup__form__input">
            <div className="popup__form__input__label">Name</div>
            <input
              type="text"
              className="popup__form__input__field"
              placeholder="Enter Name"
            />
            <div className="popup__form__input__error"></div>
          </div>
        </div>
        <div className="popup__form__row">
          <UploadImage label="Active Image" />
          <UploadImage label="InActive Image" />
        </div>
        <button onClick={() => onSubmit(false)} className="popup__form__button">
          {isEdit ? "Edit" : "Add"}
        </button>
      </form>
    </div>
  );
}
