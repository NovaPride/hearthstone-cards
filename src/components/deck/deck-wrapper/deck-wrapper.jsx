import { useState, useEffect } from "react";

import DeckList from "../deck-list/deck-list";

import "./deck-wrapper.scss";

const DeckWrapper = ({ draggedCard, setDraggedCard }) => {
  const [cards, setCards] = useState([]);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = () => {
    if (draggedCard) {
      setCards([...cards, draggedCard]);
      setDraggedCard(null);
    }
  };

  return (
    <div
      className="deck_wrapper"
      onDragOver={(e) => handleDragOver(e)}
      onDrop={handleDrop}>
      <DeckList cards={cards} />
    </div>
  );
};

export default DeckWrapper;
