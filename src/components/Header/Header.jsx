import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <ul className="headerList">
        <a href="https://github.com/rounit08" target="_blank">
          <li id="one">Github</li>
        </a>
        <a href="https://dev.to/rounit08" target="_blank">
          <li id="two">Blog</li>
        </a>
      </ul>
    </div>
  );
};

export default Header;
