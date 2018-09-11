import React from "react";
import { CSSTransitionGroup } from "react-transition-group";

const Background = image => {
  return (
    <React.Fragment>
      <CSSTransitionGroup
        transitionName="background"
        transitionAppear={true}
        transitionAppearTimeout={900}
        transitionEnter={false}
        transitionLeave={false}
      >
        <img
          alt="Lorem picsum"
          src="https://picsum.photos/1928/?random"
          className="background"
        />
      </CSSTransitionGroup>
    </React.Fragment>
  );
};

export default Background;
