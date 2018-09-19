import React from "react";

const Quotes = ({ quote }) => {
  return (
    <div className="columns has-margin-top">
      <div className="column">
        <div className="h1 is-italic">“{quote}”</div>
        <div className="is-smallcaps">Ron Swanson</div>
      </div>
    </div>
  );
};

export default Quotes;
