import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DatePickerComp({ label, justLabel }) {
  const [date, setDate] = useState("12/24/2020");
  return (
    <div className="date__picker">
      <div className="date__picker__label">{label}</div>
      {justLabel ? null : (
        <>
          <div className="date__picker__value">
            {date}
            <DatePicker
              onChange={(e) => {
                setDate(
                  e.getDate() + "/" + e.getMonth() + "/" + e.getFullYear()
                );
              }}
            />
          </div>
        </>
      )}
    </div>
  );
}
