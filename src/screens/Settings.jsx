import React from "react";
import { useNavigate } from "react-router-dom";
import TableHeaderEntry from "../components/TableHeaderEntry";

function SettingsTableEntry({ onEdit, onDelete }) {
  return (
    <div className="main__content__table__list">
      <div className="main__content__table__list__entry">
        <button
          className="main__content__table__list__entry__button main__content__table__list__entry__button__primary"
          onClick={onEdit}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="43.119"
            height="42.829"
            viewBox="0 0 43.119 42.829"
          >
            <defs>
              <filter
                id="Ellipse_150"
                x="0"
                y="0"
                width="43.119"
                height="42.829"
                filterUnits="userSpaceOnUse"
              >
                <feOffset dx="3" dy="3" input="SourceAlpha" />
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feFlood flood-opacity="0.161" />
                <feComposite operator="in" in2="blur" />
                <feComposite in="SourceGraphic" />
              </filter>
            </defs>
            <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Ellipse_150)">
              <g
                id="Ellipse_150-2"
                data-name="Ellipse 150"
                transform="translate(7.5 7.5)"
                fill="transparent"
                stroke="currentColor"
                stroke-width="1"
              >
                <ellipse
                  cx="11.059"
                  cy="10.915"
                  rx="11.059"
                  ry="10.915"
                  stroke="none"
                />
                <ellipse
                  cx="11.059"
                  cy="10.915"
                  rx="10.559"
                  ry="10.415"
                  fill="none"
                />
              </g>
            </g>
            <path
              id="Icon_material-edit"
              data-name="Icon material-edit"
              d="M4.5,17.582v3.443H7.943L18.1,10.871,14.655,7.427ZM20.761,8.208a.914.914,0,0,0,0-1.295L18.612,4.765a.914.914,0,0,0-1.295,0l-1.68,1.68L19.08,9.888Z"
              transform="translate(12.007 1.343)"
              fill="currentColor"
            />
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
      <div className="main__content__table__list__entry">سفادسفادسفدسف</div>
      <div className="main__content__table__list__entry">Jaddah</div>
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

export default function Settings({ onAdd, onEdit, onDelete }) {
  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="main__header">
        <div className="main__header__top">
          <div className="main__header__top__heading">Settings</div>
          <div className="main__header__top__buttons">
            <button
              className="main__header__top__buttons__button"
              onClick={() => {
                onAdd(true);
              }}
            >
              Add Recipt
            </button>
            <button
              className="main__header__top__buttons__button"
              onClick={() => {
                navigate("/dashboard/settings/edit_profile");
              }}
              style={{ background: "#242424" }}
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
      <div className="main__content">
        <div className="main__content__table">
          <div className="main__content__table__header">
            <TableHeaderEntry title="" />
            <TableHeaderEntry title="Arabic" />
            <TableHeaderEntry title="Branch" />
            <TableHeaderEntry title="Reciept" />
          </div>
          <SettingsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SettingsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SettingsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SettingsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SettingsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SettingsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SettingsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SettingsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SettingsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SettingsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SettingsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SettingsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SettingsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SettingsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SettingsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SettingsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SettingsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SettingsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SettingsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SettingsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SettingsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SettingsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SettingsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SettingsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SettingsTableEntry onEdit={onEdit} onDelete={onDelete} />
        </div>
      </div>
    </div>
  );
}
