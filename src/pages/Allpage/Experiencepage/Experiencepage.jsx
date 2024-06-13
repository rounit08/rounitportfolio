import React from "react";
import "./Experiencepage.css";
import { Link } from "react-router-dom";

function Experiencepage() {
  return (
    <>
      <Link to="/">
        <div className="homebttn">Home</div>
      </Link>
      <div className="timeline">
        <div className="outer">
          <div className="cardss">
            <div className="info">
              <h3 className="title">SDE-1 @AppScrip</h3>
              <p>
                * Developing the UI for the SaaS product, Isometrik AI. *
                Working with NextJS and TailwindCSS, also Strapi as a CMS . (Apr
                2024- Present)
              </p>
            </div>
          </div>
          <div className="cardss">
            <div className="info">
              <h3 className="title">SDE Intern @ZeStream</h3>
              <p>
                * Developing the interactive dashboard for the SaaS product.
                Managing the hiring for new frontend techies * Writing tests for
                the production ready codes. (Sep 2023- Present)
              </p>
            </div>
          </div>
          <div className="cardss">
            <div className="info">
              <h3 className="title">Frontend Intern @EVE Healthcares</h3>
              <p>
                * Developed the UI of search page and complete user booking
                flow. * Writing tests for the production ready codes. (Jul 2023-
                Sep 2023)
              </p>
            </div>
          </div>
          <div className="cardss">
            <div className="info">
              <h3 className="title">
                {" "}
                Web developer @Shri Mata Vaishno Devi University
              </h3>
              <p>
                Working on the website of Hindi Cell, SMVDU (Feb 2023 - Present)
              </p>
            </div>
          </div>
          <div className="cardss">
            <div className="info">
              <h3 className="title">Digital Head @HindiCell, SMVDU</h3>
              <p>
                Working on the website of Hindi Cell, SMVDU (Feb 2023 - Present)
              </p>
            </div>
          </div>
          <div className="cardss">
            <div className="info">
              <h3 className="title">Builder @FrontendFighters</h3>
              <p>
                Builing a community of frontend developers and helping them to
                learn and grow. (Feb 2023 - Present)
              </p>
            </div>
          </div>
          <div className="cardss">
            <div className="info">
              <h3 className="title">Frontend intern @Entersoft</h3>
              <p>
                Worked on their one of the new product from scratch. Developed
                the frontend and worked closely with the design team to make the
                product more user friendly. (Dec 2022 - Jan 2023)
              </p>
            </div>
          </div>
          <div className="cardss">
            <div className="info">
              <h3 className="title">Web developer @Devfest Jammu 2022</h3>
              <p>
                Worked with the website team of Devfest Jammu 2022. Developed
                the website for the event using ReactJS.(Oct 2022- Dec 2022)
              </p>
            </div>
          </div>
          <div className="cardss">
            <div className="info">
              <h3 className="title">
                Open Source Contributor @HacktoberFest 2021
              </h3>
              <p>
                Raised 12PRs for different frontend issues under HacktoberFest
                2021. And 6 got selected for the issues, which makes me eligible
                for qualifying HacktoberFest 2021.(Oct 2021)
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experiencepage;
