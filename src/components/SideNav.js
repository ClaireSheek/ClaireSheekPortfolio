import React from 'react'
import {Animated} from "react-animated-css";
import { Link } from 'react-router-dom'
import Linkedin from '../images/Linkedin'
import Github from '../images/Github'
import Gmail from '../images/Gmail'

const SideNav = ({page, setPage}) => {

  return (
    <nav>
      <Animated animationIn="fadeInDown" >
      <div className="">
        <Link to={'/'} name="Landing">
          <h2>Claire Sheek</h2>
          <h4>Full Stack Developer</h4>
        </Link>
      </div>
      </Animated>
      <Animated animationIn="slideInLeft">
        <hr/>
      </Animated>
      <Animated animationIn="slideInLeft" animationInDelay={100}>
      <ol>
        <li><Link to={'/portfolio'} name="Portfolio">Portfolio</Link></li>      {/* </Animated> */}
        <li><Link to={'/resume'} name="Resume">Resume</Link></li>
        <li><Link to={'/contact'} name="Contact">Contact</Link></li>
      </ol>
        <div>
          <a href={"https://www.linkedin.com/in/clairesheek"} target="_blank" rel="noreferrer"><Linkedin className="icon"/></a>
          <a href={"https://www.github.com/ClaireSheek"} target="_blank" rel="noreferrer"><Github className="icon"/></a>
          <a href={"mailto: clairesheek@gmail.com"} target="_blank" rel="noreferrer"><Gmail className="icon"/></a>
        </div>
      </Animated>
    </nav>
  )
}

export default SideNav
