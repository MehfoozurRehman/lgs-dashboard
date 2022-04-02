import React from "react";
import TableHeaderEntry from "../components/TableHeaderEntry";

function CareersTableEntry({ onEdit, onView, onDelete }) {
  return (
    <div className="main__content__table__list">
      <div className="main__content__table__list__entry">
        <button
          className="main__content__table__list__entry__button main__content__table__list__entry__button__primary"
          onClick={onView}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-eye"
            style={{ marginTop: 7 }}
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
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
      <div className="main__content__table__list__entry">Bilal</div>
      <div className="main__content__table__list__entry">bilal@gmail.com</div>
      <div className="main__content__table__list__entry">+92 321 1231231</div>
      <div className="main__content__table__list__entry">Faisalabad</div>
      <div className="main__content__table__list__entry">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, harum?
      </div>
      <div className="main__content__table__list__entry">Male</div>
      <div className="main__content__table__list__entry">
        <img
          src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
          className="main__content__table__list__entry__img"
        />
      </div>
    </div>
  );
}

export default function Careers({ onAdd, onEdit, onView, onDelete }) {
  return (
    <div className="main">
      <div className="main__header">
        <div className="main__header__top">
          <div className="main__header__top__heading">Careers</div>
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
            <TableHeaderEntry title="Action" />
            <TableHeaderEntry title="Name" />
            <TableHeaderEntry title="Email" />
            <TableHeaderEntry title="Phone" />
            <TableHeaderEntry title="City" />
            <TableHeaderEntry title="Address" />
            <TableHeaderEntry title="Gender" />
            <TableHeaderEntry title="Picture" />
          </div>
          <CareersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CareersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CareersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CareersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CareersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CareersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CareersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CareersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CareersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CareersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CareersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CareersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CareersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CareersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CareersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CareersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CareersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CareersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CareersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CareersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CareersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CareersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CareersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CareersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CareersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CareersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CareersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CareersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CareersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CareersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CareersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CareersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CareersTableEntry onEdit={onEdit} onDelete={onDelete} />
        </div>
      </div>
    </div>
  );
}
