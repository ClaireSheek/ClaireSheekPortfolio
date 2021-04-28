import React from 'react'
import {Animated} from "react-animated-css";
import salonGif from '../images/salonGif.gif'
import parallaxScroll from "../images/parallaxScroll.gif"
import JSdrumKit from "../images/JSdrumKit.gif"
import JSCSSclock from '../images/JSCSSclock.gif'
import imageGalleryGif from '../images/imageGalleryGif.gif'
import editCSS from '../images/editCSS.gif'
import atxbusiness from '../images/atxbusiness.gif'
import ondraft from '../images/ondraft.gif'


const Portfolio = () => {
  return (
    <Animated animationIn="fadeInRight" animationOut="fadeOutLeft" >
      <Animated animationIn="flipInX" animationInDelay={500} >
        <h2 className="title">Portfolio</h2>
      </Animated>
      <section className="gallery content">
        <div className="imageBox">
            <img src={atxbusiness} alt="video clip of website example" className="image"/>
            <div className="overlay">
              <div className="text">
                <a href="https://clairesheek.github.io/ATXBusinessApp/" target="_blank" rel="noreferrer"> 
                    <h3>Dog Friendly Business Finder</h3><p>View Now</p>
                </a>
              </div>
            </div>
        </div>
        <div className="imageBox">
            <img src={ondraft} alt="video clip of website example" className="image"/>
            <div className="overlay">
              <div className="text">
                <a href="https://clairesheek.github.io/punk-api-react-app/" target="_blank" rel="noreferrer"> 
                    <h3>Simple Draft List using Punk API</h3><p>View Now</p>
                </a>
              </div>
            </div>
        </div>
        <div className="imageBox">
            <img src={salonGif} alt="video clip of website example" className="image"/>
            <div className="overlay">
              <div className="text">
                <a href="https://clairesheek.github.io/hairSalonWebsite/" target="_blank" rel="noreferrer"> 
                    <h3>Responsive Salon Site</h3><p>View Now</p>
                </a>
              </div>
            </div>
          </div> 
          <div className="imageBox">
            <img src={parallaxScroll} alt="video clip of website example" className="image"/>
            <div className="overlay">
              <div className="text">
                <a href="https://clairesheek.github.io/parallaxPractice/" target="_blank" rel="noreferrer"> 
                    <h3>Parallax Illustration</h3><p>View Now</p>
                </a>
              </div>
            </div>
          </div>  
          <div className="imageBox">
            <img src={JSdrumKit} alt="video clip of website example" className="image"/>
            <div className="overlay">
              <div className="text">
                <a href="https://clairesheek.github.io/JSDrumKit/" target="_blank" rel="noreferrer"> 
                    <h3>JavaScript Drum Kit</h3><p>View Now</p>
                </a>
              </div>
            </div>
          </div>
          <div className="imageBox">
            <img src={JSCSSclock} alt="video clip of website example" className="image"/>
            <div className="overlay">
              <div className="text">
                <a href="https://clairesheek.github.io/JS-and-CSS-Clock/" target="_blank" rel="noreferrer"> 
                    <h3>CSS/JS Clock</h3><p>View Now</p>
                </a>
              </div>
            </div>
          </div>
          <div className="imageBox">
            <img src={imageGalleryGif} alt="video clip of website example" className="image"/>
            <div className="overlay">
              <div className="text">
                <a href="https://clairesheek.github.io/image-gallery/" target="_blank" rel="noreferrer"> 
                    <h3>Dynamic Image Gallery</h3><p>View Now</p>
                </a>
              </div>
            </div>
          </div>
          <div className="imageBox">
            <img src={editCSS} alt="video clip of website example" className="image"/>
            <div className="overlay">
              <div className="text">
                <a href="https://clairesheek.github.io/CSS-variables/" target="_blank" rel="noreferrer"> 
                    <h3>Edit CSS Variable with JS</h3><p>View Now</p>
                </a>
              </div>
            </div>
          </div>
    </section>
    </Animated>

  )
}

export default Portfolio
