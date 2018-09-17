import React from "react";

const Quotes = ({ quote }) => {
  return (
    <div className="card">
      {quote}
      <br />- Ron Swanson
    </div>
  );
};

export default Quotes;
