import React from "react";
import logo from "../assets/logo.svg";
import PDFTable from "./PDFTable";

export default function RegistrationFormPDF({ data }) {
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
            REGISTRATION FORM
          </div>
        </div>
      </div>
      <PDFTable data={data} />
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
      <div className="registration__form__footer">
        <div className="registration__form__footer__entry">
          The completion of this form does not mean that the child will
          necessarily be admitted / accepted. The admission is decided after the
          child has been tested and interviewed.
        </div>
        <div className="registration__form__footer__entry">
          Admission is subject to medical fitness in all respects.
        </div>
        <div className="registration__form__footer__entry">
          To finalize admission a birth / school leaving certificate must be
          provided.
        </div>
        <div className="registration__form__footer__entry">
          The company reserves the right to utilize the security deposit at its
          role discretion till refunded.
        </div>
      </div>
    </div>
  );
}
