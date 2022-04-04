import React, { useState } from "react";
import { ArrowLeft } from "react-feather";
import Select from "react-select";
import UploadImage from "../components/UploadImage";
import TextArea from "../components/TextArea";
import { useNavigate } from "react-router-dom";
import UploadPDF from "../components/UploadPDF";
import Tab from "../components/Tab";

export default function AdmissionTestRequirementsForm({ heading }) {
  const navigate = useNavigate();
  const [active, setActive] = useState("English and Urdu");
  return (
    <div className="main">
      <div className="main__header" style={{ height: "8%" }}>
        <div className="main__header__top">
          <div className="main__header__top__heading">
            {heading} Admission Test Requirements
          </div>
          <div className="main__header__top__buttons">
            <button
              className="main__header__top__buttons__button"
              onClick={() => {
                // navigate("/dashboard/testimonials");
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
          <div className="main__content__form__col" style={{ width: "100%" }}>
            <div className="main__content__form__col__tab__wrapper">
              <Tab
                label="English and Urdu"
                active={active}
                setActive={setActive}
              />
              <Tab label="Mathematics" active={active} setActive={setActive} />
              <Tab
                label="General Science"
                active={active}
                setActive={setActive}
              />
              <Tab
                label="Physics/Chemistry/Biology"
                active={active}
                setActive={setActive}
              />
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Course Title</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Name"
              />
              <div className="popup__form__input__error"></div>
            </div>
            <UploadImage label="Course Image" style={{ marginRight: 0 }} />
          </div>
          <div className="main__content__form__col" style={{ width: "67%" }}>
            <div className="popup__form__input">
              <div className="popup__form__input__label">Syllabus</div>
              <TextArea />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div
            className="main__content__form__col"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span style={{ fontSize: 20, fontWeight: "bold" }}>
              Course Syllabus
            </span>
            <button
              className="main__header__top__buttons__button"
              onClick={() => {
                // navigate("/dashboard/testimonials");
              }}
            >
              Add
            </button>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Syllabus Title</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Name"
              />
              <div className="popup__form__input__error"></div>
            </div>
            <UploadPDF label="Syllabus PDF" style={{ marginRight: 0 }} />
            <button
              className="main__header__top__buttons__button"
              onClick={() => {
                // navigate("/dashboard/testimonials");
              }}
              style={{ marginLeft: "auto", backgroundColor: "#242424" }}
            >
              Delete
            </button>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Syllabus Title</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Name"
              />
              <div className="popup__form__input__error"></div>
            </div>
            <UploadPDF label="Syllabus PDF" style={{ marginRight: 0 }} />
            <button
              className="main__header__top__buttons__button"
              onClick={() => {
                // navigate("/dashboard/testimonials");
              }}
              style={{ marginLeft: "auto", backgroundColor: "#242424" }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
