import React from "react";
import TableHeaderEntry from "../components/TableHeaderEntry";

function CustomerRequestsTableEntry({ onCreate, onDelete }) {
  return (
    <div className="main__content__table__list">
      <div className="main__content__table__list__entry">
        <button
          className="main__content__table__list__entry__full__btn"
          onClick={() => {
            onCreate(true);
          }}
        >
          Generate Promo Code
        </button>
        <button
          className="main__content__table__list__entry__button main__content__table__list__entry__button__secondary"
          onClick={onDelete}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20.339"
            height="20.15"
            viewBox="0 0 20.339 26.15"
          >
            <path
              id="Icon_material-delete-forever"
              data-name="Icon material-delete-forever"
              d="M8.953,27.745a2.914,2.914,0,0,0,2.906,2.906H23.481a2.914,2.914,0,0,0,2.906-2.906V10.311H8.953ZM12.527,17.4l2.048-2.048,3.094,3.08,3.08-3.08L22.8,17.4l-3.08,3.08,3.08,3.08-2.048,2.048-3.08-3.08-.261.261L14.59,25.609l-2.048-2.048,3.08-3.08ZM22.754,5.953,21.3,4.5H14.038L12.585,5.953H7.5V8.858H27.839V5.953Z"
              transform="translate(-7.5 -4.5)"
              fill="currentcolor"
            />
          </svg>
        </button>
      </div>
      <div className="main__content__table__list__entry">+034 43 45453434</div>
      <div className="main__content__table__list__entry">45000</div>
      <div className="main__content__table__list__entry">2500</div>
      <div className="main__content__table__list__entry">345</div>
    </div>
  );
}

export default function CustomerRequests({ onCreate, onEdit, onDelete }) {
  return (
    <div className="main">
      <div className="main__header">
        <div className="main__header__top">
          <div className="main__header__top__heading">Customer Requests</div>
          <div className="main__header__top__buttons">
            {/* <button className="main__header__top__buttons__button">
              Bulk Add
            </button> */}
            {/* <button
              className="main__header__top__buttons__button"
              onClick={() => {
                onAdd(true);
              }}
            >
              Add New
            </button> */}
          </div>
        </div>
      </div>
      <div className="main__content">
        <div className="main__content__table">
          <div className="main__content__table__header">
            <TableHeaderEntry title="" />
            <TableHeaderEntry title="Phone Number" />
            <TableHeaderEntry title="Points" />
            <TableHeaderEntry title="Target" />
            <TableHeaderEntry title="Discount /rs" />
          </div>
          <CustomerRequestsTableEntry onCreate={onCreate} onDelete={onDelete} />
          <CustomerRequestsTableEntry onCreate={onCreate} onDelete={onDelete} />
          <CustomerRequestsTableEntry onCreate={onCreate} onDelete={onDelete} />
          <CustomerRequestsTableEntry onCreate={onCreate} onDelete={onDelete} />
          <CustomerRequestsTableEntry onCreate={onCreate} onDelete={onDelete} />
          <CustomerRequestsTableEntry onCreate={onCreate} onDelete={onDelete} />
          <CustomerRequestsTableEntry onCreate={onCreate} onDelete={onDelete} />
          <CustomerRequestsTableEntry onCreate={onCreate} onDelete={onDelete} />
          <CustomerRequestsTableEntry onCreate={onCreate} onDelete={onDelete} />
          <CustomerRequestsTableEntry onCreate={onCreate} onDelete={onDelete} />
          <CustomerRequestsTableEntry onCreate={onCreate} onDelete={onDelete} />
          <CustomerRequestsTableEntry onCreate={onCreate} onDelete={onDelete} />
          <CustomerRequestsTableEntry onCreate={onCreate} onDelete={onDelete} />
          <CustomerRequestsTableEntry onCreate={onCreate} onDelete={onDelete} />
          <CustomerRequestsTableEntry onCreate={onCreate} onDelete={onDelete} />
          <CustomerRequestsTableEntry onCreate={onCreate} onDelete={onDelete} />
          <CustomerRequestsTableEntry onCreate={onCreate} onDelete={onDelete} />
          <CustomerRequestsTableEntry onCreate={onCreate} onDelete={onDelete} />
          <CustomerRequestsTableEntry onCreate={onCreate} onDelete={onDelete} />
          <CustomerRequestsTableEntry onCreate={onCreate} onDelete={onDelete} />
          <CustomerRequestsTableEntry onCreate={onCreate} onDelete={onDelete} />
          <CustomerRequestsTableEntry onCreate={onCreate} onDelete={onDelete} />
          <CustomerRequestsTableEntry onCreate={onCreate} onDelete={onDelete} />
          <CustomerRequestsTableEntry onCreate={onCreate} onDelete={onDelete} />
          <CustomerRequestsTableEntry onCreate={onCreate} onDelete={onDelete} />
          <CustomerRequestsTableEntry onCreate={onCreate} onDelete={onDelete} />
          <CustomerRequestsTableEntry onCreate={onCreate} onDelete={onDelete} />
          <CustomerRequestsTableEntry onCreate={onCreate} onDelete={onDelete} />
        </div>
      </div>
    </div>
  );
}
