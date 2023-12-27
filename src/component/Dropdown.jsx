import React, { useState } from "react";

export const Dropdown = () => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState([]);
  const colors = ["black", "blue", "green"];

  return (
    <div className="dropdown-container">
      <button onMouseEnter={() => setShow(true)}>
        {selected.length ? selected : "select"}
      </button>
      {show && (
        <ul className="dropdown-list">
          {colors.map((color, index) => (
            <li
              key={index}
              style={{
                listStyle: "none",
                padding: "8px",
                cursor: "pointer",
              }}
              onClick={() => {
                setSelected(color);
                setShow(false);
              }}
            >
              {color}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
