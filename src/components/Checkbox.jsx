import React from "react";

const CheckBox = ({
  onChange,
  value,
  checkedColor,
  unCheckedColor,
  iconColor,
  label,
  labelColor,
  style,
  customLabel,
}) => {
  return (
    <div className="checkbox">
      <input
        class="checkbox__input"
        type="checkbox"
        value={value}
        onChange={onChange}
      />
      <div className="checkbox__content">
        <div
          className="checkbox__content__indicator"
          style={
            value
              ? { background: checkedColor, color: iconColor, ...style }
              : { background: unCheckedColor, ...style }
          }
        >
          {value ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              class="feather feather-check"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          ) : null}
        </div>
        {customLabel ? (
          customLabel
        ) : (
          <div
            className="checkbox__content__label"
            style={{ color: labelColor }}
          >
            {label}
          </div>
        )}
      </div>
    </div>
  );
};
export default CheckBox;
