import React from "react";
import { Animated } from "react-animated-css";
import salonGif from "../images/salonGif.gif";
import parallaxScroll from "../images/parallaxScroll.gif";
import JSdrumKit from "../images/JSdrumKit.gif";
import JSCSSclock from "../images/JSCSSclock.gif";
import imageGalleryGif from "../images/imageGalleryGif.gif";
import editCSS from "../images/editCSS.gif";
import atxbusiness from "../images/atxbusiness.gif";
import ondraft from "../images/ondraft.gif";
import SeymourGif from "../images/Seymour.gif";
import Seymour from "../images/Seymour.mp4";
import Gif from "./Gif";

const Portfolio = () => {
  return (
    <Animated animationIn="fadeInRight" animationOut="fadeOutLeft">
      <Animated animationIn="flipInX" animationInDelay={500}>
        <h2 className="title">Portfolio</h2>
      </Animated>
      <section className="gallery content">
        <div className="videoBox">
          <video width="600" height="400" controls="controls">
            <source src={Seymour} type="video/mp4" />
            <p>
              Your browser doesn't support HTML5 video. Here is a{" "}
              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:6814218497124560896/"
                target="_blank"
                rel="noreferrer"
              >
                link to the video
              </a>{" "}
              instead.
            </p>
          </video>
          <h3>Capstone Project Presentation: Austin Coding Academy</h3>
          <div className="overlay">
            <div className="text">
              <a
                href="https://seymour-plant-care.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              ></a>
            </div>
          </div>
        </div>
        <Gif
          src={SeymourGif}
          alt={"video clip of website example"}
          url={"./error"}
          target={"_self"}
          title={"Seymour: Houseplant Care"}
          subtitle={"React, Node, MySQL"}
        />
        <Gif
          src={atxbusiness}
          alt={"video clip of website example"}
          url={"https://clairesheek.github.io/ATXBusinessApp/"}
          title={"Dog Friendly Business Finder"}
          subtitle={"React, Google Maps API, Material UI"}
        />
        <Gif
          src={ondraft}
          alt={"video clip of website example"}
          url={"https://clairesheek.github.io/punk-api-react-app/"}
          title={"Beer Draft List"}
          subtitle={"HTML, CSS, JS, Rest API"}
        />
        <Gif
          src={salonGif}
          alt={"video clip of website example"}
          url={"https://clairesheek.github.io/hairSalonWebsite/"}
          title={"Sample Salon Site"}
          subtitle={"HTML, CSS"}
        />
        <Gif
          src={parallaxScroll}
          alt={"video clip of website example"}
          url={"https://clairesheek.github.io/parallaxPractice/"}
          title={"Parallax Illustration"}
          subtitle={"Adobe AI, HTML, CSS, Rellax"}
        />
        <Gif
          src={JSdrumKit}
          alt={"video clip of website example"}
          url={"https://clairesheek.github.io/JSDrumKit/"}
          title={"JavaScript Drum Kit"}
          subtitle={"HTML, CSS, Javascript"}
        />
        {/* <Gif
          src={imageGalleryGif}
          alt={"video clip of website example"}
          url={"https://clairesheek.github.io/image-gallery/"}
          title={"Basic Image Gallery"}
          subtitle={"HTML, CSS"}
        /> */}
      </section>
    </Animated>
  );
};

export default Portfolio;
