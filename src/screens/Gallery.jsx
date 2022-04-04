import React from "react";
import { ArrowLeft } from "react-feather";
import Select from "react-select";
import UploadImage from "../components/UploadImage";
import TextArea from "../components/TextArea";
import { useNavigate } from "react-router-dom";

export default function TestimonialsForm({ heading, backURL }) {
  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="main__header" style={{ height: "8%" }}>
        <div className="main__header__top">
          <div className="main__header__top__heading">{heading}</div>
          <div className="main__header__top__buttons">
            <button
              className="main__header__top__buttons__button"
              onClick={() => {
                navigate(backURL ? backURL : -1);
              }}
            >
              {heading === "Add" ? "Add New" : "Save"}
            </button>
          </div>
        </div>
      </div>
      <div
        className="main__content"
        style={{
          height: "92%",
        }}
      >
        <div className="main__content__form">
          <div className="main__content__form__col">
            <UploadImage label="Image" />
          </div>
          <div className="main__content__form__col">
            <UploadImage label="Image" />
          </div>
          <div className="main__content__form__col">
            <UploadImage label="Image" />
          </div>
          <div className="main__content__form__col">
            <UploadImage label="Image" />
          </div>
          <div className="main__content__form__col">
            <UploadImage label="Image" />
          </div>
          <div className="main__content__form__col">
            <UploadImage label="Image" />
          </div>
          <div className="main__content__form__col">
            <UploadImage label="Image" />
          </div>
          <div className="main__content__form__col">
            <UploadImage label="Image" />
          </div>
          <div className="main__content__form__col">
            <UploadImage label="Image" />
          </div>
          <div className="main__content__form__col">
            <UploadImage label="Image" />
          </div>
          <div className="main__content__form__col">
            <UploadImage label="Image" />
          </div>
          <div className="main__content__form__col">
            <UploadImage label="Image" />
          </div>
        </div>
      </div>
    </div>
  );
}
