import React from "react";

const Quotes = ({ quote }) => {
  return (
    <div className="card">
      <div className="is-smallcaps">Today's Swanson quote</div>
      <div className="h1">{quote}</div>
    </div>
  );
};

export default Quotes;
