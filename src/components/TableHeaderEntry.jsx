import React, { useState } from "react";

export default function TableHeaderEntry({ title, style }) {
  const [asending, setAsending] = useState(false);
  return (
    <div className="main__content__table__header__entry" style={style}>
      {title}
      {title === "" ? null : (
        <button
          className="main__content__table__header__entry__button"
          onClick={() => {
            asending ? setAsending(false) : setAsending(true);
          }}
        >
          {asending ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M6 21l6-8h-4v-10h-4v10h-4l6 8zm16-12h-8v-2h8v2zm2-6h-10v2h10v-2zm-4 8h-6v2h6v-2zm-2 4h-4v2h4v-2zm-2 4h-2v2h2v-2z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M6 3l-6 8h4v10h4v-10h4l-6-8zm16 14h-8v-2h8v2zm2 2h-10v2h10v-2zm-4-8h-6v2h6v-2zm-2-4h-4v2h4v-2zm-2-4h-2v2h2v-2z" />{" "}
            </svg>
          )}
        </button>
      )}
    </div>
  );
}
