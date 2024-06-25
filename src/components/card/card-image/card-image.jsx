import { useState, useEffect } from "react";

import Tilt from "react-parallax-tilt";

import "./card-image.scss";

const CardImage = ({ src, alt, scale = 1.05 }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setIsLoaded(true);
    };
  }, [src]);

  return (
    <>
      {isLoaded ? (
        <Tilt
          className="card_image_tilt"
          tiltReverse={true}
          scale={scale}>
          <img className="card_image_img" src={src} alt={alt} />
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
