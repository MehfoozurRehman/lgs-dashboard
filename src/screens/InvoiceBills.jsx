import React from "react";
import DatePicker from "../components/DatePicker";
import TableHeaderEntry from "../components/TableHeaderEntry";

function InvoiceBillsTableEntry({}) {
  return (
    <div className="main__content__table__list">
      <div className="main__content__table__list__entry">0233 4334354</div>
      <div className="main__content__table__list__entry">
        <img
          src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
          className="main__content__table__list__entry__img"
        />
      </div>

      <div className="main__content__table__list__entry">5500</div>
    </div>
  );
}

export default function InvoiceBills({}) {
  return (
    <div className="main">
      <div className="main__header">
        <div className="main__header__top">
          <div className="main__header__top__heading">Invoice & Bills</div>
          <div className="main__header__top__buttons">
            {/* <button className="main__header__top__buttons__button">
              Bulk Add
            </button> */}
          </div>
        </div>
      </div>
      <div className="main__content">
        <div className="main__top">
          <div className="main__top__left">
            <div className="main__top__row">
              <DatePicker label="Start Date" />
              <DatePicker label="End Date" />
            </div>
            <div className="main__top__row">
              <input
                type="tel"
                className="main__top__row__input"
                placeholder="Search by Phone Number"
              />
            </div>
            <div className="main__top__row">
              <button className="main__top__row__button">Filter</button>
            </div>
          </div>
          <div className="main__top__right">
            <div className="main__top__row">
              <DatePicker label="Invoice & Bills" justLabel />
            </div>
            <div className="main__top__table">
              <div className="main__top__table__row">
                <div className="main__top__table__row__entry">Total Sales</div>
                <div className="main__top__table__row__entry">5345435345</div>
              </div>
              <div className="main__top__table__row">
                <div className="main__top__table__row__entry">
                  Total Receipt
                </div>
                <div className="main__top__table__row__entry">5345435345</div>
              </div>
              <div className="main__top__table__row">
                <div className="main__top__table__row__entry">
                  Application Dues
                </div>
                <div className="main__top__table__row__entry">5345435345</div>
              </div>
            </div>
          </div>
        </div>
        <div className="main__content__table">
          <div className="main__content__table__header">
            <TableHeaderEntry title="Phone Numbers" />
            <TableHeaderEntry title="Recipts" />
            <TableHeaderEntry title="Purchases" />
          </div>
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
          <InvoiceBillsTableEntry />
        </div>
      </div>
    </div>
  );
}
