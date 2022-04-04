import React, { useState } from "react";
import Select from "react-select";
import Tab from "../components/Tab";
import UploadPDF from "../components/UploadPDF";

export default function AcademicCalendarForm({ heading }) {
  const [active, setActive] = useState("Winter");
  return (
    <div className="main">
      <div className="main__header" style={{ height: "8%" }}>
        <div className="main__header__top">
          <div className="main__header__top__heading">
            {heading} Academic Calender
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
              <Tab label="Winter" active={active} setActive={setActive} />
              <Tab label="Spring" active={active} setActive={setActive} />
              <Tab label="Summer" active={active} setActive={setActive} />
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Date From</div>
              <input
                type="date"
                className="popup__form__input__field"
                placeholder="Enter Early Admission Test"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Date To</div>
              <input
                type="date"
                className="popup__form__input__field"
                placeholder="Enter Regular Admission Test-1"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col" />
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">PDF</div>
              <UploadPDF />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
