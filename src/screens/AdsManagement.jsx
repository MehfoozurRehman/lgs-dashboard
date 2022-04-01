import React, { useState } from "react";
import { Link } from "react-router-dom";
import addPic from "../assets/addPic.png";

function NavLink({ title, isNav, setIsNav }) {
  return (
    <button
      onClick={() => {
        setIsNav(title);
      }}
      className={
        isNav === title
          ? "main__content__add__managment__nav__wrapper__btn main__content__add__managment__nav__wrapper__btn__selected"
          : "main__content__add__managment__nav__wrapper__btn"
      }
    >
      {title}
    </button>
  );
}

function AddManagmenCard({ value, title }) {
  return (
    <Link
      to="/dashboard/payment"
      className="main__content__add__managment__content__card"
    >
      <img
        src={addPic}
        alt="addPic"
        className="main__content__add__managment__content__card__img"
      />
      <div className="main__content__add__managment__content__card__overlay">
        <div className="main__content__add__managment__content__card__overlay__heading">
          {value}
        </div>
        <div className="main__content__add__managment__content__card__overlay__sub__heading">
          {title}
        </div>
      </div>
    </Link>
  );
}

export default function AdsManagement({ onAdd, onEdit, onDelete }) {
  const [isNav, setIsNav] = useState("Headline");
  return (
    <div className="main">
      <div className="main__header">
        <div className="main__header__top">
          <div className="main__header__top__heading">Ads Management</div>
          <div className="main__header__top__buttons">
            {/* <button className="main__header__top__buttons__button">
              Bulk Add
            </button> */}
            {/* */}
          </div>
        </div>
      </div>
      <div className="main__content">
        <div className="main__content__add__managment">
          <div className="main__content__add__managment__nav__wrapper">
            <NavLink isNav={isNav} setIsNav={setIsNav} title="Headline" />
            <NavLink isNav={isNav} setIsNav={setIsNav} title="Banners" />
          </div>
          <div className="main__content__add__managment__content">
            <AddManagmenCard title="Hourly" value="$34" />
            <AddManagmenCard title="Daily" value="$34" />
            <AddManagmenCard title="Weekly" value="$34" />
            <AddManagmenCard title="Daywise" value="$34" />
          </div>
        </div>
      </div>
    </div>
  );
}
