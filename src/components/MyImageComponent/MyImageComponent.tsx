import React, { useState } from "react";
import LoadingBox from "./LoadingBox";

interface Props {
  src: any;
  alt?: string | null | undefined;
  style?: any | null | undefined;
}

const MyImageComponent: React.FC<Props> = ({ src, alt, style }) => {
  const [load, setLoad] = useState(false);
  const [blur, setBlur] = useState(8);
  const [scale, setScale] = useState(1.1);

  return (
    <div style={{ ...style, overflow: "hidden", borderRadius: "5px" }}>
      <img
        onLoad={() => {
          setTimeout(() => {
            setBlur(0);
            setScale(1);
          }, 500);
          setLoad(true);
        }}
        src={src}
        alt={alt || src}
        style={{
          ...style,

          display: load ? "block" : "none",
          filter: `blur(${blur}px)`,
          transform: `scale(${scale})`,
        }}
      />

      <div style={{ display: load ? "none" : "block" }}>
        <LoadingBox />
      </div>
    </div>
  );
};

export default MyImageComponent;
