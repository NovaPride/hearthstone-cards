import { useState, useEffect, useRef } from "react";

import Tilt from "react-parallax-tilt";

import "./card-image.scss";

import { isObject } from "../../../utils/utils";

const CardImage = ({ src, alt, scale = 1.05 }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef(src);

  useRef;
  useEffect(() => {
    const image = new Image();

    if (isObject(src)) {
      const { png, large, normal, small } = src;
      ref.current = png
        ? png
        : large
        ? large
        : normal
        ? normal
        : small
        ? small
        : "https://wallpapers.com/images/featured/funny-memes-picture-rzemn8642wst0ckw.jpg";
    } else if (typeof src === "undefined" || typeof src === "null") {
      ref.current =
        "https://wallpapers.com/images/featured/funny-memes-picture-rzemn8642wst0ckw.jpg";
    } else {
      ref.current = src;
    }
    image.src = ref.current;
    image.onload = () => {
      setIsLoaded(true);
    };
  }, [src]);

  return (
    <>
      {isLoaded ? (
        <Tilt className="card_image_tilt" tiltReverse={true} scale={scale}>
          <img className="card_image_img" src={ref.current} alt={alt} />
        </Tilt>
      ) : (
        <div className="card_image_loading">
          <div className="card_image_loading_inner card_image_loading_inner_colored" />
        </div>
      )}
    </>
  );
};

export default CardImage;
