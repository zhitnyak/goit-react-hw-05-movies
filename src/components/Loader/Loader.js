import React from "react";
import Loader from "react-loader-spinner";

const Spinner = () => {
  return (
    <div>
      <Loader
        type="Oval"
        color="#DCB60E"
        height={60}
        width={60}
        style={{ textAlign: "center", paddingTop: "20px" }}
      />
    </div>
  );
};

export default Spinner;
