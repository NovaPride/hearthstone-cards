import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Tilt from "react-parallax-tilt";
import InfiniteScroll from "react-infinite-scroll-component";
import { CardImage } from "../../components/card";
import { useMTGService } from "../../services/MTGService";

import "./cards-wrapper.scss";

const CardWrapper = () => {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, error, getCards, clearError } = useMTGService();

  useEffect(() => {
    updateCard();
  }, []);

  const updateCard = () => {
    clearError();
    getCards().then(setCards);
  };

  const onLoadMore = () => {
    getCards(currentPage + 1)
      .then((newCards) => {
        setCards((cards) => cards.concat(newCards));
      })
      .then(() => {
        setCurrentPage((currentPage) => currentPage + 1);
      });
  };

  const errorMessage = error ? <div>{error.text}</div> : null;
  const skeleton = loading ? <SkeletonLoading /> : null;
  const content = !error ? <View cards={cards} /> : null;

  return (
    <InfiniteScroll
      dataLength={cards.length} //This is important field to render the next data
      next={onLoadMore}
      hasMore={true}
      loader={<div className="cards_wrapper_card_loadtext">Loading...</div>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }>
      <ul className="cards_wrapper">
        {errorMessage}
        {skeleton}
        {content}
      </ul>
    </InfiniteScroll>
  );
};

export default CardWrapper;

const SkeletonLoading = () => {
  const temp = [];
  for (let i = 0; i < 96; i++) {
    temp.push(
      <li key={i} className="cards_wrapper_card">
        <div className="card_image_loading">
          <div className="card_image_loading_inner" />
        </div>
      </li>
    );
  }
  return temp;
};
//multiverseid
const View = ({ cards }) => {
  if (Object.keys(cards).length === 0) return <></>;
  console.log(cards);
  return cards.map(({ id, name, imageUrl, multiverseid }) => {
    return (
      <li key={id} className="cards_wrapper_card">
        <Link to={"/card/" + multiverseid}>
          <CardImage src={imageUrl} alt={name} />
        </Link>
      </li>
    );
  });
};
View.propTypes = {
  cards: PropTypes.array,
};
