import React from "react";
import logo from "../assets/logo.svg";

export default function ChallanComponent({ type }) {
  return (
    <div className="challan__component">
      <div className="challan__component__header">
        <img
          src={logo}
          alt="logo"
          className="challan__component__header__logo"
        />
        <div className="challan__component__header__content">
          <div className="challan__heading">Dubai Islamic Bank</div>
          <div className="challan__para">
            Any Branch Of Dubai Islamic Bank Ltd
          </div>
          <div className="challan__para">
            For Credit To: <span>Lahore Grammar School Pvt Ltd</span>
          </div>
          <div
            style={{ marginBottom: "1em" }}
            className="challan__sub__heading"
          >
            Merchant ID: 0030229666015
          </div>
        </div>
      </div>
      <div className="challan__component__row">
        <div className="challan__component__row__entry__left">
          Bill NO: <span> 24020210003280-1</span>
        </div>
        <div className="challan__component__row__entry__right">
          Bill Date: <span> 17-Dec-2021</span>
        </div>
      </div>
      <div className="challan__component__row">
        <div className="challan__component__row__entry__left">
          Name: <span> John Doe</span>
        </div>
        <div className="challan__component__row__entry__right">
          Due Date: <span> 17-Dec-2021</span>
        </div>
      </div>
      <div className="challan__component__row">
        <div className="challan__component__row__entry__left">
          Reg No: <span> lgs240202100055</span>
        </div>
        <div className="challan__component__row__entry__right">
          Bill Month: <span> Jan 2022</span>
        </div>
      </div>
      <div className="challan__component__row">
        <div className="challan__component__row__entry__left">
          Class: <span> Grade</span>
        </div>
        <div className="challan__component__row__entry__right">
          Concession: <span>N/A</span>
        </div>
      </div>
      <div className="challan__component__row">
        <div className="challan__component__row__entry__left">
          Fee For: <span> Jan 2022</span>
        </div>
      </div>
      <table className="challan__table">
        <thead>
          <tr>
            <th>PARTICULARS</th>
            <th>AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> School Fee Amount</td>
            <td>17,352</td>
          </tr>
          <tr>
            <td>Admission fee</td>
            <td>3,000</td>
          </tr>
          <tr>
            <td>Registration fee</td>
            <td>3,352</td>
          </tr>
          <tr>
            <td>Security fee</td>
            <td>15,000</td>
          </tr>
          <tr>
            <td>Grand Total</td>
            <td>17,352</td>
          </tr>
        </tbody>
      </table>
      <div className="challan__component__sub__total">
        Rupees: <span> Seventeen Thousand Three Hundred Fifty-two</span>
      </div>
      <div className="challan__component__sub__total__line"></div>
      <div style={{ marginTop: "1em" }} className="challan__heading">
        Dubai Islamic Bank:
      </div>
      <div className="challan__sub__heading">
        The school reserves the right to bill additional amounts for this period
        which will be payable provided it obtains approval as required under
        law.
      </div>
      <ol className="challan__para">
        <li>
          This fee must be deposited between 9:00 a.m. and 5:00 p.m. in all
          working days.
        </li>
        <li>
          This bill must be deposited in any branch of the prescribed bank
          within 10 days of the concerned quarter. No one else is authorized to
          receive the fee in cash.
        </li>
        <li>
          A surcharge of Rs.50/-per day will be levied on late deposit fee. The
          Student's name will be struck off the school rolls without further
          notice, if the fee is not deposited within 3 weeks of the Due date.
        </li>
        <li>
          If a child is absent for more than 2 weeks without notice and the fee
          is not paid his/her name will be struck off the Rolls.
        </li>
        <li>
          If the fee of your child remains unpaid 2 weeks after due date, he/she
          will not be allowed to sit in class.
        </li>
        <li>
          If the fee of your child remains unpaid 3 weeks after due date,
          his/her name will be struck off the rolls.
        </li>
        <li>
          The security will be refunded uptil six months of
          withdrawal/graduation and once all dues are cleared.
        </li>
        <li>
          The company reserves the right to utilize the security deposit at its
          sole discretion till refunded.
        </li>
        <li>
          Fee of 1st and 4th quarter i.e July to September and April to June
          will not be refunded in any case. However, the security is refundable.
        </li>
        <li>
          Class 11 and A-2 Students remain on the school rolls end of June and
          shall pay fee accordingly.
        </li>
        <li>There will be an increase in fee annually as per law.</li>
        <li>
          Disclaimer: Payment of this bill does not ensure promotion to the next
          class.
        </li>
      </ol>
      <div style={{ marginTop: "1em" }} className="challan__heading">
        {type}
      </div>
      <div className="challan__para">
        This is a computer generated document and does not require a signature.
      </div>
    </div>
  );
}
