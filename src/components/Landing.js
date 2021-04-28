import React from 'react'
import Portfolio from './Portfolio'
import {Animated} from "react-animated-css";
import myProfilePic from '../images/myProfilePic.jpg'



const Landing = ({page}) => {

  return (
    <div className="content landing">
      <div>
      <Animated animationIn="flipInX" animationInDelay={500}>
        <h4>Hello.</h4>
      </Animated>
      <Animated animationIn="fadeInRight" >
        <p>I'm Claire Sheek, Professional Tap Dancer turned Full Stack Software Developer. <br/><br/> During my time in the Arts & Entertainment industry I learned a lot of valuble life lessons on the topics of collaboration, creativity, accountability, respect and perseverance. It is an incredibly exciting journey learning how those lessons and the skills that I mastered during my time as a performer and instructor can translate into my new field. In fact, I believe that my background gives me a unique perspective on the world around me and the project I work on and would make me a valuable asset to any team.</p>
        <p>So, if you're here to learn more about my experience and current projects you've come to the right place! Have a look around and shoot me a message if have any questions, would like to collaborate, are looking for a developer, or just want to chat!</p>
        <p>If you were trying to hire me to Tap Dance, well, you may not be in the right place but you can still message me here or head to my <a href="https://clairesheek.wixsite.com/press" target="_blank" rel="noreferrer"><b>press kit</b></a> or <a href="https://www.instagram.com/clairesheek" target="_blank" rel="noreferrer"><b>instagram</b></a> for more information.</p>
      </Animated>

      </div>
      <Animated animationIn="fadeInRight"  >
        <div className="imageBox">
            <img src={myProfilePic} alt="video clip of website example" className="image"/>
          </div> 
      </Animated>
    </div>
  )
}

export default Landing
