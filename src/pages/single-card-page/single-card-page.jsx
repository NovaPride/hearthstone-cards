import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import { useMTGService } from "../../services/MTGService";

import "./single-card-page.scss";

const SingleCardPage = () => {
  const [card, setCard] = useState({});
  const { multiverseid } = useParams();

  const { loading, error, getCardById, clearError } = useMTGService();

  useEffect(() => {
    getCardById(multiverseid).then((data) => setCard(data));
  }, [multiverseid]);

  const content = !error ? <View card={card} /> : null;
  return <div className="single_card_page">{content}</div>;
};

export default SingleCardPage;
//подрубить отдельную апишку, брать по мультиади и делать KRACUBO
const View = ({ card }) => {
  if (Object.keys(card).length === 0) return <></>;
  const { artist, name, imageUrl } = card;
  console.log(card);
  return (
    <>
      <div>{artist}</div>
      <div>{name}</div>
      <img src={imageUrl} alt="" />
    </>
  );
};
