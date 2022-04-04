import React from "react";
import UploadPDF from "../components/UploadPDF";

export default function ParentsHandBook({ heading }) {
  return (
    <div className="main">
      <div className="main__header" style={{ height: "8%" }}>
        <div className="main__header__top">
          <div className="main__header__top__heading">
            {heading} Parents Hand Book
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
            <UploadPDF label="Hand Book PDF" />
          </div>
        </div>
      </div>
    </div>
  );
}
