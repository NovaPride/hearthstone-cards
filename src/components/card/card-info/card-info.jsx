import "./card-info.scss";

const CardInfo = ({ card }) => {
  const { set_name, set, released_at, rarity, foil, nonfoil } = card;
  const setNameView = set_name ? (
    <div className="card_info_elem-set_name">{set_name}</div>
  ) : null;
  const setView = set ? (
    <div className="card_info_elem-set">({set})</div>
  ) : null;
  const releaseAtView = released_at ? (
    <div className="card_info_elem-released_at">Release: {released_at}</div>
  ) : null;
  const rarityView = rarity ? (
    <div className="card_info_elem-rarity">{rarity}</div>
  ) : null;
  const foilView =
    nonfoil !== null && foil !== null ? (
      <div className="card_info_elem-foil">
        {nonfoil ? "Nonfoil" : null}
        {nonfoil && foil ? "/" : null}
        {foil ? "Foil" : null}
      </div>
    ) : null;

  return (
    <div className="card_info">
      <div className="card_info_elem">
        {setNameView}
        {setView}
      </div>
      <div className="card_info_elem">{releaseAtView}</div>
      <div className="card_info_elem">
        {rarityView}
        {foilView}
      </div>
    </div>
  );
};

export default CardInfo;
