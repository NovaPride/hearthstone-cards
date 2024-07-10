import { useEffect, useState } from "react";
import CardWrapper from "../../components/cards-wrapper/cards-wrapper";
import DeckWrapper from "../../components/deck/deck-wrapper/deck-wrapper";

import "./build-page.scss";

const BuildPage = () => {
  const [draggedCard, setDraggedCard] = useState(null);

  return (
    <div className="build_page">
      <CardWrapper
        setDraggedCard={setDraggedCard}
        settings={{ links: false }}
      />
      <DeckWrapper draggedCard={draggedCard} setDraggedCard={setDraggedCard} />
    </div>
  );
};

export default BuildPage;
