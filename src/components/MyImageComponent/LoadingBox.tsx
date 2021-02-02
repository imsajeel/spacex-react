import { Loading } from "@geist-ui/react";
import React from "react";

const LoadingImage = () => {
  return (
    <div
      style={{
        width: "200px",
        height: "250px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(20,20,20)",
        borderRadius: "20px",
      }}
    >
      <div style={{ color: "grey" }}>
        <Loading />
        <br />
        <br />
        loading image...
      </div>
    </div>
  );
};

export default LoadingImage;
