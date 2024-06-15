import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { useMTGService } from "../../services/MTGService";

import "./cards-wrapper.scss";
//вынести card в отдельный и сделать skelet loading у самого card, бо хуйня картинку еще грузит
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
  const content = !(loading || error) ? <View cards={cards} /> : null;

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
  for (let i = 0; i < 16; i++) {
    temp.push(
      <li key={i} className="cards_wrapper_card">
        <div className="cards_wrapper_card_loading" />
      </li>
    );
  }
  return temp;
};

const View = ({ cards }) => {
  if (Object.keys(cards).length === 0) return <></>;
  return cards.map(({ name, id, imageUrl }) => {
    return (
      <li key={id} className="cards_wrapper_card">
        <img className="cards_wrapper_card_image" src={imageUrl} alt={name} />
      </li>
    );
  });
};
View.propTypes = {
  cards: PropTypes.array,
};
