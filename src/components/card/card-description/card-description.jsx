import { useState, useEffect } from "react";

import CardLegalities from "../card-legalities/card-legalities";
import MtgSymbols from "../../mtg-symbols/mtg-symbols";

import "./card-description.scss";

const CardDescription = ({ card }) => {
  const {
    artist,
    colors,
    legalities,
    manaCost,
    name,
    originalText,
    prices,
    purchase_uris,
    rarity,
    released_at,
    set,
    setName,
    text,
    type,
  } = card;

  return (
    <div className="card_description">
      <div className="card_description_wrapper">
        <div className="card_description_wrapper_elem">
          <div className="card_description_wrapper_elem_name">{name}</div>
          <div className="card_description_wrapper_elem_mana">
            <MtgSymbols symbols={manaCost} />
          </div>
        </div>
        <div className="card_description_wrapper_elem">
          <div className="card_description_wrapper_elem_type">{type}</div>
        </div>
        <div className="card_description_wrapper_elem">
          <div className="card_description_wrapper_elem_text">
            <pre>{originalText}</pre>
          </div>
        </div>
        <div className="card_description_wrapper_elem">
          <div className="card_description_wrapper_elem_artist">
            Illustrated by: {artist}
          </div>
        </div>
        <div className="card_description_wrapper_elem">
          <CardLegalities legalities={legalities}/>
        </div>
      </div>
    </div>
  );
};

export default CardDescription;
