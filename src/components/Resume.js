import React from "react";
import { Animated } from "react-animated-css";
import Pdf from "./Pdf";
import ClaireSheekResume from "../images/ClaireSheekResume.pdf";

const Resume = () => {
  return (
    <Animated animationIn="fadeInRight" animationOut="fadeOutLeft">
      <Animated animationIn="flipInX" animationInDelay={500}>
        <h2 className="title">Resume</h2>
      </Animated>
      <div className="content resume">
        <Pdf />
        <button>
          <a href={ClaireSheekResume} download="ClaireSheekResume.pdf">
            Download
          </a>
        </button>
      </div>
    </Animated>
  );
};

export default Resume;
