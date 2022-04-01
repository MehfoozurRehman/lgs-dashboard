import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NavLink({ title, to, svg, list }) {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(
    window.localStorage.getItem("selectedMain")
  );
  const [dropDownselected, setDropDownselected] = useState("");

  return (
    <div className="nav__link">
      <div
        className="nav__link__entry"
        style={list && selected === title ? { marginBottom: ".5em" } : null}
      >
        <input
          type="radio"
          defaultChecked={selected === title}
          className="nav__link__entry__input"
          name="nav__link__entry__input"
          onClick={() => {
            navigate(to);
            selected === title ? setSelected(false) : setSelected(title);
            window.localStorage.setItem("selectedMain", title);
          }}
        />
        <div className="nav__link__entry__content">
          {svg} {title}
        </div>
      </div>
      {list && selected === title
        ? list.map((item, i) => (
            <div className="nav__link__dropdown" key={i}>
              <div className="nav__link__dropdown__entry">
                <input
                  type="radio"
                  className="nav__link__dropdown__entry__input"
                  name="nav__link__dropdown__entry__input"
                  onClick={() => {
                    navigate(item.to);
                    setDropDownselected(i);
                  }}
                />
                <div className="nav__link__dropdown__entry__content">
                  {item.svg}
                  {item.title}
                </div>
              </div>
              {item.child && dropDownselected === i
                ? item.child.map((subItem, i) => (
                    <div className="nav__link__sub__dropdown__entry" key={i}>
                      <input
                        type="radio"
                        className="nav__link__sub__dropdown__entry__input"
                        name="nav__link__dropdown__entry__input"
                        onClick={() => {
                          navigate(subItem.to);
                        }}
                      />
                      <div className="nav__link__sub__dropdown__entry__content">
                        {subItem.svg}
                        {subItem.title}
                      </div>
                    </div>
                  ))
                : null}
            </div>
          ))
        : null}
    </div>
  );
}
