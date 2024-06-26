import { useState, useEffect } from "react";
import "./card-purchase.scss";

const CardPurchase = ({ purchase_uris }) => {
  if (!purchase_uris) return <></>;

  const [data, setData] = useState([]);

  useEffect(() => {
    const temp = [];
    for (const [key, value] of Object.entries(purchase_uris)) {
      const name = {
        cardhoarder: "Card Hoarder",
        cardmarket: "Card Market",
        tcgplayer: "TCG Player",
      }[key];
      temp.push(
        <div key={key} className="card_purchase_elem">
          Buy on
          <a href={value} className="card_purchase_elem_link">
            {name}
          </a>
        </div>
      );
    }
    setData(temp);
  }, [purchase_uris]);
  return <div className="card_purchase">{data}</div>;
};

export default CardPurchase;
