import React from "react";

const Loader = (props) => {
  const { className } = props;
  return (
    <div
      className={`spinner-border text-light ${className}`}
      role="status"
    ></div>
  );
};

export default Loader;
