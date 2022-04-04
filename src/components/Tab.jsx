import React from "react";

export default function Tab({ label, active, setActive }) {
  return (
    <button
      onClick={() => {
        setActive(label);
      }}
      className={
        active === label
          ? "main__content__form__col__tab main__content__form__col__tab__active"
          : "main__content__form__col__tab"
      }
    >
      {label}
    </button>
  );
}
