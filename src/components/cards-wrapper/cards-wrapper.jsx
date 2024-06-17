import { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import PropTypes from "prop-types";

import { useMTGService } from "../../services/MTGService";

import "./cards-wrapper.scss";

const CardWrapper = () => {
  const [cards, setCards] = useState([]);
  const { loading, error, getCards, clearError } = useMTGService();

  useEffect(() => {
    updateCard();
  }, []);

  const updateCard = () => {
    clearError();
    getCards().then(setCards);
  };

  const errorMessage = error ? <div>{error.text}</div> : null;
  const skeleton = loading ? <SkeletonLoading /> : null;
  const content = !error ? <View cards={cards} /> : null;

  return (
    <ul className="cards_wrapper">
      {errorMessage}
      {skeleton}
      {content}
    </ul>
  );
};

export default CardWrapper;

const SkeletonLoading = () => {
  const temp = [];
  for (let i = 0; i < 18; i++) {
    temp.push(
      <li key={i} className="cards_wrapper_card">
        <div className="cards_wrapper_card_loading">
          <div className="cards_wrapper_card_loading_inner" />
        </div>
      </li>
    );
  }
  return temp;
};

const View = ({ cards }) => {
  if (Object.keys(cards).length === 0) return <></>;

  return cards.map(({ id, name, imageUrl }) => {
    return (
      <li key={id} className="cards_wrapper_card">
        <ImageComponent src={imageUrl} alt={name} />
      </li>
    );
  });
};
View.propTypes = {
  cards: PropTypes.array,
};

const ImageComponent = ({ src, alt }) => {
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
        <Tilt className="cards_wrapper_card_tilt" tiltReverse={true} scale={1.05}>
          <img src={src} alt={alt} />
        </Tilt>
      ) : (
        <div className="cards_wrapper_card_loading">
          <div className="cards_wrapper_card_loading_inner cards_wrapper_card_loading_inner_colored" />
        </div>
      )}
    </>
  );
};
ImageComponent.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
