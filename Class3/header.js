import React from "react";
import ReactDOM from "react-dom/client";

import { AiOutlineUser } from "react-icons/ai";

const HeaderComp = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <img
        src="https://dz8fbjd9gwp2s.cloudfront.net/logos/6389e494e4b0a2e361db7362.png?v=6"
        alt="namaste dev logo"
        width="50"
        height="50"
      />
      <div>
        <input type="search" className="input" />
      </div>

      <div style={{ fontSize: "2rem", color: "tomato" }}>
        <AiOutlineUser />
      </div>
    </div>
  );
};

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComp />);
