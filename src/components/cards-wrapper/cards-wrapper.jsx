import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import { useMTGService } from "../../services/MTGService";

import "./cards-wrapper.scss";

const CardWrapper = () => {
  const [cards, setCards] = useState([]);
  const [imgLoading, setImgLoading] = useState(true);
  const { loading, error, getCards, clearError } = useMTGService();

  useEffect(() => {
    updateCard();
  }, []);

  const updateCard = () => {
    clearError();
    getCards().then(setCards);
  };

  const imgLoaded = () => setImgLoading(false);

  const errorMessage = error ? <div>{error.text}</div> : null;
  const skeleton = loading || imgLoading ? <SkeletonLoading /> : null;
  const content = !( error ) ? (
    <View cards={cards} imgLoaded={imgLoaded} />
  ) : null;

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
//Блять как то надо разделить логику вью и загрузке как то
const View = ({ cards, imgLoaded }) => {
  const ref = useRef(0);
  if (Object.keys(cards).length === 0) return <></>;

  const handleLoading = () => {
    ref.current = ref.current + 1;
    const D = ref.current - 10;
    if (8 === D) imgLoaded();
  };

  return cards.map(({ name, id, imageUrl }) => {
    return (
      <li key={id} className="cards_wrapper_card">
        <img
          className="cards_wrapper_card_image"
          src={imageUrl}
          alt={name}
          onLoad={handleLoading}
        />
      </li>
    );
  });
};

View.propTypes = {
  cards: PropTypes.array,
};
