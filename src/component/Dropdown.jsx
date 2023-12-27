import { useState } from "react";
import "../dropDown.css";

export const Dropdown = () => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(""); // Change to a string
  const colors = ["black", "blue", "green", "red"];

  return (
    <div className="dropdown-container">
      <button
        onMouseEnter={() => setShow(true)}
        style={{ display: "flex", padding: "10px 30px 10px 30px" }}
      >
        {selected.length ? selected : "Color"}{" "}
        {/* Display "Color" if nothing is selected */}
      </button>
      {show && (
        <ul className="dropdown-list">
          {colors.map((color, index) => (
            <li
              key={index}
              className={color === selected ? "selected" : ""}
              style={{
                listStyle: "none",
                padding: "10px 30px 10px 30px",
                cursor: "pointer",
                backgroundColor: "black",
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
