import React from "react";
import { useImage } from "react-image";

interface Props {
  src: any;
  alt?: string | null | undefined;
  style?: any | null | undefined;
}

const MyImageComponent: React.FC<Props> = ({ src, alt, style }) => {
  const { src: imagesrc, error } = useImage({
    srcList: src,
  });

  if (imagesrc) {
    return (
      <img
        src={imagesrc}
        alt={alt || imagesrc}
        style={style || { border: "0px" }}
      />
    );
  } else {
    console.log("Error", error);
    return <div>Error</div>;
  }
};

export default MyImageComponent;
