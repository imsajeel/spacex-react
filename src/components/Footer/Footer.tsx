import React from "react";

const Footer = () => {
  const currentDate = new Date();
  return (
    <div
      style={{
        backgroundColor: "black",
        padding: "30px 10px",
        textAlign: "center",
        paddingTop: "100px",
      }}
    >
      SPACEX © {currentDate.getFullYear()}
    </div>
  );
};

export default Footer;
