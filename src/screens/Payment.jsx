import React, { useState } from "react";
import paymentnocard from "../assets/paymentnocard.png";
import cardImg from "../assets/cardImg.png";
import UploadImage from "../components/UploadImage";

function CreditCard({ onEdit }) {
  return (
    <div className="main__content__payment__left__entry">
      <img
        src={cardImg}
        alt="cardImg"
        className="main__content__payment__left__entry__img"
      />
      <div className="main__content__payment__left__entry__content">
        <div className="main__content__payment__left__entry__content__heading">
          Adams Mickey
        </div>
        <div className="main__content__payment__left__entry__content__info">
          4323 XXXX XXXX XXXX
        </div>
      </div>
      <button className="main__header__top__buttons__button" onClick={onEdit}>
        Edit
      </button>
    </div>
  );
}

export default function Payment({ onAdd, onEdit, onDelete }) {
  const [listOfCards, setListOfCards] = useState([]);
  const [isPayed, setIsPayed] = useState(false);
  const [isBanners, setIsBanners] = useState(true);
  return (
    <div className="main">
      <div className="main__header">
        <div className="main__header__top">
          <div className="main__header__top__heading">Payment</div>
          <div className="main__header__top__buttons">
            {listOfCards.length === 0 ? null : (
              <>
                <button
                  className="main__header__top__buttons__button"
                  onClick={() => {
                    onAdd(true);
                  }}
                >
                  Add New
                </button>
                <button
                  className="main__header__top__buttons__button"
                  onClick={() => {
                    setIsPayed(true);
                  }}
                >
                  Make Payment
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      {isPayed ? (
        <div
          className="main__content"
          style={{
            height: "92%",
          }}
        >
          <div className="main__content__form">
            <div className="main__content__form__col">
              <div className="popup__form__input">
                <div className="popup__form__input__label">Start</div>
                <input
                  type="date"
                  className="popup__form__input__field"
                  placeholder="Enter Start"
                />
                <div className="popup__form__input__error"></div>
              </div>
            </div>
            <div className="main__content__form__col">
              <div className="popup__form__input">
                <div className="popup__form__input__label">End</div>
                <input
                  type="date"
                  className="popup__form__input__field"
                  placeholder="Enter End"
                />
                <div className="popup__form__input__error"></div>
              </div>
            </div>
            <div className="main__content__form__col">
              <div className="popup__form__input">
                <div className="popup__form__input__label">Cost</div>
                <input
                  type="text"
                  className="popup__form__input__field"
                  placeholder="Enter Cost"
                />
                <div className="popup__form__input__error"></div>
              </div>
            </div>
            {isBanners ? (
              <>
                <div
                  className="main__content__form__col"
                  style={{
                    width: "100%",
                    color: "#9a7cb8",
                    marginBottom: 0,
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  Banners
                </div>
                <div
                  className="main__content__form__col"
                  style={{ width: "100%", display: "flex" }}
                >
                  <UploadImage />
                  <UploadImage />
                  <UploadImage />
                  <UploadImage />
                </div>
              </>
            ) : (
              <div
                className="main__content__form__col"
                style={{ width: "67%" }}
              >
                <div className="popup__form__input">
                  <div className="popup__form__input__label">Headline</div>
                  <input
                    type="text"
                    className="popup__form__input__field"
                    placeholder="Enter Headline"
                  />
                  <div className="popup__form__input__error"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="main__content">
          {listOfCards.length === 0 ? (
            <div className="main__content__payment__no__card">
              <img
                src={paymentnocard}
                alt="paymentnocard"
                className="main__content__payment__no__card__img"
              />
              <button
                className="main__header__top__buttons__button"
                onClick={() => {
                  onAdd(true);
                  setListOfCards([
                    {
                      id: 1,
                    },
                    {
                      id: 2,
                    },
                    {
                      id: 3,
                    },
                  ]);
                }}
              >
                Add New
              </button>
            </div>
          ) : (
            <div className="main__content__payment">
              <div className="main__content__payment__left">
                <CreditCard onEdit={onEdit} />
                <CreditCard onEdit={onEdit} />
                <CreditCard onEdit={onEdit} />
                <CreditCard onEdit={onEdit} />
                <CreditCard onEdit={onEdit} />
                <CreditCard onEdit={onEdit} />
                <CreditCard onEdit={onEdit} />
                <CreditCard onEdit={onEdit} />
                <CreditCard onEdit={onEdit} />
                <CreditCard onEdit={onEdit} />
                <CreditCard onEdit={onEdit} />
                <CreditCard onEdit={onEdit} />
                <CreditCard onEdit={onEdit} />
              </div>
              <div className="main__content__payment__right">
                <div className="main__content__payment__right__top">
                  <div className="main__content__payment__right__top__entry">
                    <div className="main__content__payment__right__top__entry__left">
                      Banners ad / Monthly
                    </div>
                    <div className="main__content__payment__right__top__entry__right">
                      $34
                    </div>
                  </div>
                </div>
                <div className="main__content__payment__right__bottom">
                  <div className="main__content__payment__right__bottom__left">
                    Total
                  </div>
                  <div className="main__content__payment__right__bottom__right">
                    $34
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
