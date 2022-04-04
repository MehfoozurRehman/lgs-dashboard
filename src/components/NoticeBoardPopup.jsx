import React from "react";
import { X } from "react-feather";
import TextArea from "./TextArea";
import UploadImage from "./UploadImage";

export default function NoticeBoardPopup({ onClose, onSubmit, isEdit }) {
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
          {isEdit ? "Edit" : "Add"} Notice
        </div>
        <div className="popup__form__row">
          <div className="popup__form__input">
            <div className="popup__form__input__label">Title</div>
            <input
              type="text"
              className="popup__form__input__field"
              placeholder="Enter Title"
            />
            <div className="popup__form__input__error"></div>
          </div>
        </div>
        <div className="popup__form__row">
          <div className="popup__form__input">
            <div className="popup__form__input__label">Posting Date</div>
            <input
              type="date"
              className="popup__form__input__field"
              placeholder="Enter Posting Date"
            />
            <div className="popup__form__input__error"></div>
          </div>
        </div>
        <div className="popup__form__row">
          <div className="popup__form__input">
            <div className="popup__form__input__label">Description</div>
            <TextArea />
            <div className="popup__form__input__error"></div>
          </div>
        </div>
        <button onClick={() => onSubmit(false)} className="popup__form__button">
          {isEdit ? "Edit" : "Add"}
        </button>
      </form>
    </div>
  );
}
