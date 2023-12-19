import React from "react";

import logo from "../../assets/vb-named-logo.png";

import "./Navbar.css";
import { IoCreateOutline } from "react-icons/io5";

function Navbar(props) {
  return (
    <div className="nav-main">
      <img src={logo} alt="" className="nav-logo" />
      <div
        className="nav-create-button"
        onClick={() => {
          props.setCreateForm((prev) => !prev);
        }}
      >
        <IoCreateOutline size={"1.5rem"} />
      </div>
    </div>
  );
}

export default Navbar;
