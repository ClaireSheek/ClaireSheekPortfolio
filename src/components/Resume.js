import React from "react";
import { Animated } from "react-animated-css";
import Pdf from "./Pdf";
import ClaireSheekResume from "../images/ClaireSheekResume.pdf";
import download from "../images/download.png";

const Resume = () => {
  return (
    <Animated animationIn="fadeInRight" animationOut="fadeOutLeft">
      <Animated animationIn="flipInX" animationInDelay={500}>
        <h2 className="title">Resume</h2>
      </Animated>
      <div className="content resume">
        <a
          href={ClaireSheekResume}
          download="ClaireSheekResume.pdf"
          style={{ padding: "16px" }}
        >
          Download
          <img
            src={download}
            style={{ paddingLeft: "6px", maxHeight: "12px" }}
          ></img>
        </a>
        <Pdf />
      </div>
    </Animated>
  );
};

export default Resume;
