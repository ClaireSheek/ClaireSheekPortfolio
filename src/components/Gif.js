import React from "react";

const Gif = ({ src, alt, url, target, title, subtitle }) => {
  return (
    <div className="imageBox">
      <img src={src} alt={alt} className="image" loading="lazy" />
      <div className="overlay">
        <div className="text">
          <a href={url} target={target || "_blank"} rel="noreferrer">
            <h3>{title}</h3>
            <p>{subtitle}</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gif;
