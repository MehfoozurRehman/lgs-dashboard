import React from "react";
import { ArrowLeft } from "react-feather";
import Select from "react-select";
import UploadImage from "../components/UploadImage";
import TextArea from "../components/TextArea";
import { useNavigate } from "react-router-dom";

export default function AdmissionDatesForm({ heading }) {
  const navigate = useNavigate();
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
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Grade Type</div>
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
                // isMulti
              />
              <div className="popup__form__input__error"></div>
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
