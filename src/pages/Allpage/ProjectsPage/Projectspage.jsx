import React from "react";
import qrgen from "../../../images/qrgen.png";
import voici from "../../../images/voici.png";
import tonedThreads from "../../../images/tonedthreads.jpeg";
import frontendfighters from "../../../images/frontendfighters.png";
import amazonclone from "../../../images/amazon.png";
import npmpackage from "../../../images/npm-logo.png";
import Card from "../../../sharedComponents/cards/Card";
import Devwell from "../../../images/devu.png";
import "./Projectspage.css";
import { Link } from "react-router-dom";

function Projectspage() {
  return (
    <div className="projectComps custom-container">
      <div className="homebtn">
        <Link to="/">Home </Link>
      </div>
      <Card
        imageSrc={npmpackage}
        buttonLabel="Live"
        buttonLink="https://www.npmjs.com/package/react-flow-form"
        description="This package provides a simple and customizable multistep form flow for React applications. It allows you to create multistep forms with ease, enabling users to navigate through different sections of the form smoothly."
      />
      <Card
        imageSrc={frontendfighters}
        description="Welcome to my comprehensive frontend developer's repository, 
        a one-stop resource for all your frontend needs. With 16 topics ranging 
        from JavaScript fundamentals, DOM challenges, and CSS concepts to machine
         coding rounds and frontend interview questions, this repo offers a 
         wealth of knowledge to enhance your skills. Additionally, you'll find
          exciting React app projects to put your newfound knowledge into practice. 
          Explore this curated collection and empower yourself with the tools and
           insights necessary to excel in the dynamic world of frontend development"
        buttonLabel="Repo"
        buttonLink="https://github.com/rounit08/frontendfighters"
      />
      <Card
        imageSrc={tonedThreads}
        description="tonedThreads is a platform designed to simplify the process of selecting trendy clothes online. It utilizes sophisticated filtering algorithms to cater to users of diverse demographics, ensuring that each user receives personalized clothing recommendations based on their preferences."
        buttonLabel="Repo"
        buttonLink="https://github.com/rounit08/tonedthreads"
      />
      <Card
        imageSrc={qrgen}
        description="QRGEN - A QR code generator project built using React.js,
         a popular JavaScript library for building user interfaces. 
         It allows users to easily generate QR codes by inputting text or URLs.
          The application leverages React's component-based architecture and 
          integrates with a QR code generation library to dynamically create
           QR codes. Users can download it from the website itself, which helps in sharing."
        buttonLabel="Repo"
        buttonLink="https://github.com/rounit08/qrgenreact"
      />
      <Card
        imageSrc={voici}
        description="VOICI - A voice-to-text generator project, developed using React.js,
         enables users to convert spoken language into written text effortlessly. 
         Powered by the Web API, the application captures audio input from
          the user's microphone and leverages React's state management to display 
          real-time transcriptions. This project has a feature to save the note that converted using VOICI"
        buttonLabel="Repo"
        buttonLink="https://github.com/rounit08/voici"
      />
      <Card
        imageSrc={Devwell}
        description="Boost Your Developer Lifestyle with DevWell: A chrome extension to maintain healthy 
        lifestyle by reminding for exercise and water after every 90 mins. This works on the Chrome APIs with the help 
        of which Devwell calulates and analyse if the active time on browser is 90 mins, then it will make a popup which has a water intake reminder and 
        a simple exercise to do to maintain the physical health"
        buttonLabel="Repo"
        buttonLink="https://github.com/rounit08/devwell"
      />
      <Card
        imageSrc={amazonclone}
        description="Experience the world of e-commerce with  Amazon clone 
        built using React.js. This application faithfully 
        replicates the look and feel of Amazon, offering a seamless user experience. 
        Powered by React.js, the project showcases the latest frontend development 
        techniques,  component-based architecture, 
        and responsive design, to provide an immersive online shopping experience."
        buttonLabel="Repo"
        buttonLink="https://github.com/rounit08/amazonclonereact"
      />
    </div>
  );
}

export default Projectspage;
