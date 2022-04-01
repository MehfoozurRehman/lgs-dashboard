import React from "react";
import CategoryTableEntry from "../components/CategoryTableEntry";
import TableHeaderEntry from "../components/TableHeaderEntry";

export default function PricingDiscounting({ onAdd, onEdit, onDelete }) {
  return (
    <div className="main">
      <div className="main__header">
        <div className="main__header__top">
          <div className="main__header__top__heading">
            Pricing & Discounting
          </div>
          <div className="main__header__top__buttons">
            {/* <button className="main__header__top__buttons__button">
              Bulk Add
            </button> */}
            <button
              className="main__header__top__buttons__button"
              onClick={() => {
                onAdd(true);
              }}
            >
              Add New
            </button>
          </div>
        </div>
      </div>
      <div className="main__content">
        <div className="main__content__table">
          <div className="main__content__table__header">
            <TableHeaderEntry title="" />
            <TableHeaderEntry title="Active Image" />
            <TableHeaderEntry title="Inactive Image" />
            <TableHeaderEntry title="Name" />
          </div>
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
        </div>
      </div>
    </div>
  );
}
