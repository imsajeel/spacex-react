import React, { useState } from "react";
import LoadingBox from "./LoadingBox";

interface Props {
  src: any;
  alt?: string | null | undefined;
  style?: any | null | undefined;
}

const MyImageComponent: React.FC<Props> = ({ src, alt, style }) => {
  const [load, setLoad] = useState(false);

  return (
    <>
      <img
        onLoad={() => setLoad(true)}
        src={src}
        alt={alt || src}
        style={{ ...style, display: load ? "block" : "none" }}
      />
      <div style={{ display: load ? "none" : "block" }}>
        <LoadingBox />
      </div>
    </>
  );
};

export default MyImageComponent;
