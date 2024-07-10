import CardLegalities from "../card-legalities/card-legalities";
import MtgSymbols from "../../mtg-symbols/mtg-symbols";

import "./card-description.scss";

const CardDescription = ({ card }) => {
  const { artist, legalities, manaCost, name, text, type, power, toughness } =
    card;

  const manaView = manaCost ? (
    <div className="card_description_wrapper_elem_mana">
      <MtgSymbols symbols={manaCost} />
    </div>
  ) : null;
  const hpView =
    power && toughness ? (
      <div className="card_description_wrapper_elem_hp">
        {power}/{toughness}
      </div>
    ) : null;
  const textView = text ? (
    <div className="card_description_wrapper_elem">
      <div className="card_description_wrapper_elem_text">
        <pre>{text}</pre>
      </div>
    </div>
  ) : null;

  return (
    <div className="card_description">
      <div className="card_description_wrapper">
        <div className="card_description_wrapper_elem">
          <div className="card_description_wrapper_elem_name">{name}</div>
          {manaView}
        </div>
        <div className="card_description_wrapper_elem">
          <div className="card_description_wrapper_elem_type">{type}</div>
          {hpView}
        </div>
        {textView}
        <div className="card_description_wrapper_elem">
          <div className="card_description_wrapper_elem_artist">
            Illustrated by: {artist}
          </div>
        </div>
        <div className="card_description_wrapper_elem">
          <CardLegalities legalities={legalities} />
        </div>
      </div>
    </div>
  );
};

export default CardDescription;
