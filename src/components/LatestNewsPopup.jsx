import React from "react";
import { X } from "react-feather";
import TextArea from "./TextArea";
import Select from "react-select";

export default function LatestNewsPopup({ onClose, onSubmit, isEdit }) {
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
          {isEdit ? "Edit" : "Add"} Latest News
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
            <div className="popup__form__input__label">Is Featured</div>
            <Select
              options={[
                { value: "chocolate", label: "Chocolate" },
                { value: "strawberry", label: "Strawberry" },
                { value: "vanilla", label: "Vanilla" },
              ]}
              theme={(theme) => ({
                ...theme,

                colors: {
                  ...theme.colors,
                  primary25: "#f6f6f6",
                  primary: "#005dff",
                  primary50: "f6f6f6",
                },
              })}
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
