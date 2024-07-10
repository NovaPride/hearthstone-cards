import MtgSymbols from "../../mtg-symbols/mtg-symbols";
import "./deck-list.scss";

const DeckList = ({ cards }) => {
  return (
    <ul className="deck_list">
      {cards.map(({ id, name, manaCost }, i) => (
        <li key={id + "_" + i} className="deck_list_item">
          <div className="deck_list_item_name">{name?.slice(0, 20)}</div>
          <div className="deck_list_item_manacost">
            <MtgSymbols symbols={manaCost} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default DeckList;
