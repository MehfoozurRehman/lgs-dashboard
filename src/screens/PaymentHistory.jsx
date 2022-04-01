import React from "react";
import TableHeaderEntry from "../components/TableHeaderEntry";

function PaymentHistoryTableEntry({}) {
  return (
    <div className="main__content__table__list">
      <div className="main__content__table__list__entry">123213123</div>
      <div className="main__content__table__list__entry">11/2/22</div>
      <div className="main__content__table__list__entry">34,0000</div>
      <div className="main__content__table__list__entry">
        <div className="main__content__table__list__entry__paid">Paid</div>
      </div>
      <div className="main__content__table__list__entry">Monthly</div>
    </div>
  );
}

export default function PaymentHistory({}) {
  return (
    <div className="main">
      <div className="main__header">
        <div className="main__header__top">
          <div className="main__header__top__heading">Payment History</div>
          <div className="main__header__top__buttons"></div>
        </div>
      </div>
      <div className="main__content">
        <div className="main__content__table">
          <div className="main__content__table__header">
            <TableHeaderEntry title="Transaction ID" />
            <TableHeaderEntry title="Date" />
            <TableHeaderEntry title="Amount" />
            <TableHeaderEntry title="Status" />
            <TableHeaderEntry title="Type" />
          </div>
          <PaymentHistoryTableEntry />
          <PaymentHistoryTableEntry />
          <PaymentHistoryTableEntry />
          <PaymentHistoryTableEntry />
          <PaymentHistoryTableEntry />
          <PaymentHistoryTableEntry />
          <PaymentHistoryTableEntry />
          <PaymentHistoryTableEntry />
          <PaymentHistoryTableEntry />
          <PaymentHistoryTableEntry />
          <PaymentHistoryTableEntry />
          <PaymentHistoryTableEntry />
          <PaymentHistoryTableEntry />
          <PaymentHistoryTableEntry />
          <PaymentHistoryTableEntry />
          <PaymentHistoryTableEntry />
          <PaymentHistoryTableEntry />
          <PaymentHistoryTableEntry />
          <PaymentHistoryTableEntry />
          <PaymentHistoryTableEntry />
          <PaymentHistoryTableEntry />
          <PaymentHistoryTableEntry />
          <PaymentHistoryTableEntry />
          <PaymentHistoryTableEntry />
          <PaymentHistoryTableEntry />
          <PaymentHistoryTableEntry />
          <PaymentHistoryTableEntry />
          <PaymentHistoryTableEntry />
          <PaymentHistoryTableEntry />
          <PaymentHistoryTableEntry />
          <PaymentHistoryTableEntry />
          <PaymentHistoryTableEntry />
          <PaymentHistoryTableEntry />
          <PaymentHistoryTableEntry />
        </div>
      </div>
    </div>
  );
}
