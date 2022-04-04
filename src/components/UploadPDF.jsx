import React, { useState } from "react";
import { Plus, X } from "react-feather";

export default function UploadPDF({ label }) {
  const [upload, setUpload] = useState("");
  return (
    <div className="popup__form__upload__wrapper">
      <div className="popup__form__input__label">{label}</div>
      <div className="popup__form__upload">
        {upload === "" ? null : (
          <button
            className="popup__form__upload__btn"
            type="button"
            onClick={() => {
              setUpload("");
            }}
          >
            <X size={15} color="currentColor" />
          </button>
        )}
        <input
          type="file"
          className="popup__form__upload__input"
          onChange={(e) => {
            setUpload(URL.createObjectURL(e.target.files[0]));
          }}
        />
        <div className="popup__form__upload__content">
          {upload === "" ? (
            <Plus size={30} color="currentcolor" />
          ) : (
            <iframe
              className="popup__form__upload__content__img"
              src={upload}
            />
          )}
        </div>
      </div>
    </div>
  );
}
