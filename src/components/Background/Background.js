import React from "react";
// import { CSSTransitionGroup } from "react-transition-group";

const Background = ({ imageLoaded, handleImageLoader, randomNumber }) => {
  return (
    <React.Fragment>
      <div className="background-container background-loaded background-fade-in">
        <img
          className={imageLoaded ? "is-hidden" : "background-preload"}
          src={`http://picsum.photos/8/?image=${randomNumber}`}
          width="100%"
          alt="Daily Swanson"
        />
        <img
          className={
            imageLoaded
              ? "background-loaded background-fade-in"
              : "background-loaded"
          }
          src={`http://picsum.photos/1928/?image=${randomNumber}`}
          onLoad={handleImageLoader}
          alt="Daily Swanson"
        />
      </div>
      <div className="black-overlay" />
    </React.Fragment>
  );
};

export default Background;
