import { useState, useEffect } from "react";

import DeckList from "../deck-list/deck-list";

import "./deck-wrapper.scss";

const DeckWrapper = () => {
  const [cards, setCards] = useState([
    { name: "urmom1", manaCost: "{5}{W}{W}" },
    { name: "urmom1" },
    { name: "urmom2" },
    { name: "urmom1" },
    { name: "urmom4" },
    { name: "urmom1" },
    { name: "urmom6" },
    { name: "urmom1dfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff" },
    { name: "urmom1" },
  ]);

  return (
    <div className="deck_wrapper">
      <DeckList cards={cards} />
    </div>
  );
};

export default DeckWrapper;
