import React, { useState, useRef, useEffect } from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import LinkedinSVG from "../../svgs/LinkedinSVG";
import GithubSVG from "../../svgs/GithubSVG";
import SubstackSVG from "../../svgs/SubstackSVG";

const Homepage = () => {
  const [expanded, setExpanded] = useState(false);
  const searchBoxRef = useRef(null);
  const [placeholder, setPlaceholder] = useState("Search");

  const handleClickResume = () => {
    window.location.href =
      "https://drive.google.com/file/d/131OodesWdFwEAwgtbrcd_t6A2UUr4rEM/view?usp=drive_link";
  };

  const handleClickLinkedIn = () => {
    window.location.href = "https://www.linkedin.com/in/rounit08";
  };

  const handleClickCertification = () => {
    window.location.href =
      "https://www.freecodecamp.org/certification/rounit08/javascript-algorithms-and-data-structures";
  };

  const handleClickSearch = (e) => {
    e.stopPropagation();
    setExpanded(true);

    setPlaceholder("Dive in ");
  };

  const searchBoxStyle = {
    height: expanded ? "150px" : "50px",
    transition: "width 0.3s ease",
    placeholder: "Search",
    icon: {
      visibility: expanded ? "hidden" : "visible",
    },
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchBoxRef.current && !searchBoxRef.current.contains(e.target)) {
        setExpanded(false);
        console.log("click outside");
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
      <h1 className="homeTitle">Rounit Sinha</h1>
      <div className="search" style={searchBoxStyle} ref={searchBoxRef}>
        {!expanded && <SearchIcon className="icon" />}

        {expanded ? (
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
        ) : (
          <input
            className="home__input"
            autoFocus
            onClick={handleClickSearch}
            type="text"
            readOnly
            placeholder={placeholder}
          />
        )}
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
        <a target="_blank" href="https://cssbattle.dev/player/rounit08">
          CSS Battle
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
      </div>

      <div className="frontendfighters">
        <span>Explore Frontend Fighters</span>
        <div className="ffsocials">
          <a href="https://www.linkedin.com/company/frontendfighters">
            <div className="fflinkedin">
              <LinkedinSVG />
            </div>
          </a>

          <a href="https://github.com/rounit08/frontendfighters">
            <div className="ffgithub">
              <GithubSVG />
            </div>
          </a>
          <a href="https://frontendfighters.substack.com/">
            <div className="ffblog">
              <SubstackSVG />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
