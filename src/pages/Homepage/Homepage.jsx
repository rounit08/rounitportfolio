import React, { useState } from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const Homepage = () => {
  const handleClickResume = () => {
    window.location.href =
      "https://drive.google.com/file/d/1Fyoh3Kz3hVM4m_1VHNBIyvq4D3FlJahq/view?usp=sharing";
  };

  const handleClickLinkedIn = () => {
    window.location.href = "https://www.linkedin.com/in/rounit08";
  };

  return (
    <div className="home">
      <br /> <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 className="homeTitle">Rounit Sinha</h1>
      <div className="search">
        <SearchIcon className="icon" />
        <input autoFocus className="homeSearch" type="text" />
      </div>
      <div className="homeButton">
        <button onClick={handleClickResume}>Hire me!</button>

        <button onClick={handleClickLinkedIn}>LinkedIn</button>
      </div>
      <div className="homeContact">
        Rounit's socials :
        <a target="_blank" href="https://www.linkedin.com/in/rounit08/">
          {" "}
          LinkedIn
        </a>
        <a target="_blank" href="https://github.com/rounit08">
          Github
        </a>
        <a target="_blank" href="https://dev.to/rounit08">
          DevCommunity
        </a>
        <a target="_blank" href="https://medium.com/@rounitrsinha">
          Medium
        </a>
        <a target="_blank" href="https://twitter.com/therounitsinha">
          Twitter
        </a>
        <a target="_blank" href="https://www.instagram.com/rounitcodes/">
          Instagram
        </a>
      </div>
    </div>
  );
};

export default Homepage;
