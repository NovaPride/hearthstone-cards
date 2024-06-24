import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import { useUniteMtgSfService } from "../../services/UniteMtgSfService";

import "./single-card-page.scss";

//рендеров много, init, обновление mtg, обновление sf, рендер unite с готовыми данными
//skill issue

const SingleCardPage = () => {
  const [card, setCard] = useState({});
  const { multiverseid } = useParams();

  const { loading, error, getCardById, clearError } = useUniteMtgSfService();

  useEffect(() => {
    const cachedCard = sessionStorage.getItem(`card_${multiverseid}`);
    if (cachedCard) {
      setCard(JSON.parse(cachedCard));
    } else {
      getCardById(multiverseid)
        .then((data) => {
          setCard(data);
          sessionStorage.setItem(`card_${multiverseid}`, JSON.stringify(data));
        })
        .catch(() => {
          console.error(`Error while fetching data from APIs! \n ${error}`);
        });
    }
  }, [multiverseid]);

  const content = !error && !loading ? <View card={card} /> : null;
  return <div className="single_card_page">{content}</div>;
};

export default SingleCardPage;

const View = ({ card }) => {
  if (Object.keys(card).length === 0) return <></>;
  console.log(card);
  const { artist, name, imageUrl } = card;
  return (
    <>
      <div>{artist}</div>
      <div>{name}</div>
      <img src={imageUrl} alt="" />
    </>
  );
};
