import { useState, useEffect } from "react";

import "./card-legalities.scss";

const CardLegalities = ({ legalities }) => {
  const [data, setData] = useState([]);

  const myComponents = [
    <div>Компонент 1</div>,
    <p>Компонент 2</p>,
    <button>Компонент 3</button>,
  ];
  useEffect(() => {
    const temp = [];
    for (const [key, value] of Object.entries(legalities)) {
      const name = {
        alchemy: "Alchemy",
        brawl: "Brawl",
        commander: "Commander",
        duel: "Duel",
        explorer: "Explorer",
        future: "Future",
        gladiator: "Gladiator",
        historic: "Historic",
        legacy: "Legacy",
        modern: "Modern",
        oathbreaker: "Oathbreaker",
        oldschool: "Old School",
        pauper: "Pauper",
        paupercommander: "Pauper Commander",
        penny: "Penny",
        pioneer: "Pioneer",
        predh: "Predh",
        premodern: "Pre-modern",
        standard: "Standard",
        standardbrawl: "Standard Brawl",
        timeless: "Timeless",
        vintage: "Vintage",
      }[key];
      temp.push(
        <div className="card_legalities_elem">
          <div className={"card_legalities_elem_name card_legalities_elem_status_" + value}>{name}</div>
        </div>
      );
    }
    setData(temp);
  }, [legalities]);

  return (
    <div className="card_legalities">
      {data}
      {/* <div className="card_legalities_elem">
        <div className="card_legalities_elem_name">oathbreaker</div>
      </div>
      <div className="card_legalities_elem">
        <div className="card_legalities_elem_name">Standart</div>
      </div>
      <div className="card_legalities_elem">
        <div className="card_legalities_elem_name">paupercommander</div>
      </div>
      <div className="card_legalities_elem">
        <div className="card_legalities_elem_name">Standart</div>
      </div>
      <div className="card_legalities_elem">
        <div className="card_legalities_elem_name">Standart</div>
      </div>
      <div className="card_legalities_elem">
        <div className="card_legalities_elem_name">Standart</div>
      </div>
      <div className="card_legalities_elem">
        <div className="card_legalities_elem_name">Standart</div>
      </div>
      <div className="card_legalities_elem">
        <div className="card_legalities_elem_name">Standart</div>
      </div>
      <div className="card_legalities_elem">
        <div className="card_legalities_elem_name">Standart</div>
      </div>
      <div className="card_legalities_elem">
        <div className="card_legalities_elem_name">Standart</div>
      </div>
      <div className="card_legalities_elem">
        <div className="card_legalities_elem_name">Standart</div>
      </div>
      <div className="card_legalities_elem">
        <div className="card_legalities_elem_name">Standart</div>
      </div> */}
    </div>
  );
};

export default CardLegalities;
