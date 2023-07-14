import React from "react";
import Image, { StaticImageData } from "next/image";
interface Props {
  title: string;
  src: string | StaticImageData;
  imgSize?: number;
  imgPadding?: number;
}

const TechnoImage: React.FC<Props> = ({
  title,
  src,
  imgSize = 120,
  imgPadding = 0,
}) => {
  return (
    <div
      style={{
        // backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: imgSize,
          width: imgSize,
          padding: imgPadding,
        }}
      >
        <Image src={src} alt={`${title} image`}></Image>
      </div>
      <p style={{ color: "black", textAlign: "center", marginTop: "10px" }}>
        {title}
      </p>
    </div>
  );
};

export default TechnoImage;
