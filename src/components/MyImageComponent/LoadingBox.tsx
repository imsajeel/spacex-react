import { Loading } from "@geist-ui/react";
import React from "react";

const LoadingImage = () => {
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Loading />
    </div>
  );
};

export default LoadingImage;
