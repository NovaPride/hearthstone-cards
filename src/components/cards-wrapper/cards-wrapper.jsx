import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Tilt from "react-parallax-tilt";
import InfiniteScroll from "react-infinite-scroll-component";

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
        <Tilt
          className="cards_wrapper_card_tilt"
          tiltReverse={true}
          scale={1.05}>
          <img className="cards_wrapper_card_image" src={src} alt={alt} />
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
