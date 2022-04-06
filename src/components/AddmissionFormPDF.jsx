import React from "react";
import logo from "../assets/logo.svg";
import PDFTable from "./PDFTable";

export default function AddmissionFormPDF({ data }) {
  return (
    <div className="registration__form">
      <div className="registration__form__header">
        <img
          src={logo}
          alt="logo"
          className="registration__form__header__img"
        />
        <div className="registration__form__header__content">
          <div className="registration__form__header__content__heading">
            LAHORE GRAMMAR SCHOOL
          </div>
          <div className="registration__form__header__content__sub__heading">
            ADDMISSION FORM
          </div>
        </div>
      </div>
      <PDFTable data={data} />
      <div className="registration__form__undertaking">
        <div className="registration__form__undertaking__heading">
          UNDERTAKING
        </div>
        <div className="registration__form__undertaking__para">
          I shall abide by the Rules and Regulation of the School in force and
          undertake to play the fee for the entire year including the quarter
          July- September
        </div>
      </div>
      <div className="registration__form__middle__content">
        <div className="registration__form__date__table">
          <div className="registration__form__table__entry">
            Date:
            <span>Lorem ipsum dolor sit amet consectetur.</span>
          </div>
        </div>
        <div className="registration__form__signature__table">
          <div className="registration__form__signature__table__content">
            Signature of Prents / Guardian
          </div>
        </div>
      </div>
    </div>
  );
}
