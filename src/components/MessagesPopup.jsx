import React from "react";
import { X } from "react-feather";
import Select from "react-select";
import TextArea from "./TextArea";
import UploadImage from "./UploadImage";

export default function MessagesPopup({ onClose, onSubmit, isEdit }) {
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
          {isEdit ? "Edit" : "Add"} Message
        </div>
        <div className="popup__form__row">
          <div style={{ flex: 1, marginRight: "1.5em" }}>
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
              <div className="popup__form__input">
                <div className="popup__form__input__label">Designation</div>
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
          </div>
          <UploadImage label="Image" style={{ marginRight: "0em" }} />
        </div>
        <div className="popup__form__row">
          <div className="popup__form__input">
            <div className="popup__form__input__label">Message</div>
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
