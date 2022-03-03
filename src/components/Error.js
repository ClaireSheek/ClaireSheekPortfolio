import React from "react";
import { Animated } from "react-animated-css";
import { Link } from "react-router-dom";

const ErrorPage = ({ page }) => {
  return (
    <div className="content landing">
      <div>
        <Animated animationIn="flipInX" animationInDelay={500}>
          <h4>Sorry!</h4>
        </Animated>
        <Animated animationIn="fadeInRight">
          <p>
            This project is currently undergoing a revamp! <br />
            In the meantime, please enjoy my presentation of the working
            prototype at the time of Graduation.
          </p>
          <button>
            <Link to={"/portfolio"} name="Portfolio">
              Back to Portfolio
            </Link>
          </button>
        </Animated>
      </div>
    </div>
  );
};

export default ErrorPage;
