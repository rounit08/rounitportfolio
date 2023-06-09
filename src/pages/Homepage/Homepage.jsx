import React, { useState, useRef, useEffect } from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const Homepage = () => {
  const [expanded, setExpanded] = useState(false);
  const searchBoxRef = useRef(null);
  const [placeholder, setPlaceholder] = useState("Search");

  const handleClickResume = () => {
    window.location.href =
      "https://drive.google.com/file/d/1Fyoh3Kz3hVM4m_1VHNBIyvq4D3FlJahq/view?usp=sharing";
  };

  const handleClickLinkedIn = () => {
    window.location.href = "https://www.linkedin.com/in/rounit08";
  };

  const handleClickCertification = () => {
    window.location.href =
      "https://www.freecodecamp.org/certification/rounit08/javascript-algorithms-and-data-structures";
  };

  const handleClickSearch = () => {
    setExpanded(true);
    setPlaceholder("Rounit's Portfolio -> Look ");
  };

  const searchBoxStyle = {
    height: expanded ? "350px" : "50px",
    transition: "width 0.3s ease",
    placeholder: "Search",
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchBoxRef.current && !searchBoxRef.current.contains(e.target)) {
        setExpanded(false);
        setPlaceholder("Click here");
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const linkstyle = {
    textDecoration: "none",
    backgroundColor: "transparent",
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
      <div className="search" style={searchBoxStyle} ref={searchBoxRef}>
        <SearchIcon className="icon" />
        <div className="expandeditems">
          <input
            autoFocus
            className="homeSearch"
            onClick={handleClickSearch}
            type="text"
            placeholder={placeholder}
            readOnly
          />
          {expanded && (
            <div className="searchResults">
              <button className="search-button">
                <Link style={linkstyle} to="/experience">
                  Experience
                </Link>
              </button>
              <button className="search-button">
                <Link style={linkstyle} to="/projects">
                  Projects
                </Link>
              </button>
              <button
                onClick={handleClickCertification}
                className="search-button"
              >
                Certifications
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="homeButton">
        <button onClick={handleClickResume}>Hire me!</button>

        <button onClick={handleClickLinkedIn}>LinkedIn</button>
      </div>
      <div className="homeContact">
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
