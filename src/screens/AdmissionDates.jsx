import React, { useState } from "react";
import Tab from "../components/Tab";

export default function AdmissionDatesForm({ heading }) {
  const [active, setActive] = useState("Middle School");
  return (
    <div className="main">
      <div className="main__header" style={{ height: "8%" }}>
        <div className="main__header__top">
          <div className="main__header__top__heading">
            {heading} Admissions Date
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
                label="Middle School"
                active={active}
                setActive={setActive}
              />
              <Tab label="O-Levels" active={active} setActive={setActive} />
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">
                Early Admission Test
              </div>
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
              <div className="popup__form__input__label">
                Regular Admission Test-1
              </div>
              <input
                type="date"
                className="popup__form__input__field"
                placeholder="Enter Regular Admission Test-1"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">
                Regular Admission Test-2
              </div>
              <input
                type="date"
                className="popup__form__input__field"
                placeholder="Enter Regular Admission Test-2"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
